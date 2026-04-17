# Design Brief

**Aesthetic**: Luxury editorial beauty brand. Deep dark refinement with gold/rose-gold accents and floating particle atmosphere. Premium bridal makeup artist portfolio.

## Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| background | 0.08 0 0 | Deep charcoal hero/base (#0A0A0F) |
| card | 0.11 0 0 | Card surfaces, slightly lifted |
| foreground | 0.97 0 0 | Near-white body text |
| primary | 0.75 0.15 100 | Gold accent — CTAs, highlights (#D4AF37) |
| secondary | 0.59 0.12 25 | Rose-gold — borders, subtle accents (#B76E79) |
| muted | 0.18 0 0 | Dark grey sections, secondary content |
| muted-foreground | 0.45 0 0 | Mid-tone text on dark backgrounds |
| destructive | 0.65 0.2 25 | Alert/error state |

## Fonts

| Layer | Font | Usage |
|-------|------|-------|
| display | Fraunces 400 | Hero titles, section headings (editorial serif) |
| body | Lora 400 | Body copy, long-form content (elegant serif) |
| mono | GeistMono 400 | Technical text, contact info |

## Structural Zones

| Zone | Background | Border | Notes |
|------|------------|--------|-------|
| Hero | `bg-background` + floating particles | none | Featured image overlay, 3D animated elements |
| Header | `bg-background/80` glassmorphic | `border-accent-rose/20` | Sticky, minimal, floating contact buttons |
| Section | Alternating `bg-background` / `bg-card` | Subtle rose-gold accent top | Clean editorial flow |
| Cards | `glass` utility (blur + rgba) | `border-accent-rose/30` | Glow-elevated shadow on hover |
| Footer | `bg-muted/30` with rose-gold line-top | `border-accent-rose/50` | Centered contact/legal |

## Spacing & Rhythm

- Margins: 2rem sections, 1rem card padding minimum
- Type scale: Display 3xl/4xl, Heading xl/2xl, Body base/lg, Caption sm/xs
- Density: Luxurious whitespace — avoid cramped layouts

## Component Patterns

- **CTAs**: Gold gradient background, `glow-elevated` shadow, uppercase small text, hover state lifts
- **Cards**: Glassmorphic with blur, rose-gold subtle border, `glow-subtle` default / `glow-elevated` hover
- **Floating buttons**: Positioned fixed left (WhatsApp) / right (Instagram), `glow-particle` shadow, float animation
- **Interactive text**: `text-accent-warm` for highlights, `text-accent-rose` for secondary calls

## Motion

- **Float**: 3s ease-in-out loop for particles and subtle UI elements
- **Glow-pulse**: 2s infinite pulse for interactive elements (CTAs, cards)
- **Fade-in**: 0.6s ease-out for page load and section reveals
- **Transition**: All 0.3s cubic-bezier(0.4, 0, 0.2, 1) for interactive state changes

## Signature Detail

Floating particle system in hero with Three.js/React-Three-Fiber — glowing orbs drifting through space with animated camera movement. Rose-gold accent threading through borders, text, and glow effects creates cohesive luxury feel. Blurry backdrop-filter cards contrast sharp text and gold accents.

## Constraints

- No hard black (#000000) — use `oklch(0.08 0 0)` for deepest dark
- No generic shadows — always use glow or elevation variants
- All interactive elements must have visible hover state
- Images display at full quality, never stretched
- Glassmorphism cards only where they enhance content hierarchy
