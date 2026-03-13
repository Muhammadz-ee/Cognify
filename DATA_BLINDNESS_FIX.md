# Data Blindness Fix: Verification & Testing Guide

## ✅ Implementation Complete

All three layers of tracking are now configured and ready to monitor Download button clicks.

---

## Verification Checklist

### 1. **Meta Pixel PageView on Load** ✅
**Location**: [app/layout.tsx](app/layout.tsx#L95-L120)

```typescript
// Fires automatically on page load via lazyOnload strategy
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
```

**To verify in browser**:
1. Open DevTools → Network tab
2. Refresh page
3. Look for request to `connect.facebook.net/fbevents.js`
4. Check Console → should see no fbq errors

---

### 2. **Download Button Tracking** ✅  
**Location**: [components/landing/hero.tsx](components/landing/hero.tsx#L28-L30)

**What happens when user clicks Download**:
1. `trackDownload()` is called immediately
2. Client-side fbq event fires: `fbq('track', 'Download', {...})`
3. Server-side CAPI POST sent to `/api/track`
4. Both events generate unique `event_id` for deduplication

---

### 3. **CAPI Server-Side Events** ✅
**Location**: [app/api/track/route.ts](app/api/track/route.ts)

**Configuration**:
```
Pixel ID: 692042883308631
CAPI Version: v19.0
Event Type: Download
Primary Conversion: Yes
```

---

## How to Test the Implementation

### Test 1: Check Meta Pixel Initialization

```bash
# In browser console while on homepage:
window.fbq
# Should output: ƒ fbq() with loaded=true
```

### Test 2: Manually Fire Download Event

```bash
# In browser console:
trackDownload()
# Should print to console: "✅ Client event fired (fbq)"
# And "✅ Server event sent (CAPI)"
```

### Test 3: Monitor Network Requests

1. Open DevTools → Network tab
2. Click Download button
3. Should see:
   - `fbevents.js` → Already loaded
   - `POST /api/track` → Response: `{"success": true, "data": {...}}`

### Test 4: Check Meta Events Manager

1. Go to [facebook.com/ads/manager](https://facebook.com/ads/manager)
2. Events → Conversions
3. Filter by "Download" event
4. Events should appear within 5-15 minutes

---

## Environment Variables Setup

Add these to `.env.local`:

```env
NEXT_PUBLIC_META_PIXEL_ID=692042883308631
META_CAPI_ACCESS_TOKEN=EAAQXVDH7inYBQqx5TgTIPKzDKvic1TatgeaJA2jvjbLnuZCzHfgW7chZBzA5PA8BhhBfqqgLSQOpDqdBBDqdLwPHUWJMeXSZClMnRIlmzknhIvgosq9M6gwY76yXZBP30udFqu5h3WzFHQhVvtz6Xh9DB0OlCVPzqihKw4CuK7IABcZCcs9nGV0nL8yGZADpCnygZDZD
```

---

## Smart Scripts Configuration

For additional button tracking beyond the primary Download button:

1. **Login to Meta Business Manager** → Select Pixel "CognifyAI Pixel"
2. **Events Manager** → Smart Scripts tab
3. **Create Smart Script** for each button:
   - **Button Selector**: Target CSS selector
   - **Event Name**: `Download`
   - **Value**: Optional (for revenue tracking)
   
**Example Smart Script**:
```javascript
// Targets any element with .download-btn class
selector: '.download-btn'
event: 'Download'
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| CAPI returns 400 error | Check `test_event_code` is outside data array (not inside) |
| Events not appearing in manager | Wait 5-15 min, verify Pixel ID matches Business Suite |
| fbq undefined error | Ensure `NEXT_PUBLIC_META_PIXEL_ID` is set in `.env.local` |
| Duplicate events | Check if both fbq and CAPI have same `event_id` |

---

## Files Modified

| File | Changes |
|------|---------|
| [lib/tracking.ts](lib/tracking.ts) | ✨ NEW - Tracking utility with fbq + CAPI support |
| [components/landing/hero.tsx](components/landing/hero.tsx) | 🔧 Added import and `trackDownload()` call |
| [app/api/track/route.ts](app/api/track/route.ts) | 🔧 Updated to use env variables |
| [.env.example](.env.example) | 🔧 Corrected variable names (NEXT_PUBLIC_ prefix) |

---

## Next Steps

1. ✅ Set up `.env.local` with real credentials
2. ✅ Deploy to production
3. ✅ Wait 5-15 minutes for events to appear in Meta Events Manager
4. ✅ Monitor conversion data in Meta Ads Manager
5. ✅ Create audience from converters for retargeting

---

## References

- [Meta Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [Conversions API Guide](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Smart Scripts Setup](https://www.facebook.com/business/help/2188543842432000)

