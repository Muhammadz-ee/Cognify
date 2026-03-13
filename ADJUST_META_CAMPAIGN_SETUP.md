# Complete Tracking Ecosystem - Final Steps

## Step 1: Configure Adjust Smart Banners ✅

Adjust Smart Banners automatically detect mobile users and show install prompts with tracking enabled.

### What is Adjust Smart Banner?
- Detects mobile users on your web page
- Shows native iOS/Android download prompt
- Tracks attribution: Web user → App install
- Replaces standard app store links with tracked versions

### Implementation

#### Option A: Adjust Web SDK (Recommended)

Add to [app/layout.tsx](app/layout.tsx) in the `<head>`:

```typescript
<Script
  id="adjust-sdk"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `
      (function(a,b,c,d){
        a='Adjust';
        b=window;
        c='https://cdn.adjust.com/adjust-7.27.1.min.js';
        if(b[a])return;
        d=b.document.createElement('script');
        d.src=c;
        d.async=true;
        b.document.head.appendChild(d);
        d.onload=()=>{
          Adjust.appToken='YOUR_ADJUST_TOKEN';
          Adjust.environment='production';
          Adjust.logLevel='info';
          Adjust.start();
        };
      })();
    `
  }}
/>
```

#### Option B: Manual Smart Banner

Create [components/adjust/adjust-smart-banner.tsx](components/adjust/adjust-smart-banner.tsx):

```typescript
"use client";

import { useEffect, useState } from "react";

export function AdjustSmartBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if mobile
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile = /iphone|ipad|ipod|android/.test(userAgent);
    setIsMobile(mobile);
    
    // Show banner if mobile and not dismissed
    if (mobile && !localStorage.getItem("adjust-banner-dismissed")) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner || !isMobile) return null;

  const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  const appUrl = isIOS
    ? "https://app.adjust.com/YOUR_IOS_TOKEN" // iOS tracked link
    : "https://app.adjust.com/YOUR_ANDROID_TOKEN"; // Android tracked link

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
      <div>
        <p className="font-bold">Download Cognify</p>
        <p className="text-sm opacity-90">Get AI-powered summaries on the go</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            localStorage.setItem("adjust-banner-dismissed", "true");
            setShowBanner(false);
          }}
          className="px-4 py-2 bg-black/20 rounded hover:bg-black/30"
        >
          Dismiss
        </button>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-purple-600 font-bold rounded hover:bg-gray-100"
        >
          Download
        </a>
      </div>
    </div>
  );
}
```

Add to [app/layout.tsx](app/layout.tsx):
```typescript
import { AdjustSmartBanner } from "@/components/adjust/adjust-smart-banner";

export default function RootLayout() {
  return (
    <html>
      <body>
        <AdjustSmartBanner />
        {children}
      </body>
    </html>
  );
}
```

---

## Step 2: Implement Adjust Tracking Links ✅

Adjust tracking links connect web visitors to app installs with full attribution data.

### Get Your Adjust Tokens

**In Adjust Dashboard**:
1. Login to [adjust.com](https://adjust.com)
2. Go to **App Settings** for your app
3. Copy these tokens:
   - **App Token**: Used for SDK initialization
   - **iOS Tracking Link**: https://app.adjust.com/YOUR_IOS_TOKEN
   - **Android Tracking Link**: https://app.adjust.com/YOUR_ANDROID_TOKEN

### Link Format

```
https://app.adjust.com/YOUR_TOKEN?idfa=IDFA&gps_adid=GPSID&deeplink=DEEPLINK
```

### Tracking Link Parameters

```typescript
interface AdjustTrackingParams {
  // Device IDs (auto-captured by Adjust)
  idfa?: string;           // iOS Identifier for Advertisers
  gps_adid?: string;       // Google Play Services ID
  
  // Deep linking
  deeplink?: string;       // Where to send user in app
  
  // Custom parameters
  campaign?: string;       // Campaign name
  adgroup?: string;        // Ad group name
  creative?: string;       // Creative ID
}
```

### Create Adjust Link Builder

Create [lib/adjust.ts](lib/adjust.ts):

```typescript
/**
 * Adjust Attribution Tracking
 * Generates tracked links for iOS and Android app stores
 */

const ADJUST_IOS_TOKEN = process.env.NEXT_PUBLIC_ADJUST_IOS_TOKEN || 'YOUR_IOS_TOKEN';
const ADJUST_ANDROID_TOKEN = process.env.NEXT_PUBLIC_ADJUST_ANDROID_TOKEN || 'YOUR_ANDROID_TOKEN';

export interface AdjustLinkParams {
  campaign?: string;
  adgroup?: string;
  creative?: string;
  deeplink?: string;
}

/**
 * Generate Adjust tracking link
 */
export function getAdjustTrackingLink(isIOS: boolean, params?: AdjustLinkParams): string {
  const token = isIOS ? ADJUST_IOS_TOKEN : ADJUST_ANDROID_TOKEN;
  const baseUrl = `https://app.adjust.com/${token}`;
  
  const queryParams = new URLSearchParams();
  
  if (params?.campaign) queryParams.append('campaign', params.campaign);
  if (params?.adgroup) queryParams.append('adgroup', params.adgroup);
  if (params?.creative) queryParams.append('creative', params.creative);
  if (params?.deeplink) queryParams.append('deeplink', params.deeplink);
  
  const query = queryParams.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
}

/**
 * Track install attribution
 * Called when user lands on app from tracked link
 */
export function trackAdjustInstall(params: Record<string, string>) {
  try {
    // This would be called in your mobile app
    // when it receives the deep link
    console.log('Adjust install tracked:', params);
  } catch (error) {
    console.error('Adjust tracking error:', error);
  }
}
```

### Update Download Buttons with Adjust Links

Update [components/landing/footer-download-buttons.tsx](components/landing/footer-download-buttons.tsx):

```typescript
import { getAdjustTrackingLink } from "@/lib/adjust";

export function FooterDownloadButtons() {
  const handleDownloadClick = async () => {
    await trackDownload();
  };

  // Generate Adjust tracking links
  const iosLink = getAdjustTrackingLink(true, {
    campaign: 'website',
    adgroup: 'footer',
    creative: 'download_button',
    deeplink: 'cognify://home'
  });

  const androidLink = getAdjustTrackingLink(false, {
    campaign: 'website',
    adgroup: 'footer',
    creative: 'download_button',
    deeplink: 'cognify://home'
  });

  return (
    <div className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2">
      {/* App Store */}
      <a href={iosLink} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
        {/* ... button code ... */}
      </a>

      {/* Google Play */}
      <a href={androidLink} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
        {/* ... button code ... */}
      </a>
    </div>
  );
}
```

---

## Step 3: Connect Web Traffic → App Install Attribution ✅

### Attribution Flow

```
Web User Clicks Download
    ↓
Adjust Tracking Link Fires
    ├─ Captures Device ID (IDFA/GPSID)
    ├─ Records campaign/adgroup/creative
    └─ Generates click ID
    ↓
User Installs App from Store
    ↓
App Opens & Calls Adjust SDK
    ├─ Sends Device ID
    ├─ Sends Click ID from deep link
    └─ Adjust matches: Click → Install
    ↓
Conversion Recorded
├─ Source: Website
├─ Campaign: "website"
├─ Channel: "organic_web"
└─ Attr Window: 24-28 days
```

### Configure Adjust SDK in Your Mobile App

**iOS (Swift)**:
```swift
import Adjust

func application(_ application: UIApplication, 
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    let adjustConfig = ADJConfig(appToken: "YOUR_APP_TOKEN", environment: ADJEnvironmentProduction)
    
    // Enable logging
    adjustConfig?.logLevel = ADJLogLevelInfo
    
    // Set attribution delegate
    adjustConfig?.delegate = self
    
    Adjust.appDidLaunch(adjustConfig)
    return true
}

// Handle deep links
func application(UIApplication, continue NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    if let url = userActivity.webpageURL {
        Adjust.appWillOpenUrl(url)
    }
    return true
}
```

**Android (Kotlin)**:
```kotlin
import com.adjust.sdk.Adjust
import com.adjust.sdk.AdjustConfig

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val config = AdjustConfig(this, "YOUR_APP_TOKEN", AdjustConfig.ENVIRONMENT_PRODUCTION)
        config.setLogLevel(AdjustConfig.LogLevel.INFO)
        Adjust.onCreate(config)
        
        // Handle deep link
        val intent = intent
        val data: Uri? = intent.data
        Adjust.appWillOpenUrl(data, this)
    }
}
```

### Set Up Attribution Window

**In Adjust Dashboard** → **App Settings** → **Attribution**:
- **Tracker Click Attribution Window**: 28 days
- **Deep Link Click Attribution Window**: 28 days
- **App Install Attribution Window**: 28 days

This means: If user clicks on 3/1 and installs on 3/15, it's still attributed to that click.

---

## Step 4: Begin Meta Campaign Optimization ✅

### Create Conversions Campaign in Meta Ads Manager

**Step 1: Create Campaign**
1. Go to [ads.facebook.com](https://ads.facebook.com)
2. Click **Create** → New Campaign
3. Select **Conversions** as objective
4. Name: `Cognify App Downloads - Website`

**Step 2: Configure Pixel**
1. In **Ad Set Settings**
2. Select **Pixel**: CognifyAI Pixel (692042883308631)
3. Select **Event**: Download

**Step 3: Set Up Conversion Tracking**
```
Campaign Objective: Conversions
Pixel: CognifyAI Pixel
Event: Download
Conversion Value: Optional (leave blank)
Attribution Window: 28 days
```

**Step 4: Configure Targeting**
```
Audience: US (or your target region)
Age: 16-65
Interests: Education, AI, Learning, Productivity
Behaviors: Mobile app users, Tech enthusiasts
```

**Step 5: Set Budget & Bidding**
```
Daily Budget: $10-50 (start small)
Bid Strategy: Lowest Cost
Optimization for: Download Event
Conversion Cap: None (unless needed)
```

### Monitor Campaign Performance

**Key Metrics to Watch**:
| Metric | Target | Action |
|--------|--------|--------|
| **CPC** (Cost Per Click) | < $0.30 | ✅ Good, increase budget |
| **CTR** (Click-Through Rate) | > 2% | ✅ Good, scale campaign |
| **Conversion Rate** | > 5% | ✅ Good, expand audience |
| **ROAS** (Return on Ad Spend) | > 3:1 | ✅ Profitable, scale up |

### Use Conversion Audiences

**Audience 1: Website Converters**
```
Source: CognifyAI Pixel
Event: Download
Time Window: Last 30 days
Size: Dynamic (grows with conversions)
Use: Upsell campaigns
```

**Audience 2: Website Visitors (No Download)**
```
Source: CognifyAI Pixel
Event: PageView (not Download)
Time Window: Last 14 days
Size: 50K-100K
Use: Retargeting campaigns
```

**Audience 3: Look-alike of Converters**
```
Source: Lookalike Audience
Seed: Website Converters (above)
Country: Same as seed
Size: 1% (narrowest), up to 10%
Use: Cold traffic campaigns
```

### A/B Testing Setup

**Test Variable 1: Messaging**
```
Ad Set A: "Download AI-Powered Summaries"
Ad Set B: "Master 10 Hours in 10 Minutes"
Budget: 50% split
Duration: 7 days
Winner: Scale the higher ROAS ad set
```

**Test Variable 2: Audience**
```
Ad Set A: Broad audience (16-65)
Ad Set B: Narrow (24-45, college educated)
Budget: 50% split
Duration: 7 days
Winner: Use winning audience for scale-up
```

**Test Variable 3: Creative**
```
Ad Set A: Video ad
Ad Set B: Static image
Budget: 50% split
Duration: 7 days
Winner: Scale winning creative
```

---

## Integration Summary

### Complete Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    WEB VISITOR                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Sees Meta Ad (tracked by pixel)                        │
│  2. Clicks Download Button                                 │
│  3. fbq event fires instantly                              │
│  4. CAPI event sent to Meta server-side                    │
│  5. Adjust tracking link opens app store                   │
│                                                             │
└──────────────┬──────────────────────────────────────────────┘
               │
               ├─→ [Meta Events Manager]
               │   └─ Records: Download conversion
               │      └─ Available for optimization
               │
               ├─→ [Adjust Dashboard]
               │   └─ Records: Click tracked
               │      └─ Waits for install
               │
               └─→ [App Store]
                   └─ User installs app

┌─────────────────────────────────────────────────────────────┐
│                 APP USER (After 1-28 days)                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Opens app for first time                               │
│  2. App calls Adjust SDK init                              │
│  3. Device ID sent to Adjust                               │
│  4. Adjust matches Click ID → Install ID                   │
│  5. Attribution window checked (within 28 days?)           │
│  6. Install attributed to Web Traffic                      │
│                                                             │
└──────────────┬──────────────────────────────────────────────┘
               │
               ├─→ [Adjust Attribution]
               │   └─ Records: Install from Web
               │      └─ Sets user properties
               │
               ├─→ [Meta Conversion Lift Study]
               │   └─ Measures: Web downloads vs App installs
               │
               └─→ [Your Analytics]
                   └─ Full funnel: Ad → Web → App
```

---

## Environment Variables Needed

Add to `.env.local`:

```bash
# Meta Pixel (already set)
NEXT_PUBLIC_META_PIXEL_ID=692042883308631
META_CAPI_ACCESS_TOKEN=EAAQXVDH7in...

# Adjust Tracking (new)
NEXT_PUBLIC_ADJUST_IOS_TOKEN=YOUR_IOS_TOKEN
NEXT_PUBLIC_ADJUST_ANDROID_TOKEN=YOUR_ANDROID_TOKEN
ADJUST_APP_TOKEN=YOUR_APP_TOKEN
```

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| [lib/adjust.ts](lib/adjust.ts) | ✨ CREATE | Adjust link builder |
| [components/adjust/adjust-smart-banner.tsx](components/adjust/adjust-smart-banner.tsx) | ✨ CREATE | Mobile smart banner |
| [components/landing/footer-download-buttons.tsx](components/landing/footer-download-buttons.tsx) | 🔧 UPDATE | Use Adjust tracked links |
| [app/layout.tsx](app/layout.tsx) | 🔧 UPDATE | Add Adjust SDK script |
| [.env.example](.env.example) | 🔧 UPDATE | Add Adjust tokens |

---

## Rollout Timeline

| Phase | Duration | Actions |
|-------|----------|---------|
| **Phase 1: Setup** | Day 1-2 | Create Adjust account, get tokens, set up Smart Banner |
| **Phase 2: Testing** | Day 3-7 | Test tracking links locally, verify attribution |
| **Phase 3: Soft Launch** | Week 2 | Deploy with $10/day budget test campaign |
| **Phase 4: Optimization** | Week 3-4 | A/B test creatives, audiences, scale winner |
| **Phase 5: Scale** | Week 5+ | Increase budget 20-30% weekly based on ROAS |

---

## Success Metrics

By end of Phase 3, you should see:
- ✅ 100+ daily visitors
- ✅ 5-10 daily downloads
- ✅ 2-5 installs attributed from web
- ✅ CPC < $0.40
- ✅ CTR > 1.5%

By Phase 5:
- ✅ 1000+ daily visitors
- ✅ 50-100 daily downloads
- ✅ 20-40 daily attributed installs
- ✅ ROAS > 2:1
- ✅ CAC < $2 per verified install

---

## Next Actions

1. **Create Adjust Account**: [adjust.com/signup](https://adjust.com)
2. **Generate Tokens**: Get iOS and Android tracking tokens
3. **Create Campaign**: Set up first Meta Conversions campaign
4. **Deploy Code**: Add Adjust integration to your website
5. **Monitor Funnel**: Track Web → App conversion daily

Questions? Need help setting any of these up?
