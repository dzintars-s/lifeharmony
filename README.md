# LifeHarmony – Premium Massage & Wellness Website

A modern, elegant one-page website for LifeHarmony, a professional massage and wellness studio in Pori, Finland. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

LifeHarmony is a premium Scandinavian wellness brand website featuring:

- **Full-screen cinematic hero** with video background and CTA buttons
- **Premium color palette**: Forest green, warm gold, cream, and beige
- **Elegant typography**: Cormorant Garamond for headings, Inter for body text
- **Smooth animations** using Framer Motion
- **Responsive mobile-first design** with sticky booking options
- **Complete service & pricing display** with hover interactions
- **Gift card showcase** with elegant mockup
- **Customer testimonials** section
- **Contact & booking integration** with WhatsApp and phone links
- **SEO optimized** for local Pori search terms

## 🏗️ Project Structure

```
lifeharmony/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── globals.css         # Design system & custom animations
│   │   └── page.tsx            # Home page assembler
│   ├── components/
│   │   └── sections/
│   │       ├── navigation.tsx   # Sticky navigation with mobile menu
│   │       ├── hero.tsx         # Full-screen hero with video
│   │       ├── about.tsx        # About section with split layout
│   │       ├── features.tsx     # Why LifeHarmony feature cards
│   │       ├── pricing.tsx      # Services & package pricing
│   │       ├── giftcards.tsx    # Gift card showcase
│   │       ├── first-visit.tsx  # First-visit offer banner
│   │       ├── experience.tsx   # Experience video section
│   │       ├── testimonials.tsx # Customer reviews & ratings
│   │       ├── contact.tsx      # Contact info & CTA buttons
│   │       ├── map.tsx          # Location section
│   │       ├── payment.tsx      # Payment methods
│   │       └── footer.tsx       # Footer with links
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Design System

### Color Palette
- **Forest Dark**: `#1A3A2A` – Primary accent
- **Forest**: `#2D4A3E` – Main brand color
- **Forest Medium**: `#3D6B56` – Secondary accent
- **Gold**: `#B8A582` – Premium accent
- **Champagne**: `#D4C4A8` – Light accent
- **Beige**: `#F2EDE4` – Section backgrounds
- **Background**: `#FDFCF9` – Main background

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Inter (clean modern sans-serif)
- Large editorial typography with generous whitespace

### Animations
- Fade-in on scroll
- Smooth parallax effects
- Hover card lift effects
- Text reveal animations
- Subtle button press feedback

## ✨ Key Features

### Navigation
- Sticky navigation that becomes blurred on scroll
- Desktop menu with smooth navigation links
- Mobile hamburger menu with full-screen overlay
- Prominent CTA button on desktop

### Hero Section
- Full-screen cinematic video background (wellness massage theme)
- Dark overlay for text readability
- Main branding: "LifeHarmony" + Finnish tagline
- Dual CTA buttons (Book appointment + WhatsApp)
- Play/pause video control

### About Section
- Split-screen layout with masonry image
- Warm, welcoming copy about LifeHarmony's philosophy
- Philosophical tagline with gold divider

### Features Section (Miksi LifeHarmony?)
- 5 feature cards with icons
- Animated on scroll
- Hover effects revealing deeper engagement

### Pricing Section
- Single session pricing (30–120 min, €30–90)
- Package deals (5-session bundles with savings)
- Hover reveal with booking CTA
- Dark pricing cards for packages

### Gift Cards Section
- Beautiful gift card mockup with forest gradient
- Occasions list (birthdays, holidays, etc.)
- WhatsApp CTA with pre-filled message

### First Visit Offer
- Dark green banner with gold large text
- −10 € discount highlight
- Call-to-action button

### Experience Section
- Full-width cinematic massage video
- Overlay text: "Sulje hetkeksi muu maailma ulkopuolelle"
- Play/pause control

### Testimonials
- Customer review cards
- Google rating badge (5.0/5)
- Link to full reviews

### Contact Section
- 4 contact info cards (address, phone, WhatsApp, Facebook)
- Icon-based design with hover effects
- Dual CTA buttons (WhatsApp booking + phone)

### Additional Sections
- **Map**: Location with Google Maps link
- **Payment Methods**: MobilePay, ePassi, Edenred, Card
- **Footer**: Dark green with brand info, links, and social

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for smartphone users arriving from Facebook/Google
- **Sticky bottom booking bar** on mobile with quick actions
- **Readable typography** with larger font sizes on mobile
- **Touch-friendly buttons** with adequate spacing
- **Optimized video loading** with poster images on mobile
- **Fast-loading video**: Uses Pexels CDN for performance

## 🔍 SEO & Metadata

### Meta Tags
- **Title**: "LifeHarmony | Hierontaa keholle ja mielelle – Pori"
- **Description**: "LifeHarmony tarjoaa rauhallista ja henkilökohtaista hierontaa Porissa. Varaa oma hyvinvointihetkesi Isolinnankatu 22 B:ssä."
- **Keywords**: LifeHarmony Pori, hieronta Pori, massage Pori, etc.

### Schema
- LocalBusiness & MassageTherapist structured data ready (can be added to layout)

## 🔗 Key Links

### Contact
- **Phone**: +358 40 185 1127 (`tel:` link)
- **WhatsApp**: https://wa.me/358401851127
- **Facebook**: https://www.facebook.com/lifeharmonyrk
- **Address**: Isolinnankatu 22 B, 2. kerros, huone 212, 28100 Pori, Finland

### External Videos
- Hero video: Pexels wellness massage video
- Experience video: Pexels spa/massage video

## 📦 Dependencies

```json
{
  "next": "16.3.8",
  "react": "19.2.8",
  "react-dom": "19.2.8",
  "framer-motion": "^14.0.0",
  "lucide-react": "^1.52.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.7.0",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4"
}
```

## 🎬 Animations & Interactions

### Entrance Animations
- Components fade in and slide up when scrolling into view
- Staggered timing for list items (0.1s delays)

### Hover Effects
- Cards lift with `transform: translateY(-4px)`
- Buttons scale slightly on hover
- Text color transitions on interactive elements

### Video Controls
- Play/pause button with smooth transitions
- Scroll indicator in hero section
- Custom scrollbar styling

## 🌍 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Notes

- All Finnish copy follows natural, warm tone
- No exaggerated medical/health claims
- Business information verified and accurate
- Only confirmed testimonials displayed
- Professional photography from Pexels (free, commercial use)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

None required for basic deployment. Optional for future features:
- Analytics tracking
- Contact form backend
- Appointment system integration

## 🔧 Customization

### Colors
Edit CSS custom properties in `src/app/globals.css` under `:root`

### Fonts
Change font imports in `src/app/layout.tsx`

### Content
Update text and links directly in component files (e.g., `src/components/sections/pricing.tsx`)

### Videos
Replace video URLs in `hero.tsx` and `experience.tsx`

## 📞 Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Built with premium Scandinavian design principles. Calm, luxurious, trustworthy, and relaxing.**