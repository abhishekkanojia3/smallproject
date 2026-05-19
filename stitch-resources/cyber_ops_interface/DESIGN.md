---
name: Cyber-Ops Interface
colors:
  surface: '#0e1417'
  surface-dim: '#0e1417'
  surface-bright: '#333a3d'
  surface-container-lowest: '#080f11'
  surface-container-low: '#161d1f'
  surface-container: '#1a2123'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e6'
  on-surface-variant: '#bbc9ce'
  inverse-surface: '#dde4e6'
  inverse-on-surface: '#2b3234'
  outline: '#859398'
  outline-variant: '#3c494d'
  surface-tint: '#14d8ff'
  primary: '#aeecff'
  on-primary: '#003641'
  primary-container: '#00d8ff'
  on-primary-container: '#005a6c'
  inverse-primary: '#00687b'
  secondary: '#ebb2ff'
  on-secondary: '#520071'
  secondary-container: '#ce5dff'
  on-secondary-container: '#480064'
  tertiary: '#ffdda7'
  on-tertiary: '#422d00'
  tertiary-container: '#feba29'
  on-tertiary-container: '#6d4c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#afecff'
  primary-fixed-dim: '#14d8ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5d'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#ffbb2a'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#0e1417'
  on-background: '#dde4e6'
  surface-variant: '#2f3638'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid_gap: 16px
  container_padding: 24px
  card_padding: 20px
  bento_ratio: '1.618'
---

## Brand & Style

The design system is engineered for high-stakes environments, evoking the atmosphere of a futuristic Cyber-Operations Center. The aesthetic is defined by "Tactical Glassmorphism"—a blend of deep-space backgrounds, translucent surfaces, and vibrant neon accents that represent data flow and system vitality.

The visual narrative focuses on precision and urgency. It utilizes a high-contrast dark mode to reduce eye strain during long-duration monitoring while ensuring that critical alerts (system breaches or status changes) are immediately visible through intense, glowing color cues. The overall feel is sophisticated, technical, and authoritative, moving away from friendly consumer interfaces toward a specialized, expert-driven toolset.

## Colors

The palette is anchored in a multi-layered dark scheme. The base background uses a deep midnight blue, while interactive surfaces utilize a slightly lighter slate to create depth. 

*   **Primary (Electric Blue):** Used for active states, primary actions, and data-links.
*   **Secondary (Cyber Purple):** Reserved for secondary metrics, specialized toolsets, and encryption-related UI.
*   **Status Colors:** Matrix Green is used exclusively for "All Systems Go" and successful operations. Warning Neon Red is reserved for critical failures and security breaches.
*   **Glow States:** All accent colors utilize a 40% opacity outer glow (drop-shadow) to simulate the illumination of physical LED displays in a darkened room.

## Typography

This design system employs a dual-font strategy to balance legibility with a technical aesthetic. 

**Inter** serves as the primary typeface for all headings and body copy, providing a neutral, highly readable foundation that feels modern and professional. 

**JetBrains Mono** is used for all technical data, labels, and "readout" elements. This monospaced font reinforces the "Cyber-Ops" theme and ensures that columns of numbers and code are perfectly aligned for quick scanning. On mobile devices, display headings scale down to 32px to ensure full-width compatibility without sacrificing the bold, authoritative weight.

## Layout & Spacing

The layout is governed by a **Bento Grid** philosophy, organizing complex data into distinct, modular containers.

- **Desktop:** A 12-column grid with a fixed 16px gutter. Content is organized into "Dashboard Tiles" that span 3, 6, or 12 columns.
- **Tablet:** A 6-column grid with fluid gutters.
- **Mobile:** A single-column vertical stack. 

The vertical rhythm is tight, emphasizing information density over whitespace. All containers should use consistent internal padding to maintain the "instrument panel" look. Margins are kept wide at the screen edges (24px+) to allow the central data grid to feel like a floating projection.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and light-emissive layering rather than traditional shadows.

1.  **Base Layer:** The deepest slate (#060913).
2.  **Surface Layer:** Semi-transparent slate (#0B0F19) with a 12px backdrop-blur. 
3.  **Active Layer:** These surfaces feature a 1px solid border in Electric Blue or Cyber Purple with a subtle 4px outer glow.
4.  **Information Overlays:** Modals and tooltips use a higher transparency (60%) with a significant blur (20px) to separate them from the background dashboard data.

Avoid using black shadows; instead, use "tinted shadows" (darker versions of the background color) to maintain the luminosity of the interface.

## Shapes

The shape language is "Soft-Technical." Elements use a 4px (Soft) radius to maintain a precise, engineered feel without the harshness of 0px corners. 

Buttons and input fields follow this 4px standard, while larger Bento containers can scale up to 8px (rounded-lg) to create clear visual containment. Avoid pills or circles unless used for specific status indicators (like a blinking "Live" dot). The geometric rigidity supports the grid-based dashboard nature of the design system.

## Components

**Buttons:** 
Primary buttons feature a solid Electric Blue fill with black text for maximum contrast. Secondary buttons are "Ghost" style, with a 1px glowing purple border and monospaced caps text.

**Bento Cards:** 
Every card must have a 1px border (#ffffff at 10% opacity) and a title bar using the `label-caps` typography style. The background must use the defined backdrop-blur.

**Inputs:** 
Text inputs are dark wells with a 1px bottom-border that glows Primary Blue when focused. The cursor should be a solid block (simulating a terminal).

**Chips/Tags:** 
Small, rectangular tags with 0px roundedness and monospaced text. Use status colors (Green/Red) for background tints with 20% opacity.

**Data Visualizations:** 
Charts should avoid solid fills. Use glowing lines, "scanning" gradient fills, and dotted grid lines to maintain the HUD (Heads-Up Display) aesthetic.