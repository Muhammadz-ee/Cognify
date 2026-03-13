# Meta Campaign Setup - Quick Start Guide

## 🚀 Launch Your First Conversion Campaign

Follow these steps to start running ads with your Download event.

---

## Step 1: Prerequisites (5 minutes)

✅ **You already have:**
- Meta Pixel installed (692042883308631)
- Download event configured
- CAPI sending server-side events

✅ **Verify before starting:**
- [ ] Go to [business.facebook.com/events](https://business.facebook.com/events)
- [ ] Select **CognifyAI Pixel**
- [ ] You see **Download** events coming in
- [ ] Count > 0 in last 24 hours

If not, check [VERIFICATION_COMPLETE.md](VERIFICATION_COMPLETE.md#testing-checklist)

---

## Step 2: Create Campaign (5 minutes)

1. Go to [ads.facebook.com](https://ads.facebook.com)
2. Click **Campaigns** in left sidebar
3. Click **Create** button (blue)
4. Select **Conversions** as campaign objective

```
Campaign Name: Cognify App Downloads - Website Traffic
Campaign Objective: Conversions
```

Click **Continue**

---

## Step 3: Configure Ad Set (10 minutes)

### Pixel Setup
```
Pixel: CognifyAI Pixel (692042883308631)
Event: Download
```

### Audience Setup
```
Location: United States (or your target country)
Age: 16-65
Interests:
  - Education
  - Learning
  - Artificial intelligence
  - Podcasts
  - Productivity
  - Self-improvement
```

### Placement Setup
```
Automatic Placements (recommended for new campaigns)
├─ Feed
├─ Stories
├─ Reels
├─ In-Stream Video
└─ Audience Network
```

### Budget & Bidding
```
Daily Budget: $10
Bid Strategy: Lowest Cost
Optimization for: Download Event
Conversion Delay: Standard
Campaign Budget Optimization: OFF (for testing)
```

---

## Step 4: Create Ad (10 minutes)

### Ad Format: Video (Recommended)
- **Format**: Single Video
- **Media**: Upload 15-30 second video showing app features
- **Text**: 
  ```
  Podcast Summaries Powered by AI 🎧
  
  Master any podcast in minutes
  
  Download Free
  ```
- **Headline**: Download Cognify
- **Description**: AI summaries of your favorite podcasts

### Ad Format: Carousel (Alternative)
- **Card 1**: App interface screenshot
- **Card 2**: "AI Summaries" feature
- **Card 3**: "Download Free" CTA

### Landing Page
```
Destination: Your Website URL
(example: https://getcognifyai.com)
```

---

## Step 5: Review & Launch

1. Review all settings
2. Click **Publish**
3. Campaign goes **PENDING** (wait 10-30 min for approval)
4. Status changes to **ACTIVE**

---

## Step 6: Monitor First 24 Hours

### Watch These Metrics

| Metric | What It Means | Healthy Range |
|--------|---------------|---------------|
| **Impressions** | Ad shown to users | 500-2000 |
| **Clicks** | Users clicked ad | 10-50 |
| **CPC** | Cost per click | < $0.50 |
| **CTR** | Click-through rate | > 1% |
| **Conversions** | Download events | 1-5 |
| **CPA** | Cost per download | < $2 |

### Where to Check
1. Go to [ads.facebook.com/campaigns](https://ads.facebook.com)
2. Select your campaign
3. Scroll down to see **Results** table

---

## Step 7: Optimize (After 24-48 hours)

### If CTR < 1%
**Problem**: Ad not engaging  
**Solution**:
- Change creative (try video if using image)
- Refresh headline/text
- Adjust audience targeting
- Increase budget to 5x spend ($50/day)

### If CPA > $3
**Problem**: Too expensive per download  
**Solution**:
- Widen audience (remove some interests)
- Try different placements (add Reels, Stories)
- Test lower age range (18-35)
- Reduce budget until CTR improves

### If Conversion < 1
**Problem**: No conversions yet  
**Solution**:
- Wait another 24 hours (need data)
- Increase budget to $20-30/day
- Verify pixel is firing (check Events Manager)
- Check dev console for JavaScript errors

---

## Advanced: A/B Test Setup

### Test 1: Messaging

**Create 2 Ad Sets**:

```
Ad Set A:
├─ Headline: "AI-Powered Podcast Summaries"
├─ Text: "Save 10 hours a day"
└─ Budget: $5/day

Ad Set B:
├─ Headline: "Master Any Podcast in Minutes"
├─ Text: "Never miss key insights again"
└─ Budget: $5/day

Duration: 7 days
Winner: Scale the higher ROAS ad set 2x
```

### Test 2: Audience

```
Ad Set A (Broad):
├─ Age: 18-65
├─ Interests: Education, Learning, AI
└─ Budget: $5/day

Ad Set B (Narrow):
├─ Age: 24-45
├─ Interests: Education, Productivity, Podcasts
├─ Behaviors: College educated
└─ Budget: $5/day

Duration: 7 days
Winner: Scale winner to $20/day
```

### Test 3: Creative

```
Ad Set A (Video):
├─ 30 sec video showing app in action
└─ Budget: $5/day

Ad Set B (Carousel):
├─ 3-card carousel of features
└─ Budget: $5/day

Duration: 7 days
Winner: Use winning creative for scale
```

---

## Scaling Playbook

Once you have **positive ROAS** (3x or higher):

### Week 1: Foundation
- Daily Budget: $10
- Target: 10-20 conversions/day
- Focus: Product feedback

### Week 2: Validation
- Daily Budget: $25 (2.5x increase)
- Target: 25-50 conversions/day
- Focus: Confirm ROAS holds

### Week 3: Acceleration
- Daily Budget: $50 (2x increase)
- Target: 50-100 conversions/day
- Focus: Audience expansion

### Week 4+: Scale
- Daily Budget: $100+
- Target: 100+ conversions/day
- Focus: Channel profitability

### Golden Rule
**Never increase budget > 20-30% in one day**  
Let the algorithm adjust to new budget first (2-3 days per change)

---

## Using Conversion Audiences

### Audience 1: Website Converters

Create audience from Download event:

1. Go to **Audiences** → **Create Audience**
2. Select **Custom Audience**
3. Choose **Website Traffic**
4. Select **Website Visitors by Actions**
5. Configure:
   ```
   Pixel: CognifyAI Pixel
   Event: Download
   Time Window: Last 30 days
   ```
6. Name: "Cognify Downloaders - 30d"

**Use for**: Upsell campaigns, feature depth ads

### Audience 2: Lookalike (Converters)

1. Go to **Audiences** → **Create Audience**
2. Select **Lookalike Audience**
3. Seed: "Cognify Downloaders - 30d"
4. Country: United States
5. Audience Size: 1% (most similar)
6. Name: "Cognify Converters Lookalike - 1%"

**Use for**: New user acquisition at high quality

### Audience 3: Exclusion (Already Converted)

Use "Cognify Downloaders - 30d" as **Exclusion** in new campaigns  
(Don't re-target users who already downloaded)

---

## Troubleshooting

### "Not eligible to run conversion ads"
**Solution**: Ad account needs more history or spending limit  
→ Check account settings, add payment method

### "No conversion data showing"
**Solution**: Not enough data yet (need 50+ conversions minimum)  
→ Wait 3-5 days and check again

### "Ads disappearing/being paused"
**Solution**: Policy violation or budget depleted  
→ Check **Ads Manager** for warning icon  
→ Check payment method has funds

### "CPA too high"
**Solution**: Poor targeting or weak creative  
→ Start with **Broad** targeting (remove interests)  
→ Test different creative (video, carousel, etc.)

---

## Daily Monitoring Checklist

Every morning, check:

- [ ] Campaign is **ACTIVE**
- [ ] Spend is within budget
- [ ] Conversions from yesterday > 0
- [ ] CPA trending down or stable
- [ ] No new policy warnings

---

## Success Targets

| Timeframe | Benchmark | Action |
|-----------|-----------|--------|
| **Day 1-3** | Any conversions | ✅ Keep campaign running |
| **Day 4-7** | 5+ conversions | ✅ Analyze performance |
| **Week 2** | 20+ conversions, ROAS > 1:1 | ✅ Increase budget 2x |
| **Week 3** | 50+ conversions, ROAS > 2:1 | ✅ Scale to $50/day |
| **Week 4** | 100+ conversions, ROAS > 3:1 | 🚀 Full scaling mode |

---

## Next: Attribution

Once Download conversions are flowing:

1. **Set up Adjust** for app install attribution
2. **Create audiences** from app installers
3. **Run retargeting campaigns** to app users
4. **Measure LTV** (lifetime value) to optimize CAC

See [ADJUST_META_CAMPAIGN_SETUP.md](ADJUST_META_CAMPAIGN_SETUP.md) for steps 2-4.

---

## Resources

- [Meta Ads Manager](https://ads.facebook.com)
- [Events Manager](https://business.facebook.com/events)
- [Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [Campaign Optimization Guide](https://www.facebook.com/business/help/166492816168469)
- [Conversion Tracking Best Practices](https://www.facebook.com/business/help/127840339635275)

---

**You're ready! Launch your first campaign now.** 🚀
