# Design Guidelines: Gohan Digital - Álbuns Personalizados

## Design Approach
**Selected Approach**: Reference-Based (E-commerce/Marketing)
- Drawing inspiration from premium product showcases like Airbnb (emotional storytelling) and Shopify (product presentation)
- Focus on luxury, emotion, and conversion optimization
- Visual-rich experience highlighting product value and personalization

## Core Design Elements

### A. Color Palette

**Primary Colors** (Luxury & Emotion):
- Gold/Dourado: 45 75% 55% - Primary brand color, premium accents
- Rose/Rosa: 340 82% 75% - Romantic, warm touches
- White: 0 0% 100% - Clean backgrounds, contrast

**Supporting Colors**:
- Dark Background: 240 10% 10% - Section contrast, text backgrounds
- Soft Gray: 240 5% 96% - Subtle section backgrounds
- Success Green: 142 70% 45% - CTAs, promotional highlights

**Dark Mode**: Not required for this marketing site

### B. Typography

**Font Families** (via Google Fonts):
- **Headlines**: 'Playfair Display' or 'Cormorant Garamond' (elegant serif) - weights: 400, 600, 700
- **Body Text**: 'Inter' or 'DM Sans' (modern sans-serif) - weights: 400, 500, 600
- **Accents**: 'Dancing Script' or 'Parisienne' (script font for romantic touches)

**Scale**:
- Hero Headline: text-5xl md:text-7xl (bold, dramatic)
- Section Headers: text-3xl md:text-5xl
- Product Titles: text-2xl md:text-3xl
- Body Text: text-base md:text-lg
- CTA Buttons: text-lg font-semibold

### C. Layout System

**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card spacing: gap-8 md:gap-12
- Element margins: mb-8, mt-12, mx-4

**Container Widths**:
- Full sections: max-w-7xl mx-auto px-4
- Content sections: max-w-6xl
- Text content: max-w-3xl

### D. Component Library

**Hero Section**:
- Full-screen height (min-h-screen) with gradient overlay
- Large hero image showcasing romantic/pet memories aesthetic
- Centered content with dramatic headline animation
- Dual CTA buttons: "Ver Produtos" + "Aproveite a Promoção"
- Subtle scroll indicator with bounce animation

**Product Cards**:
- 2-column grid on desktop (lg:grid-cols-2)
- Elevated cards with hover lift effect (transform scale 1.02)
- Product screenshot/mockup image at top
- Gradient border accent (gold to rose)
- "Ver Álbum" link button + "Comprar Agora" CTA
- Price display with elegant typography

**Promotional Banner**:
- Full-width attention section with animated background
- Highlighted combo price (R$ 199,90) with strikethrough original
- Countdown timer or "Oferta Limitada" badge
- Pulsing CTA button effect

**Custom Albums Section**:
- 3-column feature grid showing customization options
- Icons representing: Theme selection, Color customization, Feature add-ons
- Each option card links to WhatsApp with pre-filled message
- Visual examples of customization possibilities

**How It Works**:
- 4-step process with numbered circles
- Icon + Title + Description per step
- Connecting line between steps (dashed gold)
- Alternating left-right layout for visual interest

**Testimonials**:
- 3-column grid with customer cards
- Circular avatar (fictional photos)
- 5-star rating visual
- Quote in italic script font
- Customer name and relationship context

**Floating WhatsApp Button**:
- Fixed bottom-right (bottom-6 right-6)
- Green circular button (w-16 h-16)
- WhatsApp icon centered
- Text "Faça uma Cotação" on hover expansion
- Subtle pulse animation drawing attention

**Footer**:
- Dark background (gold text on dark)
- 3-column layout: About, Quick Links, Contact
- Social media icons with hover glow
- WhatsApp link prominent
- Copyright with romantic icon accent

### E. Animations & Interactions

**Scroll Animations** (AOS Library):
- Hero: fade-up with 600ms delay
- Products: fade-in-up staggered (200ms each)
- Testimonials: zoom-in effect
- CTA sections: slide-in-right

**Hover Effects**:
- Product cards: Lift (translateY -8px) + shadow increase
- Buttons: Scale 1.05 + brightness increase
- Images: Subtle zoom (scale 1.1) on container hover

**Micro-interactions**:
- Button ripple effect on click
- Smooth scroll to sections
- Header shrink on scroll (py-6 to py-4)
- Progress bar at top showing scroll position

## Images

**Required Images**:
1. **Hero Background**: Romantic couple or adorable pet moment - soft focus, warm lighting, dreamy atmosphere (full-width, min-h-screen)
2. **Product Screenshots**: 
   - Gohan Golden album interface preview (800x600px)
   - Gohan para Casais album interface preview (800x600px)
3. **Customization Examples**: 3 visual examples showing different themes/styles (400x300px each)
4. **Testimonial Avatars**: 3 circular photos representing happy customers (150x150px)
5. **How It Works Icons**: 4 illustrative icons for each step (can use icon library)

**Image Treatment**:
- Soft vignette overlays on hero
- Rounded corners (rounded-2xl) on product screenshots
- Gold gradient borders on featured images
- Lazy loading for performance

## Responsive Strategy

**Breakpoints**:
- Mobile: Single column, stacked layouts
- Tablet (md:): 2-column grids, larger typography
- Desktop (lg:): Full multi-column layouts, expanded spacing

**Mobile Optimizations**:
- Sticky header with menu toggle
- Touch-friendly button sizes (min 44px)
- Simplified hero with shorter headline
- Vertical testimonial scroll

## Conversion Optimization

- Multiple WhatsApp CTAs throughout (minimum 4 placements)
- Promotional urgency elements (limited offer badges)
- Social proof placement near CTAs
- Trust signals (customer count, satisfaction rate)
- Clear value propositions per section

This design creates an emotional, luxurious experience that converts visitors into customers while maintaining the romantic/joyful essence of preserving memories.