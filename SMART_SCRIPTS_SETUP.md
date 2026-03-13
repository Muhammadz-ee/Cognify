# Meta Smart Scripts Configuration Guide

## Overview
Smart Scripts allow Meta Pixel to automatically track button clicks without additional coding. This is ideal for "Download" buttons that should trigger conversion tracking.

---

## Cognify Smart Scripts Setup

### Primary Download Button

**Business Manager Path**: 
- Data Sources → Pixels → CognifyAI Pixel → Smart Scripts

**Create Script #1: Main Download Button**

| Field | Value |
|-------|-------|
| **Script Name** | Cognify Download Button |
| **Button Selector** | `[onclick*="handleDownloadClick"]` or `.download-btn` |
| **Event Name** | `Download` |
| **Event Value** | (leave empty - no revenue tracking) |
| **Tracking Type** | Click |
| **Status** | Active ✅ |

---

## Implementation Options

### Option 1: CSS Class-Based Smart Script (Recommended)
Add a class to all download buttons:

```jsx
<Button
  onClick={handleDownloadClick}
  className="download-btn"  // ← Add this
  size="lg"
>
  Download
</Button>
```

Then in Smart Scripts:
- **Button Selector**: `.download-btn`
- **Event Name**: `Download`

### Option 2: Data Attribute Smart Script
Add a data attribute:

```jsx
<Button
  onClick={handleDownloadClick}
  data-track-event="download"  // ← Add this
  size="lg"
>
  Download
</Button>
```

Then in Smart Scripts:
- **Button Selector**: `[data-track-event="download"]`
- **Event Name**: `Download`

### Option 3: Manual Tracking (Already Implemented)
No Smart Scripts needed - we already have:
```typescript
onClick={handleDownloadClick}  // → calls trackDownload()
```

---

## Setting Up in Meta Business Suite

### Step-by-Step

1. **Login to Meta Business Manager**
   - URL: https://business.facebook.com/

2. **Go to Data Sources → Pixels**
   - Select "CognifyAI Pixel" (ID: 692042883308631)

3. **Click Smart Scripts tab**

4. **Create Script** (if not already present):
   - **Name**: "Cognify Download Conversion"
   - **Selector**: `.download-btn` (or your chosen selector)
   - **Event**: Select "Download" from dropdown
   - **Fire on**: Single click
   - **Leave empty**: Value, currency

5. **Test Script** (blue "Test" button):
   - Will activate test mode
   - Click button on live site
   - Should see confirmation in Smart Scripts

6. **Activate Script**:
   - Click toggle to enable
   - Status should show "Active"

---

## Testing Smart Scripts

### Test Mode (In Meta Business Manager)

1. Enable "Test" mode on script
2. Visit website in new incognito tab
3. Click the target button
4. Return to Business Manager
5. Should see event in test results within 1-2 minutes

### Verify in Web Pixel Helper

Google Chrome Extension: "Meta Pixel Helper"

1. Install from Chrome Web Store
2. Go to your site
3. Click extension icon
4. Should show:
   - ✅ Pixel initialized
   - ✅ PageView event
   - ✅ Download event (after clicking button)

---

## Advanced Smart Script Features

### Conditional Tracking
Track only on specific pages:
- **CSS Selector**: `.download-btn` 
- **Condition**: Page URL contains `/` (all URLs)
- **Fire on**: Click

### Event Deduplication
Since we already have `trackDownload()` firing fbq events, be aware:
- **With Smart Scripts**: Events may fire twice (once from JS, once from Smart Script)
- **Solution**: Use unique `event_id` to deduplicate in Meta Events Manager

### Multiple Button Types
Create separate scripts for:
1. **Main Download Button** - `.download-btn`
2. **Secondary Download** - `.download-secondary`
3. **Call-to-action** - `.cta-download`

---

## Troubleshooting Smart Scripts

| Issue | Solution |
|-------|----------|
| Script not firing | Verify CSS selector matches button element |
| Duplicate events | Check if both Smart Script and fbq tracking active |
| Events not in Manager | Wait 5-15 min, verify Pixel ID correct |
| Script disabled | Re-enable in Smart Scripts settings |

---

## Multi-Channel Tracking Summary

| Channel | Method | Status |
|---------|--------|--------|
| **Client-Side** | fbq('track', 'Download') | ✅ [tracking.ts](../lib/tracking.ts) |
| **Server-Side** | CAPI POST /api/track | ✅ [route.ts](../app/api/track/route.ts) |
| **Smart Scripts** | Meta automatic detection | ⏳ Optional - Configure in Business Manager |
| **Universal Analytics** | (if GA installed) | - Not configured |

---

## Recommended Configuration

**For Maximum Data Accuracy:**
1. ✅ Keep manual `trackDownload()` tracking (already done)
2. ⏳ ADD Smart Scripts as backup deduplication via event_id
3. ✅ Monitor in [Events Manager](https://business.facebook.com/events/)

This ensures:
- Primary tracking: fbq + CAPI with unique event_id
- Backup tracking: Smart Scripts for fallback
- Zero duplicate counting: event_id deduplication

---

## Meta Business Manager Links

- **Pixel Settings**: https://business.facebook.com/settings/pixel
- **Events Manager**: https://business.facebook.com/events/
- **Smart Scripts**: https://business.facebook.com/settings/pixel/[PIXEL_ID]/smart-scripts
- **Conversions API**: https://business.facebook.com/settings/pixel/[PIXEL_ID]/conversions-api

Replace `[PIXEL_ID]` with: `692042883308631`

