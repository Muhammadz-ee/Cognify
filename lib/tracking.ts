/**
 * Meta Pixel & Conversions API (CAPI) Tracking Utility
 * Handles dual-tracking: client-side (fbq) + server-side (CAPI)
 */

// import { v4 as uuidv4 } from 'crypto';

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

/**
 * Generate a unique event ID for tracking
 * This prevents duplicate counting between fbq and CAPI
 */
function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get user IP address (client-side approximation)
 */
async function getUserIp(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Failed to fetch IP:', error);
    return '127.0.0.1';
  }
}

/**
 * Track Download button clicks
 * Fires both client-side (fbq) and server-side (CAPI) events
 *
 * @param userEmails - Optional email addresses for matching
 * @param userPhones - Optional phone numbers for matching
 */
export async function trackDownload(
  userEmails?: string[],
  userPhones?: string[]
): Promise<void> {
  const eventId = generateEventId();
  const timestamp = Math.floor(Date.now() / 1000);

  try {
    // 1. Fire client-side Meta Pixel event
    if (window.fbq) {
      window.fbq('track', 'Download', {
        event_id: eventId,
        timestamp,
        action_source: 'website',
      });
      console.log(
        '✅ Client event fired (fbq)',
        { event_id: eventId, event: 'Download' }
      );
    } else {
      console.warn('⚠️ fbq not available for client tracking');
    }

    // 2. Fire server-side CAPI event (non-blocking)
    fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName: 'Download',
        eventId,
        emails: userEmails || [],
        phones: userPhones || [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('✅ Server event sent (CAPI)', data);
        } else {
          console.error('❌ CAPI error', data.error);
        }
      })
      .catch((error) => {
        console.error('❌ Server tracking failed:', error);
      });
  } catch (error) {
    console.error('❌ Tracking error:', error);
  }
}

/**
 * Track Page Views (already handled by Meta Pixel init)
 * This is just a helper if you need explicit page tracking
 */
export function trackPageView(): void {
  if (window.fbq) {
    window.fbq('track', 'PageView');
    console.log('✅ PageView tracked');
  }
}

/**
 * Track Add to Cart events
 */
export function trackAddToCart(
  value?: number,
  currency?: string
): void {
  const eventId = generateEventId();

  if (window.fbq) {
    window.fbq('track', 'AddToCart', {
      event_id: eventId,
      value: value || 0,
      currency: currency || 'USD',
    });
    console.log('✅ AddToCart tracked', { event_id: eventId });
  }

  // Also send to server
  fetch('/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventName: 'AddToCart',
      eventId,
    }),
  }).catch((error) => console.error('AddToCart server tracking failed:', error));
}

/**
 * Track Complete Registration events
 */
export function trackCompleteRegistration(): void {
  const eventId = generateEventId();

  if (window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      event_id: eventId,
    });
    console.log('✅ CompleteRegistration tracked', { event_id: eventId });
  }

  fetch('/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventName: 'CompleteRegistration',
      eventId,
    }),
  }).catch((error) =>
    console.error('CompleteRegistration server tracking failed:', error)
  );
}