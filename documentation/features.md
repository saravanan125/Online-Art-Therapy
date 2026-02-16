# Features Guide

## Core Features

### 1. Dark/Light Mode Toggle

**Location**: Floating button (bottom-right corner)

**Usage**:
- Click sun/moon icon to toggle themes
- Preference saves to localStorage
- Auto-applies on page reload

**Colors**:
- Dark: `#111827` background, `#ffffff` text
- Light: `#f9fafb` background, `#111827` text

### 2. Form Validation

**Usage**:
Add `validate-form` class to any form:
```html
<form class="validate-form">
  <input type="email" required>
  <button type="submit">Submit</button>
</form>
```

**Features**:
- Real-time validation on blur
- Email/phone number validation
- Required field checking
- Visual error/success states
- ARIA announcements for accessibility

### 3. Loading States

**Skeleton Loaders**:
```html
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-text"></div>
</div>
```

**JavaScript**:
```javascript
showSkeleton(element);    // Show loading
hideSkeleton(element);    // Hide loading
showLoadingSpinner(container);  // Add spinner
```

### 4. Accessibility Features

**Skip-to-Content**:
- Press Tab on page load
- Skip navigation and go to main content
- WCAG 2.1 AA compliant

**Focus States**:
- 2px teal outline on all interactive elements
- Shadow for enhanced visibility
- Keyboard navigation support

**Screen Readers**:
- ARIA attributes on forms
- Error announcements
- `.sr-only` class for hidden text

**Reduced Motion**:
- Respects `prefers-reduced-motion`
- Animations disabled for accessibility

### 5. RTL Language Support

**Enable RTL**:
```html
<html dir="rtl" lang="ar">
```

**Automatic Changes**:
- Text alignment flips
- Margins adjust  
- Navigation reverses

### 6. Component Library

**Buttons**:
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
```

**Cards**:
```html
<div class="card card-hover">
  <div class="card-body">Content</div>
</div>
```

**Badges**:
```html
<span class="badge badge-primary">New</span>
<span class="badge badge-live">Live</span>
```

**Utilities**:
```html
<div class="glass">Glassmorphism effect</div>
<div class="glow-teal">Glowing element</div>
<h1 class="text-gradient-teal-red">Gradient text</h1>
```

## Page-Specific Features

### Dashboard
- Live session indicators
- Countdown timers
- Workshop library with video cards
- Stats grid with counters

### Booking
- Multi-step form
- Service calculator
- Confirmation page
- Calendar invite download

### Gallery
- Lightbox image viewing
- Category filtering
- Hover effects

### Contact
- Interactive form validation
- Google Maps integration
- Social media links

## JavaScript Features

All features are in `assets/js/main.js`:
- Mobile menu toggle
- Sticky header
- Intersection Observer animations
- Particle effects (hero section)
- Stats counter animation
- Service price calculator
- Mood tracker
- Form validation
- Theme toggle
- Loading states

## Performance

- No build process required
- Minimal dependencies
- Optimized animations
- Lazy loading ready
- Mobile-first responsive
