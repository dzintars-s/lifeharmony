# LifeHarmony – Multilingual Implementation

## Overview

The LifeHarmony website now supports **3 languages**:
- 🇫🇮 **Finnish** (Suomi) – Default
- 🇬🇧 **English** – Full translation
- 🇷🇺 **Russian** (Русский) – Full translation

Language preference is automatically detected from:
1. Browser localStorage (if user has selected a language before)
2. Browser language settings (navigator.language)
3. Defaults to Finnish if no preference is found

## Architecture

### 1. Translation Files
**Location**: `src/lib/translations.ts`

Contains all text content organized by language and section:
```typescript
export const translations = {
  fi: { nav: {...}, hero: {...}, about: {...}, ... },
  en: { nav: {...}, hero: {...}, about: {...}, ... },
  ru: { nav: {...}, hero: {...}, about: {...}, ... },
}
```

### 2. Language Context
**Location**: `src/lib/language-context.tsx`

Provides global language state management:
```typescript
const { language, setLanguage, t } = useLanguage();
```

Features:
- Detects user's browser language on mount
- Saves language preference to localStorage
- Provides current translations (`t`) to all components
- Persists selection across sessions

### 3. Language Switcher Component
**Location**: `src/components/ui/language-switcher.tsx`

Dropdown menu with:
- Current language display with flag emoji
- All 3 language options
- Checkmark for selected language
- Smooth animations

## Usage in Components

### Basic Example
```typescript
"use client";

import { useLanguage } from "@/lib/language-context";

export function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <h1>{t.about.title}</h1>
    <p>{t.about.quote}</p>
  );
}
```

### With Translations Array
```typescript
{t.about.description.map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}
```

### With Conditional Logic
```typescript
const { language } = useLanguage();

if (language === 'ru') {
  // Russian-specific behavior
}
```

## Component Status

✅ **Multilingual Components** (12 sections):
- Navigation
- Hero
- About
- Features
- Pricing
- Gift Cards
- First Visit Offer
- Experience
- Testimonials
- Contact
- Map
- Payment Methods
- Footer

## Language Switcher Location

The language switcher appears in:
1. **Desktop**: Top navigation bar (right side, before "BOOK NOW" button)
2. **Mobile**: Top navigation bar (right side, before hamburger menu)

Button shows:
- Current language flag + name on desktop
- Just flag on mobile (space-saving)

Dropdown displays all 3 languages with checkmark on selected.

## Translation Structure

Each section contains relevant keys:

```typescript
nav: {
  home: string,
  about: string,
  services: string,
  pricing: string,
  giftcards: string,
  contact: string,
  bookNow: string,
},

hero: {
  title: string,
  tagline: string,
  subtitle: string,
  cta: string,
  ctaWhatsapp: string,
  location: string,
},

// ... and so on for each section
```

## Adding New Translations

To add a new translation:

1. **Update `src/lib/translations.ts`**:
```typescript
export const translations = {
  fi: {
    newSection: {
      key: 'Finnish text',
    },
    // ...
  },
  en: {
    newSection: {
      key: 'English text',
    },
    // ...
  },
  ru: {
    newSection: {
      key: 'Русский текст',
    },
    // ...
  },
};
```

2. **Use in component**:
```typescript
const { t } = useLanguage();
return <p>{t.newSection.key}</p>;
```

## Key Features

### 🔄 Real-time Language Switching
- Changes apply immediately across entire site
- No page reload needed
- Smooth animations on language menu

### 💾 Persistent Storage
- Language preference saved to localStorage
- `Key`: `lifeharmony-language`
- Persists across browser sessions

### 🌐 Browser Language Detection
- Automatically detects user's browser language
- Falls back to Finnish if language not supported
- User can override by selecting different language

### ♿ Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Clear visual feedback (checkmark in dropdown)

### 📱 Responsive Design
- Desktop: Full language name + flag displayed
- Mobile: Flag only (compact)
- Dropdown positioned correctly on all screen sizes

## Content Sections Translated

### Navigation
- All menu items (Home, About, Services, etc.)
- CTA buttons

### Hero Section
- Main title & tagline
- Subtitle
- Call-to-action buttons
- Location information

### About Section
- Section title
- Full description (3 paragraphs)
- Inspirational quote

### Features Section (Why LifeHarmony?)
- Section title
- 5 feature cards (title + description each)

### Pricing Section
- Session titles (30 min, 45 min, etc.)
- Descriptions
- Package section title
- CTA text

### Gift Cards Section
- Title & subtitle
- Occasions list (7 items)
- CTA button

### Contact Section
- Form labels
- Address, phone, WhatsApp, Facebook labels & values
- CTA buttons

### Testimonials
- Section title
- Customer review cards
- "View all reviews" link
- Google rating label

### Footer
- Tagline
- Quote
- Section headings
- Links labels

## Testing Language Switching

1. Open website: http://localhost:3000
2. Click language switcher in top-right (desktop) or with menu (mobile)
3. Select different language
4. Verify all content updates immediately
5. Refresh page – language preference persists
6. Open in new browser – detects your system language

## Browser Support

- All modern browsers support localStorage and navigator.language
- Tested on: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile, Samsung Internet

## Performance Impact

- Translation object is static (no runtime compilation)
- Language switching uses React Context (minimal re-renders)
- No additional HTTP requests
- File size: ~35KB (translations.ts)

## Future Enhancements

Possible additions:
- Add more languages (German, Swedish, etc.)
- Language flag icons from library instead of emojis
- RTL support for Arabic/Hebrew
- Language-specific date/number formatting
- Analytics tracking for language preferences
- Translation management system (i18n library)

## TypeScript Support

Full type safety for translations:

```typescript
export type Language = 'fi' | 'en' | 'ru';
export type Translations = typeof translations.fi;

// All translation keys are type-checked
const { t } = useLanguage(); // t is Translations type
t.hero.title; // ✅ Valid
t.hero.invalid; // ❌ TypeScript error
```

---

**Notes**:
- All translations maintain the premium, warm tone of the brand
- Cultural considerations taken into account for each language
- Maintained consistent formatting and structure across all languages
