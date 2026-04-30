# Design Brief

## Direction

Premium Editorial + Data Clarity — a trustworthy college discovery interface that prioritizes information clarity and credibility without sacrificing modern aesthetics.

## Tone

Refined minimalism with warm credibility. Serious yet approachable — academic context demands trust, not playfulness.

## Differentiation

Clear data hierarchy through purposeful color use, careful radius/spacing, and accessible typography scale distinguishes this from generic education sites.

## Color Palette

| Token      | OKLCH            | Role                                |
| ---------- | ---------------- | ----------------------------------- |
| background | 0.98 0.008 230   | Light, cool off-white               |
| foreground | 0.18 0.015 230   | Text on light backgrounds           |
| card       | 1.0 0.004 230    | Card surfaces, elevated layers      |
| primary    | 0.42 0.14 240    | Deep ocean blue — credibility       |
| accent     | 0.7 0.18 70      | Warm amber — CTAs, highlights       |
| muted      | 0.94 0.01 230    | Secondary backgrounds               |

## Typography

- Display: Space Grotesk — modern, distinctive, heading-focused
- Body: Figtree — clean, contemporary, high readability
- Scale: Hero `text-5xl md:text-6xl font-bold tracking-tight`, H2 `text-3xl md:text-4xl font-bold tracking-tight`, Label `text-xs font-semibold tracking-widest uppercase`, Body `text-base md:text-lg`

## Elevation & Depth

Subtle layering via `shadow-card` (light) and `shadow-elevated` (data-dense sections). No dramatic shadows — trust clarity over drama.

## Structural Zones

| Zone       | Background         | Border                  | Notes                               |
| ---------- | ------------------ | ----------------------- | ----------------------------------- |
| Header     | card / border-b    | border (0.9 0.008 230)  | Search bar, navigation              |
| Content    | background         | —                       | Alternating muted for sections      |
| Cards      | card + shadow-card | —                       | College listings, detail tabs       |
| Comparison | muted/30 + border  | border subtle           | Comparison table with highlight row |
| Footer     | muted/40 + border-t | border                  | Secondary links, metadata           |

## Spacing & Rhythm

Spacious rhythm via `gap-6` between sections, `gap-4` within cards, `p-4` internal padding. Mobile-first `sm:` scales up to `md:gap-8`.

## Component Patterns

- Buttons: Primary (bg-primary, text-primary-foreground, rounded-md), Secondary (bg-muted, text-foreground), Outline (border + text-primary)
- Cards: rounded-md, bg-card, shadow-card, hover:shadow-elevated transition-smooth
- Badges: rounded-full, bg-muted/60, text-foreground or accent variants
- Input: bg-input, border-border, rounded-sm, focus:ring-primary

## Motion

- Entrance: fade + slide-up 0.3s ease-out on page load
- Hover: transition-smooth on cards, buttons; shadow-card → shadow-elevated
- Decorative: None — clarity over movement

## Constraints

- No full-page gradients; use surface layering only
- Maintain 0.7+ lightness contrast (text on bg)
- No emoji, playful icons, or casual language
- Radius: sharp (0), subtle (4px), standard (8px), rounded (12px)

## Signature Detail

Ocean blue primary with warm amber accent creates credibility + approachability without generic blue-grey-white. Educational color psychology with warmth.
