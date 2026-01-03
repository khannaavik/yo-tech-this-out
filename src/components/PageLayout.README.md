# PageLayout System

A reusable, consistent framework for all secondary pages (About, Advertise, Techfluencers, Press, Contact, Live).

## Components

### PageLayout
Main wrapper component that provides consistent structure and scroll reveal animations.

```jsx
import { PageLayout } from '../components/PageLayout';

<PageLayout>
  {/* Your page content */}
</PageLayout>
```

### PageHero
Consistent hero section with title, subtitle, and optional description.

```jsx
import { PageHero } from '../components/PageHero';

<PageHero
  title="Page Title"
  subtitle="Page Subtitle"
  description="Optional description text"
/>
```

**Props:**
- `title` (string, optional) - Main hero title
- `subtitle` (string, optional) - Hero subtitle
- `description` (string, optional) - Hero description text
- `className` (string, optional) - Additional CSS classes

### PageSection
Reusable content section with scroll reveal animation and optional title.

```jsx
import { PageSection } from '../components/PageSection';

<PageSection title="Section Title" variant="centered">
  {/* Section content */}
</PageSection>
```

**Props:**
- `title` (string, optional) - Section title
- `variant` (string, optional) - Layout variant: `'default'`, `'centered'`, `'wide'`
- `noPadding` (boolean, optional) - Remove default padding
- `className` (string, optional) - Additional CSS classes
- `children` (ReactNode, required) - Section content

**Variants:**
- `default` - Standard width (1200px max)
- `centered` - Narrower width (900px max) for focused content
- `wide` - Wider width (1400px max) for expansive layouts

### PageCard
Glass-style content card with soft gradients and glow accents.

```jsx
import { PageCard } from '../components/PageCard';

<PageCard variant="highlight">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</PageCard>
```

**Props:**
- `variant` (string, optional) - Card style: `'default'`, `'highlight'`, `'subtle'`
- `onClick` (function, optional) - Makes card clickable/interactive
- `className` (string, optional) - Additional CSS classes
- `children` (ReactNode, required) - Card content

**Variants:**
- `default` - Standard glass-style card
- `highlight` - More prominent styling for important content
- `subtle` - Minimal styling for secondary content

## Example Usage

```jsx
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';

export function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="Our Story"
        description="Learn about our mission, vision, and the team behind YO! TECH THIS OUT."
      />

      <PageSection title="Our Mission">
        <PageCard>
          <h3>Curating Innovation</h3>
          <p>
            We bring the best of CES to audiences worldwide through curated
            experiences, podcasts, and digital content.
          </p>
        </PageCard>
      </PageSection>

      <PageSection title="The Team" variant="centered">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <PageCard variant="highlight">
            <h3>Team Member</h3>
            <p>Role and description.</p>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}
```

## Features

- ✅ **Consistent Hero Section** - Title, subtitle, and description with gradient text
- ✅ **Scroll Reveal Animations** - Smooth fade-in animations as sections enter viewport
- ✅ **Glass-Style Cards** - Premium glassmorphism with soft gradients and glows
- ✅ **Theme-Aware** - Automatically adapts to dark/light theme
- ✅ **Mobile-First Responsive** - Optimized for all screen sizes
- ✅ **Futuristic Design** - Soft gradients, glow accents, no harsh borders
- ✅ **Accessibility** - Respects `prefers-reduced-motion`, proper focus states
- ✅ **Performance** - GPU-friendly transforms, optimized animations

## Styling

All components use CSS custom properties from the theme system:
- `--color-bg-primary` - Background color
- `--color-text-primary` - Primary text color
- `--color-text-secondary` - Secondary text color
- `--spacing-*` - Consistent spacing scale
- `--radius-*` - Border radius values
- `--font-size-*` - Typography scale

## Best Practices

1. **Always wrap pages in PageLayout** - Provides consistent structure and animations
2. **Use PageHero for page headers** - Ensures consistent hero sections across pages
3. **Use PageSection for content blocks** - Provides scroll reveal and consistent spacing
4. **Use PageCard for content chunks** - Creates visual hierarchy with glass-style cards
5. **Choose appropriate variants** - Use `centered` for focused content, `wide` for expansive layouts
6. **Respect reduced motion** - All animations automatically respect `prefers-reduced-motion`

## Notes

- All components are fully responsive and mobile-first
- Scroll reveal animations use IntersectionObserver for performance
- Cards support hover effects on desktop (automatically disabled on touch devices)
- All styling is theme-aware and adapts to dark/light mode

