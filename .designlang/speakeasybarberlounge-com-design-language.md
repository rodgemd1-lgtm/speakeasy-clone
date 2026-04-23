# Design Language: Men's Barber Shop in Denver | Speakeasy Barber Lounge

> Extracted from `https://speakeasybarberlounge.com` on April 23, 2026
> 730 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#61ce70` | rgb(97, 206, 112) | hsl(128, 53%, 59%) | 1 |
| Secondary | `#ffcc00` | rgb(255, 204, 0) | hsl(48, 100%, 50%) | 16 |
| Accent | `#6ec1e4` | rgb(110, 193, 228) | hsl(198, 69%, 66%) | 38 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#333333` | hsl(0, 0%, 20%) | 822 |
| `#000000` | hsl(0, 0%, 0%) | 314 |
| `#7a7a7a` | hsl(0, 0%, 48%) | 88 |
| `#ffffff` | hsl(0, 0%, 100%) | 46 |
| `#494c4f` | hsl(210, 4%, 30%) | 16 |
| `#efefef` | hsl(0, 0%, 94%) | 1 |

### Background Colors

Used on large-area elements: `#000000`

### Text Colors

Text color palette: `#000000`, `#333333`, `#cc3366`, `#494c4f`, `#ffffff`, `#7a7a7a`, `#ffcc00`, `#6ec1e4`

### Gradients

```css
background-image: linear-gradient(12deg, rgb(255, 204, 0) 0%, rgba(242, 41, 91, 0) 40%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#333333` | text, border | 822 |
| `#000000` | text, border, background | 314 |
| `#cc3366` | text, border | 124 |
| `#7a7a7a` | text, border | 88 |
| `#ffffff` | text, border | 46 |
| `#6ec1e4` | border, text | 38 |
| `#494c4f` | text, border | 16 |
| `#ffcc00` | text, border | 16 |
| `#efefef` | background | 1 |
| `#61ce70` | background | 1 |

## Typography

### Font Families

- **-apple-system** — used for all (455 elements)
- **Times** — used for body (154 elements)
- **Roboto** — used for all (72 elements)
- **Font Awesome 5 Free** — used for body (21 elements)
- **GFS Didot** — used for all (13 elements)
- **Montserrat** — used for body (6 elements)
- **granville** — used for body (6 elements)
- **monospace** — used for body (2 elements)
- **Arial** — used for all (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 55px | 3.4375rem | 900 | 55px | normal | h1 |
| 38px | 2.375rem | 900 | 38px | normal | h2 |
| 37px | 2.3125rem | 900 | 37px | normal | h2 |
| 32px | 2rem | 600 | 32px | normal | h2, a |
| 22px | 1.375rem | 400 | 22px | normal | div, span, i |
| 20px | 1.25rem | 500 | 20px | normal | a, span |
| 18.72px | 1.17rem | 500 | 22.464px | normal | h3, span, i, a |
| 16px | 1rem | 400 | 18.4px | normal | html, head, meta, link |
| 15px | 0.9375rem | 500 | 15px | normal | a, span |
| 14px | 0.875rem | 600 | 14px | normal | a |
| 13.3333px | 0.8333rem | 400 | normal | normal | button |
| 0px | 0rem | 400 | 0px | normal | nav, ul |

### Heading Scale

```css
h1 { font-size: 55px; font-weight: 900; line-height: 55px; }
h2 { font-size: 38px; font-weight: 900; line-height: 38px; }
h2 { font-size: 37px; font-weight: 900; line-height: 37px; }
h2 { font-size: 32px; font-weight: 600; line-height: 32px; }
h3 { font-size: 18.72px; font-weight: 500; line-height: 22.464px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Font Weights in Use

`400` (605x), `600` (50x), `500` (49x), `900` (23x), `700` (3x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-100 | 100px | 6.25rem |
| spacing-230 | 230px | 14.375rem |
| spacing-300 | 300px | 18.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 6 |

## CSS Custom Properties

### Colors

```css
--wp--preset--color--black: #000000;
--wp--preset--color--cyan-bluish-gray: #abb8c3;
--wp--preset--color--white: #ffffff;
--wp--preset--color--pale-pink: #f78da7;
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--color--luminous-vivid-orange: #ff6900;
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--color--vivid-purple: #9b51e0;
--wp-admin-theme-color: #3858e9;
--wp-admin-theme-color--rgb: 56,88,233;
--wp-admin-theme-color-darker-10: #2145e6;
--wp-admin-theme-color-darker-10--rgb: 33.0384615385,68.7307692308,230.4615384615;
--wp-admin-theme-color-darker-20: #183ad6;
--wp-admin-theme-color-darker-20--rgb: 23.6923076923,58.1538461538,214.3076923077;
--wp-admin-border-width-focus: 2px;
--swiper-theme-color: #007aff;
```

### Spacing

```css
--wp--preset--font-size--small: 13px;
--wp--preset--font-size--medium: 20px;
--wp--preset--font-size--large: 36px;
--wp--preset--font-size--x-large: 42px;
--wp--preset--spacing--20: 0.44rem;
--wp--preset--spacing--30: 0.67rem;
--wp--preset--spacing--40: 1rem;
--wp--preset--spacing--50: 1.5rem;
--wp--preset--spacing--60: 2.25rem;
--wp--preset--spacing--70: 3.38rem;
--wp--preset--spacing--80: 5.06rem;
--wp--style--global--content-size: 800px;
--wp--style--global--wide-size: 1200px;
--wp--style--block-gap: 24px;
--swiper-navigation-size: 44px;
--bdt-position-margin-offset: .0001px;
```

### Shadows

```css
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
```

### Other

```css
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
--direction-multiplier: 1;
--page-title-display: none;
--bdt-leader-fill-content: .;
--bdt-inverse: ;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 2xl | 1600px | min-width |
| 2400px | 2400px | min-width |
| 99999px | 99999px | max-width |

## Transitions & Animations

**Durations:** `0.3s`, `0.4s`

### Common Transitions

```css
transition: all;
transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
transition: 0.3s;
```

### Keyframe Animations

**components-animate__appear-animation**
```css
@keyframes components-animate__appear-animation {
  0% { transform: translateY(-2em) scaleY(0) scaleX(0); }
  100% { transform: translateY(0px) scaleY(1) scaleX(1); }
}
```

**components-animate__slide-in-animation**
```css
@keyframes components-animate__slide-in-animation {
  100% { transform: translateX(0px); }
}
```

**components-animate__loading**
```css
@keyframes components-animate__loading {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
```

**components-button__busy-animation**
```css
@keyframes components-button__busy-animation {
  0% { background-position: 200px 0px; }
}
```

**slide-in-left**
```css
@keyframes slide-in-left {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0px); }
}
```

**slide-in-right**
```css
@keyframes slide-in-right {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0px); }
}
```

**slide-out-left**
```css
@keyframes slide-out-left {
  0% { transform: translateX(0px); }
  100% { transform: translateX(-100%); }
}
```

**slide-out-right**
```css
@keyframes slide-out-right {
  0% { transform: translateX(0px); }
  100% { transform: translateX(100%); }
}
```

**fade-in**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**fade-out**
```css
@keyframes fade-out {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (17 instances)

```css
.button {
  background-color: rgb(239, 239, 239);
  color: rgb(51, 51, 51);
  font-size: 18.72px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Links (47 instances)

```css
.link {
  color: rgb(204, 51, 102);
  font-size: 16px;
  font-weight: 600;
}
```

### Navigation (19 instances)

```css
.navigatio {
  background-color: rgb(0, 0, 0);
  color: rgb(51, 51, 51);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (3 instances)

```css
.foote {
  background-color: rgb(0, 0, 0);
  color: rgb(51, 51, 51);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (10 instances)

```css
.modal {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 100%;
}
```

### Dropdowns (54 instances)

```css
.dropdown {
  border-radius: 0px;
  border-color: rgb(51, 51, 51);
  padding-top: 0px;
}
```

### Badges (1 instances)

```css
.badge {
  color: rgb(204, 51, 102);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (16 instances)

```css
.tab {
  color: rgb(51, 51, 51);
  font-size: 18.72px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(51, 51, 51);
  border-radius: 0px;
}
```

### Switches (53 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgb(51, 51, 51);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 204, 0);
  padding: 20px 40px 20px 40px;
  border-radius: 3px;
  border: 1px solid rgb(255, 204, 0);
  font-size: 20px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgb(97, 206, 112);
  color: rgb(255, 255, 255);
  padding: 12px 24px 12px 24px;
  border-radius: 3px;
  border: 0px none rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 204, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 204, 0);
  font-size: 20px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 204, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 204, 0);
  font-size: 20px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
```

## Layout System

**0 grid containers** and **43 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 10px |
| 1500px | 0px |
| 800px | 0px |
| min(100%, 1400px) | 0px |
| min(100%, 1140px) | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 14x |
| row/nowrap | 27x |
| row/wrap | 2x |

**Gap values:** `20px`, `5px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#000000` | `#efefef` | 18.26:1 | AAA |

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 9 font families — consider limiting to 2 (heading + body)
- 15 !important rules — prefer specificity over overrides
- 90% of CSS is unused — consider purging
- 3343 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 12deg | 2 | brand |

```css
background: linear-gradient(12deg, rgb(255, 204, 0) 0%, rgba(242, 41, 91, 0) 40%);
```

## Z-Index Map

**4 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1050,999999 | div.p.r.e.m.i.u.m.-.m.o.d.a.l.-.b.o.x.-.m.o.d.a.l, div.h.f.e.-.f.l.y.o.u.t.-.o.v.e.r.l.a.y. .e.l.e.m.e.n.t.o.r.-.c.l.i.c.k.a.b.l.e, div.h.f.e.-.s.i.d.e. .h.f.e.-.f.l.y.o.u.t.-.l.e.f.t. .h.f.e.-.f.l.y.o.u.t.-.o.p.e.n |
| sticky | 99,99 | header |

**Issues:**
- [object Object]

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Amanda | self-hosted | 400 | normal |
| granville | self-hosted | 400 | normal |
| swiper-icons | self-hosted | 400 | normal |
| eicons | self-hosted | 400 | normal |
| Font Awesome 5 Brands | self-hosted | 400 | normal |
| Font Awesome 5 Free | self-hosted | 400, 900 | normal |
| Roboto | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |
| Roboto Slab | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | normal |
| GFS Didot | self-hosted | 400 | normal |
| Orienta | self-hosted | 400 | normal |
| Montserrat | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 14 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 5 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 2:1 (14x), 4:3 (2x), 1:1 (2x), 2:3 (1x), 1.17:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `md` | `300ms` | 300 |

## Component Anatomy

### button — 15 instances

**Slots:** label
**Variants:** link
**Sizes:** sm

| variant | count | sample label |
|---|---|---|
| default | 13 | BOOK NOW |
| link | 2 | Review Policy |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **book** (5)
- **review** (5)
- **explore** (5)

### Button Copy Patterns

- "book now" (5×)
- "review policy" (5×)
- "explore all services" (5×)

### Sample Headings

> A $10 gift to first time clients from the Speakeasy team

> Our Barbershop Services
> Business hours:
> Location:
> Contact:

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `-apple-system` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
