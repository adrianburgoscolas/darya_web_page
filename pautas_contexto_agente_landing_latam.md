# System Context & Design Guidelines: E-Commerce Landing Page Agent

> **Project Goal:** Design and implement a high-converting, modern, and reliable landing page for a retail e-commerce platform targeting Latin American consumers.
> **Core Value Proposition:** Connecting Latin American shoppers with affordable global/regional products, low prices, and flexible installment payment plans (*pago por cuotas*).

---

## 1. Brand Identity & Strategic positioning

### Core Mission & Tone
* **Mission:** Democratize access to quality retail products across Latin America by offering accessible pricing and frictionless installment financing.
* **Brand Tone:** 
  * **Trustworthy & Transparent:** Clear terms, no hidden fees, visible security guarantees.
  * **Modern & Professional:** High-end visual aesthetics combined with structured clarity.
  * **Empowering & Friendly:** Warm messaging tailored to local Latin American cultural nuances.

### Design Language & Visual Aesthetics
* **Theme Concept:** "Modern Elegance Meets Accessible Retail" (Vistoso, serio y comprometido).
* **Color Palette:**
  * **Primary (Trust & Tech):** Deep Navy / Midnight Blue (`#0F172A` or `#1E293B`)
  * **Secondary / Accent (Luxury & Quality):** Subtle Warm Gold / Amber Accent (`#D97706` / `#F59E0B`) or Vibrant Emerald (`#059669`)
  * **Background & Cards:** Crisp off-white (`#F8FAFC`), pure white (`#FFFFFF`), with glassmorphism or elevated shadow layers for depth.
  * **Feedback / CTA:** High-contrast, energetic accents for primary action buttons.
* **Typography:**
  * **Headings:** Bold, geometric sans-serif (e.g., *Plus Jakarta Sans*, *Inter*, or *Outfit*).
  * **Body:** Highly readable, clean sans-serif with comfortable line height.

---

## 2. Key Target Audience & Cultural Nuances (LATAM Focus)

1. **Payment Methods Accessibility:**
   * High importance on **Installment Plans (*Cuotas sin interés* or *Cuotas flexibles*)**.
   * Integration or visual highlight of local payment options (e.g., Credit/Debit Cards, Cash voucher systems like OXXO/PagoFácil, digital wallets, Pix/SPEI/TropiPay where relevant).
2. **Mobile-First Experience:**
   * Over 70% of LATAM e-commerce traffic originates from mobile devices. The landing page must be 100% optimized for mobile screens, fast loading, and touch interactions.
3. **Social Proof & Trust Indicators:**
   * LatAm shoppers value security heavily due to online scam concerns. Include prominent customer reviews, secure checkout badges, SSL seals, and clear contact/support channels (WhatsApp integration is critical).

---

## 3. Landing Page Structure & Component Architecture

### Section 1: Top Navigation Bar
* **Logo:** Sleek, modern branding with gold/navy accents.
* **Navigation Links:** *Catálogo*, *¿Cómo Funciona?*, *Planes de Cuotas*, *Garantía & Envíos*, *Opiniones*.
* **CTA Button:** Primary high-contrast button (e.g., "Explorar Ofertas" or "Calcula tu Cuota").

### Section 2: Hero Section (High Impact)
* **Main Headline:** Bold statement focusing on access, low prices, and payment flexibility.
  * *Example:* "Compra lo que deseas hoy. Paga en cuotas a tu ritmo."
* **Subheadline:** Clear explanation of how the platform bridges LATAM shoppers with top retail products without overstretching their budget.
* **Primary CTAs:**
  * Main CTA: "Ver Catálogo" / "Empezar Ahora"
  * Secondary CTA: "Calcula tus Cuotas"
* **Visual Asset:** High-quality dynamic hero banner showcasing featured retail products (electronics, appliances, fashion) with price tags highlighting installment breakdowns (e.g., *"Desde $15/mes"*).

### Section 3: Value Propositions Grid (Why Choose Us?)
A 3-card or 4-card modern layout showcasing key operational strengths:
1. **Precios Directos de Mercado:** Sin intermediarios innecesarios.
2. **Pago Flexibles en Cuotas:** Opciones ajustadas a la capacidad de pago del cliente.
3. **Logística Segura y Rápida:** Cobertura regional garantizada con rastreo en tiempo real.
4. **Soporte Directo y Cercano:** Atención personalizada vía WhatsApp y soporte multicanal.

### Section 4: Interactive Installment Calculator (*Calculadora de Cuotas*)
* An interactive UI block allowing users to simulate purchases:
  * Slider for purchase amount.
  * Selector for number of installments (e.g., 3, 6, 12, 24 cuotas).
  * Real-time calculation of estimated monthly payments.

### Section 5: Featured Product Showcase / Categories
* Interactive cards displaying top-demanded product categories (Computación, Telefonía, Hogar, Moda).
* Each card shows product image, full price, breakdown in monthly installments, and an "Añadir / Comprar" direct trigger.

### Section 6: How It Works (*¿Cómo Funciona?*)
Simple 3-step timeline/stepper:
1. **Elige tus productos:** Selecciona lo que necesitas de nuestro catálogo internacional y local.
2. **Selecciona tu plan de cuotas:** Elige el plazo y método de pago que mejor se adapte a ti.
3. **Recibe en la puerta de tu casa:** Envío garantizado y soporte posventa continuo.

### Section 7: Trust, Security & Social Proof
* **Metrics Counter:** *+50,000 clientes satisfechos*, *+99% entregas a tiempo*, *Cero comisiones ocultas*.
* **Testimonials Carousel:** Real customer stories focusing on ease of payment and product quality.
* **Security Badges:** SSL Encrypted, Payment Gateway Seals, Verified Partner Badges.

### Section 8: FAQ (Preguntas Frecuentes)
Accordion component addressing key doubts:
* ¿Cuáles son los requisitos para pagar en cuotas?
* ¿Qué métodos de pago son aceptados en mi país?
* ¿Cuánto tarda en llegar mi pedido?
* ¿Cómo funciona la garantía y devoluciones?

### Section 9: Footer & Direct Contact
* **Primary Footer:** Navigation links, legal disclaimers, privacy policy, terms of service.
* **Floating WhatsApp Button:** Sticky bottom-right button for direct customer assistance (vital for LATAM conversion rates).

---

## 4. Technical Requirements & Best Practices for Implementation

### Frontend Stack (Recommended)
* **Framework:** React / Next.js (App Router) or Astro for lightweight, lightning-fast SSG/SSR performance.
* **Styling:** Tailwind CSS (configured with dark navy, neutral, and rich amber/gold tokens).
* **Icons:** Lucide-react / Tabler Icons.
* **Animations:** Framer Motion for subtle scroll transitions, hover states, and smooth accordion movements (avoid excessive animation that reduces performance).

### Performance & Accessibility (a11y)
* Target **Lighthouse Score:** 90+ across Performance, Accessibility, and SEO.
* Optimized images (WebP/AVIF formats with dynamic responsive sizes).
* Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Contrast compliance (WCAG AA standard) especially when using dark/gold accents on light backgrounds.

---

## 5. Instructions for the Developer Agent

When generating or refactoring code for this project:
1. Maintain strict component modularity (e.g., separate files for `Hero.tsx`, `Calculator.tsx`, `FeatureGrid.tsx`, `ProductCard.tsx`).
2. Use dynamic configuration for text strings and payment logic to allow easy regional adaptation (different currencies / localizations).
3. Ensure absolute responsiveness across mobile (360px+), tablet, and desktop viewports.
4. Apply modern subtle polish: soft box-shadows (`shadow-sm`, `shadow-xl`), subtle border rings (`ring-1 ring-black/5`), smooth gradient overlays, and clear visual hierarchy.
