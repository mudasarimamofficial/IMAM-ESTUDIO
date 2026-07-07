---
name: Monolith Precision
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display:
    fontFamily: Geist Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-md:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered to evoke an atmosphere of absolute technical authority and elite performance. It serves a dual-purpose audience: high-tier digital agencies and top-percentile freelancers who demand precision and reliability.

The aesthetic is a fusion of **Minimalism** and **High-Performance Technicality**, drawing heavily from the "Dark Mode Engineering" movement seen in developer-centric tools. The interface relies on structural integrity rather than decorative elements. Visual interest is generated through perfect alignment, intentional negative space, and the subtle interplay of light on dark surfaces. The emotional response is one of calm, focused productivity—a "digital cockpit" for high-stakes work.

## Colors
The palette is strictly monochromatic to eliminate visual noise and center focus on content and technical data. 

- **Primary Canvas**: Pure Black (`#000000`) is the base, providing infinite depth.
- **Surfaces**: Tiers are built using `#0A0A0A` and `#111111` to create logical separation without high-contrast jarring.
- **Accents**: White (`#FFFFFF`) is reserved for primary actions and critical text to ensure maximum readability.
- **Semantic Logic**: Color is used exclusively for state communication. Success green, warning amber, and destructive red are highly saturated to stand out against the dark backdrop, used only when user intervention or confirmation is required.

## Typography
Typography is the core of this design system's identity. We utilize a modular scale that emphasizes "Geist Sans" for its clean, geometric humanist qualities and "Geist Mono" for metadata, code, and technical status labels.

- **Optical Alignment**: Headlines should utilize tight letter-spacing to maintain a "locked" appearance.
- **Technical Detail**: Use the Mono font sparingly—specifically for prices, timestamps, IDs, and status badges—to reinforce the clinical, data-driven nature of the platform.
- **Hierarchy**: Contrast is achieved through weight and size rather than color. Use white for headlines and high-gray (`#EDEDED`) for body copy to reduce eye strain.

## Layout & Spacing
The layout follows a strict **Fixed Grid** model for desktop and a **Fluid** model for mobile.

- **Desktop**: A 12-column grid with a 1280px max-width container. All elements must snap to a 4px baseline grid to ensure mathematical precision.
- **Mobile**: A 4-column grid with 16px margins. 
- **Rhythm**: Use an 8-point system for spacing between components (8, 16, 24, 32, 48, 64, 96). 
- **Whitespace**: Generous vertical padding (minimum 80px between sections) is required to maintain the premium, minimalist aesthetic and prevent "cluttering" of professional data.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Semi-transparent Borders** rather than traditional drop shadows.

- **Layering**: The background is `#000000`. Content cards or modals sit on a `#0A0A0A` surface. Active elements sit on `#111111`.
- **Borders**: Instead of heavy shadows, use 1px solid borders at `#222222` or `#FFFFFF15` (glassmorphism accents). This creates a "precision-cut" appearance.
- **Glassmorphism**: Modals and dropdowns should utilize a `backdrop-filter: blur(12px)` with a very subtle white border to suggest glass-like transparency over the black canvas.
- **Shadows**: When depth is essential, use "Ambient Shadows"—extremely soft, 10-15% opacity black shadows that feel like natural occlusion rather than artificial light.

## Shapes
The shape language is "Soft" yet disciplined. While the overall aesthetic is sharp and technical, subtle rounding prevents the UI from feeling aggressive or dated.

- **Base Radius**: 4px (`0.25rem`) for inputs, small buttons, and tags.
- **Large Radius**: 8px (`0.5rem`) for cards, containers, and primary action zones.
- **Strictness**: Avoid circular/pill shapes except for specific notification pips. The rectangular motif reinforces the "engineered" narrative.

## Components
Consistent component styling ensures the interface feels like a singular, cohesive tool.

- **Buttons**:
    - *Primary*: Pure White background, Black text. High-contrast, no shadow. Min-height: 44px.
    - *Secondary*: Transparent background, 1px `#222222` border. White text.
- **Input Fields**: Flat black background, 1px `#222222` border. On focus, the border transitions to White. Labels use Geist Mono (label-sm).
- **Cards**: Surface color `#0A0A0A`, 1px border `#222222`. No shadow.
- **Chips/Badges**: Use Geist Mono. Background `#111111`, border `#222222`.
- **Skeleton Loaders**: Use a subtle pulse animation transitioning between `#0A0A0A` and `#161616`.
- **Checkboxes/Radios**: Square with 2px radius. When active, fill is White with a black check/dot. 
- **Lists**: Rows separated by 1px `#111111` lines. Hover state changes background to `#0A0A0A`.