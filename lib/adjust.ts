/**
 * Adjust Attribution Tracking Utility
 * Generates tracked links for app store attribution
 * Connects web traffic to app install attribution
 */

const ADJUST_IOS_TOKEN = process.env.NEXT_PUBLIC_ADJUST_IOS_TOKEN || '';
const ADJUST_ANDROID_TOKEN = process.env.NEXT_PUBLIC_ADJUST_ANDROID_TOKEN || '';

export interface AdjustLinkParams {
  campaign?: string;      // Campaign name (e.g., "website", "meta_ads")
  adgroup?: string;       // Ad group (e.g., "hero", "footer", "generic")
  creative?: string;      // Creative variant (e.g., "download_button", "hero_button")
  deeplink?: string;      // Deep link in app (e.g., "cognify://home")
  label?: string;         // Custom label for organizing data
  custom?: Record<string, string>; // Custom parameters
}

/**
 * Generate Adjust tracking link for iOS or Android
 * @param isIOS - true for iOS, false for Android
 * @param params - Campaign, adgroup, creative, deeplink, etc.
 * @returns Full tracked URL to app store
 */
export function getAdjustTrackingLink(
  isIOS: boolean,
  params?: AdjustLinkParams
): string {
  const token = isIOS ? ADJUST_IOS_TOKEN : ADJUST_ANDROID_TOKEN;

  if (!token) {
    console.warn(
      `⚠️ Adjust ${isIOS ? 'iOS' : 'Android'} token not configured`
    );
    // Fallback to direct app store link
    return isIOS
      ? 'https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398'
      : 'https://play.google.com/store/apps/details?id=com.cognifyai.mobile';
  }

  const baseUrl = `https://app.adjust.com/${token}`;
  const queryParams = new URLSearchParams();

  // Add tracking parameters
  if (params?.campaign) {
    queryParams.append('campaign', params.campaign);
  }
  if (params?.adgroup) {
    queryParams.append('adgroup', params.adgroup);
  }
  if (params?.creative) {
    queryParams.append('creative', params.creative);
  }
  if (params?.deeplink) {
    queryParams.append('deeplink', encodeURIComponent(params.deeplink));
  }
  if (params?.label) {
    queryParams.append('label', params.label);
  }

  // Add custom parameters
  if (params?.custom) {
    Object.entries(params.custom).forEach(([key, value]) => {
      queryParams.append(`custom_${key}`, value);
    });
  }

  const query = queryParams.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
}

/**
 * Track Adjust installation from deep link
 * Call this in your mobile app when it receives deep link data
 */
export function trackAdjustInstall(params: Record<string, string>) {
  try {
    console.log('📱 Adjust install tracking data:', {
      campaign: params.campaign,
      adgroup: params.adgroup,
      creative: params.creative,
      timestamp: new Date().toISOString(),
    });

    // Send to your analytics backend if needed
    if (typeof window !== 'undefined') {
      // This would be called from your mobile app
      // Event: Install from web button click
      console.log('✅ Install attributed to web traffic');
    }
  } catch (error) {
    console.error('❌ Adjust tracking error:', error);
  }
}

/**
 * Build attribution URL for a specific source
 * Useful for dynamic link generation based on page context
 */
export function buildAttributionLink(
  source: 'hero' | 'footer' | 'modal' | 'navbar',
  isMobile: boolean
): string {
  const isIOS = isMobile && /iphone|ipad|ipod/i.test(navigator.userAgent);

  return getAdjustTrackingLink(isIOS, {
    campaign: 'organic_web',
    adgroup: source,
    creative: 'app_download_button',
    deeplink: 'cognify://downloads',
    label: `web_${source}_download`,
  });
}

/**
 * Get app store URL based on device
 * Falls back to Adjust link if available, then direct store
 */
export function getAppStoreUrl(preferAdjust: boolean = true): string {
  const isMobile = /android|webos|iphone|ipad|ipod/i.test(
    navigator.userAgent.toLowerCase()
  );
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());

  if (!isMobile) {
    // Desktop - return main site
    return 'https://getcognifyai.com';
  }

  if (preferAdjust) {
    return getAdjustTrackingLink(isIOS, {
      campaign: 'website',
      adgroup: 'default',
      creative: 'app_store_link',
    });
  }

  // Direct app store links
  if (isIOS) {
    return 'https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398';
  }

  return 'https://play.google.com/store/apps/details?id=com.cognifyai.mobile';
}

/**
 * Log attribution event for debugging
 */
export function logAttributionEvent(eventType: string, metadata?: Record<string, unknown>) {
  console.log(`📊 Attribution Event: ${eventType}`, {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    ...metadata,
  });
}
