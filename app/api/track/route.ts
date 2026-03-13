/**
 * Meta Conversions API (CAPI) Endpoint
 * Handles server-side conversion event tracking for Meta Pixel
 * Primary Event: Download (Button Click)
 */

import { NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '692042883308631';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || 'EAAQXVDH7inYBQqx5TgTIPKzDKvic1TatgeaJA2jvjbLnuZCzHfgW7chZBzA5PA8BhhBfqqgLSQOpDqdBBDqdLwPHUWJMeXSZClMnRIlmzknhIvgosq9M6gwY76yXZBP30udFqu5h3WzFHQhVvtz6Xh9DB0OlCVPzqihKw4CuK7IABcZCcs9nGV0nL8yGZADpCnygZDZD';

/**
 * Health check endpoint
 * Verifies Meta Pixel configuration and token validity
 */
export async function GET() {
  try {
    const isConfigured = {
      pixelId: !!PIXEL_ID,
      pixelIdValue: PIXEL_ID,
      accessToken: !!ACCESS_TOKEN,
      hasValidToken: ACCESS_TOKEN.length > 20,
    };

    return NextResponse.json({
      status: 'healthy',
      meta: {
        pixelId: PIXEL_ID,
        pixelConfigured: !!PIXEL_ID,
        capiConfigured: !!ACCESS_TOKEN && ACCESS_TOKEN.length > 20,
        primaryEvent: 'Download',
        message: 'Meta Pixel & CAPI endpoint ready',
      },
    });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json({ status: 'error', error: String(error) }, { status: 500 });
  }
}

/**
 * Server-side conversion event tracking
 * Called by client after fbq event for CAPI deduplication
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, emails, phones } = body;

    // Validate required fields
    if (!eventName || !eventId) {
      return NextResponse.json(
        { error: 'Missing eventName or eventId' },
        { status: 400 }
      );
    }

    // Current Unix timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Build CAPI event data with proper structure
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: currentTimestamp,
          event_id: eventId, // Deduplication with client-side fbq event
          action_source: 'website',
          user_data: {
            em: emails && emails.length > 0 ? emails.map((e: string) => hash(e)) : undefined,
            ph: phones && phones.length > 0 ? phones.map((p: string) => hash(p)) : undefined,
            client_user_agent: request.headers.get('user-agent') || undefined,
            client_ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
          },
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    // Send to Meta CAPI endpoint
    const capiUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;
    const response = await fetch(capiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const responseData = await response.json();

    // Log successful event receipt
    if (response.ok && responseData.events_received === 1) {
      console.log('✅ CAPI Event Received', {
        event: eventName,
        eventId,
        pixelId: PIXEL_ID,
        timestamp: currentTimestamp,
        fbtrace_id: responseData.fbtrace_id || 'N/A',
      });

      return NextResponse.json({
        success: true,
        message: 'Event sent to Meta CAPI',
        data: {
          events_received: responseData.events_received,
          fbtrace_id: responseData.fbtrace_id,
          eventId,
        },
      });
    }

    // Handle CAPI errors
    console.error('❌ CAPI Error', {
      event: eventName,
      eventId,
      response: responseData,
      status: response.status,
    });

    return NextResponse.json(
      {
        error: 'CAPI request failed',
        details: responseData,
      },
      { status: response.status || 400 }
    );
  } catch (error) {
    console.error('❌ Server Error:', error);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * SHA256 hash for PII (emails, phones)
 * Required by Meta CAPI for user data matching
 */
function hash(value: string): string {
  if (!value) return '';
  return crypto
    .createHash('sha256')
    .update(value.toLowerCase().trim()) // Normalize before hashing
    .digest('hex');
}
