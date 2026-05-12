# @dm/web — Marketing Site

Public-facing static marketing for Discern·Match. Built with Next.js 14 App Router. **No authentication, no API calls, no user state.** This site exists only to explain the product and drive downloads.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, value pillars, process teaser, circles teaser, CTA |
| `/how-it-works` | 6-step process narrative |
| `/features` | Full feature inventory |
| `/beliefs` | Six core convictions |
| `/testimonials` | Member stories (placeholder content) |
| `/faq` | Common questions with editorial answers |
| `/download` | App store CTA |

## Local development

```bash
pnpm install
pnpm dev:web   # http://localhost:3000
```

## Deployment

Designed to deploy to Vercel as a static + ISR build. No backend dependencies. App store buttons currently link to `#` placeholders — replace once iOS/Android builds are live.
