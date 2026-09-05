---
name: Technical Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-hero:
    fontFamily: plusJakartaSans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: plusJakartaSans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: plusJakartaSans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: plusJakartaSans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: plusJakartaSans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: plusJakartaSans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-code:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-tag:
    fontFamily: plusJakartaSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  container-max: 72rem
---

## Brand & Style

This design system establishes an architectural, technical portfolio interface crafted for a Senior Full Stack Engineer. The visual atmosphere balances developer rigor with refined digital craft. It evokes authority, calm execution, and contemporary architectural structure rather than flashy, ephemeral trends.

The design movement combines **Technical Minimalism** with **Subtle Frosted Depth**. Interfaces rely on vast, dark negative space, micro-borders with pinpoint contrast, restrained luminous cyan/blue signals, and razor-sharp typographic scale.

Key brand attributes:
- **Engineered & Precise:** Structural geometry, clean grid boundaries, systematic alignment.
- **Sober & Immersive:** Midnight tones create focus, drawing attention to code artifacts, project architectures, and impact metrics.
- **High Signal-to-Noise:** Decorative clutter is eliminated; interactive elements and state shifts respond with immediate, deliberate clarity.

## Colors

The palette leverages a layered midnight-to-slate progression, ensuring deep contrast and visual hierarchy without jarring starkness. Accent colors mimic terminal status indicators and neon-doped silicon traces.

### Surface Tiers
- **Canvas Base (`#0a0f1d`):** Primary viewport backdrop; absolute foundation.
- **Surface Level 1 (`#0f172a`):** Standard container surfaces, code blocks, panel backgrounds.
- **Surface Level 2 (`#1e293b`):** Interactive cards, hover states, elevated popovers, and default border lines.
- **Surface Highlight (`#334155`):** Active borders, dividers, subtle separators, and hovered strokes.

### Accents & State
- **Primary Accent (`#38bdf8` - Cyan 400):** Visual focal points, active state highlights, terminal indicators, and high-priority metrics.
- **Secondary Accent (`#3b82f6` - Blue 500):** Interactive links, secondary controls, badges, and focus rings.
- **Text Primary (`#f8fafc`):** 98% contrast white for headings, critical code, and primary interface labels.
- **Text Secondary (`#94a3b8`):** Muted slate for body copy, documentation prose, and technical metadata.
- **Text Tertiary (`#64748b`):** Dimmed labels, line numbers, and timestamps.

## Typography

Typography delivers a crisp pairing: **Plus Jakarta Sans** provides a clean, geometric, contemporary voice for narrative hierarchy, while **JetBrains Mono** roots the system in software engineering craftsmanship.

- **Headings:** Bold to extra-bold with slight negative tracking to preserve structural tightness at large scale.
- **Prose & Body Copy:** Ample line height (1.6x) and balanced character tracking ensure effortless scanning on dark backgrounds without eye strain.
- **Technical Readouts:** Code blocks, architectural labels, status pills, and system statistics strictly use the monospaced label tier.

## Layout & Spacing

The layout is built on a 12-column adaptive grid structured within a centered maximum container width of `1152px` (`72rem`), prioritizing centered readability and disciplined scanning over sprawling horizontal diffusion.

- **Desktop (1024px+):** 12 columns, 32px (`2rem`) gutters, 48px outer page padding. Hero and showcase segments anchor to 8 or 12 columns; technical case studies utilize a 7:5 split (context vs. architecture stack).
- **Tablet (768px - 1023px):** 8 columns, 24px (`1.5rem`) gutters, 32px outer padding. Two-column card rows reflow into balanced 4-column blocks.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 16px margins. Complex side-by-side matrices collapse linearly into single vertical tracks with consistent vertical gaps.

## Elevation & Depth

Visual depth is achieved through **Tonal Layering** supplemented by **Fine Low-Contrast Outlines** and subtle atmospheric backdrops. Heavy dropshadows are rejected in favor of luminous containment.

- **Layer 0 (Canvas):** Solid `#0a0f1d`. Ground level for main content scrollers.
- **Layer 1 (Card & Module):** `#0f172a` with a 1px solid `#1e293b` border. Hover transitions increase border luminance to `#334155`.
- **Layer 2 (Floating Modals & Toolbars):** `#0f172a` at 85% alpha with a `16px` backdrop blur (`backdrop-filter: blur(16px)`), framed by a 1px `#38bdf8`/20 outline.
- **Luminous Accent Glow:** Interactive focus and active projects project a soft, atmospheric aura rather than a shadow: `0 0 24px -4px rgba(56, 189, 248, 0.15)`.

## Shapes

The geometric framework favors modern industrial precision: controlled, soft radii that maintain architectural tension rather than bubble-like softness.

- **Radius Scale:**
  - Standard elements (buttons, input fields, badges): `4px` (`0.25rem`).
  - Structural containers (cards, code snippets, modals): `8px` (`0.5rem`).
  - Outer viewport framing / dialog wrappers: `12px` (`0.75rem`).
  - Interactive status dots & avatars: Fully circular (`9999px`).
- **Dividers & Strokes:** Universal 1px hairline rule (`#1e293b`), creating clean, crisp data compartments.

## Components

### Buttons & Interactive Triggers
- **Primary Action:** Solid `#38bdf8` background, `#0a0f1d` high-contrast bold text. Hover shifts to `#3b82f6` with a `0 0 16px rgba(56, 189, 248, 0.35)` subtle aura. Active press scales slightly to `0.98`.
- **Secondary / Ghost Action:** `#0f172a` fill, 1px `#1e293b` border, `#f8fafc` text. Hover shifts background to `#1e293b` and border to `#334155`.
- **Icon / Terminal Link:** Transparent base, `#94a3b8` icon fill. On hover, transitions to `#38bdf8` with no layout shift.

### Project & Experience Cards
- Encapsulated in `#0f172a` with a 1px `#1e293b` perimeter.
- Padded with `1.5rem` (`24px`).
- Header includes project taxonomy and role tags styled in JetBrains Mono.
- Interactive cards elevate their border to `#38bdf8` at 40% opacity on hover, paired with an subtle upward transform of `-2px`.

### Badges & Technology Chips
- Pill-shaped or soft 4px containers with `#1e293b`/50 background and `#334155`/50 stroke.
- Text uses `label-code` (JetBrains Mono, 12px) in `#94a3b8`.
- Live or production deployment tags feature a pulsing `#38bdf8` indicator dot at the leading edge.

### Code & Terminal Blocks
- Deep background (`#0a0f1d`), nested inside cards or standalone panels.
- Top bar with subtle directory route or filename (`src/modules/engine.ts`) in `#64748b`.
- Line numbers rendered in `#334155`, code body syntax-highlighted in primary cyan, sky blue, and clean white.

### Contact & Input Fields
- Input surface: `#0f172a` with a 1px border of `#1e293b`.
- Placeholder text in `#64748b`; typed text in `#f8fafc`.
- Focus state: Border transitions to `#38bdf8` with a razor-thin `0 0 0 1px #38bdf8` outline; no blurry default browser halos.
