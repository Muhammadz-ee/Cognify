import { NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = '692042883308631';
const ACCESS_TOKEN = 'EAAQXVDH7inYBQqx5TgTIPKzDKvic1TatgeaJA2jvjbLnuZCzHfgW7chZBzA5PA8BhhBfqqgLSQOpDqdBBDqdLwPHUWJMeXSZClMnRIlmzknhIvgosq9M6gwY76yXZBP30udFqu5h3WzFHQhVvtz6Xh9DB0OlCVPzqihKw4CuK7IABcZCcs9nGV0nL8yGZADpCnygZDZD';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, emails, phones } = body;

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: currentTimestamp,
          event_id: eventId,
          action_source: 'website',
          user_data: {
            em: emails ? emails.map((e: string) => hash(e)) : undefined,
            ph: phones ? phones.map((p: string) => hash(p)) : undefined,
            client_user_agent: request.headers.get('user-agent'),
            client_ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
          },
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('CAPI Error:', data);
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

function hash(string: string) {
  return crypto.createHash('sha256').update(string).digest('hex');
}
