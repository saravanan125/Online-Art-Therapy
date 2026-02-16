# ArtSoul - Online Art Therapy & Wellness Studio Template

Welcome to **ArtSoul**, a modern, responsive, and accessible HTML/CSS template designed specifically for Art Therapy clinics, Wellness studios, and creative coaching businesses.

## Features

- **Theme Toggle**: Support for both Dark and Light modes with automatic preference detection.
- **Form Validation**: Real-time client-side validation for contact and booking forms.
- **Accessibility**: Built with accessibility in mind (WCAG 2.1 AA), including skip-to-content and focus indicators.
- **RTL Support**: Built-in support for right-to-left languages.
- **Dashboard Enhancements**: Premium glassmorphism dashboards for users and admins.
- **Service Calculator**: Dynamic cost estimation for wellness services.
- **Responsive Design**: Mobile-first design that looks great on all devices.

## File Structure

```
ArtSoul/
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles, components, and Tailwind overrides
│   │   ├── dark-mode.css   # Dark/Light mode theme specific styles
│   │   └── rtl.css         # Right-to-Left (RTL) language support
│   ├── js/
│   │   ├── main.js         # Core logic (Menu, Theme Toggle, Validation)
│   │   └── plugins/        # Reserved directory for JS plugins
│   ├── images/             # Visual assets and placeholders
│   └── fonts/              # Typography assets
├── pages/
│   ├── index.html          # Professional Home Page
│   ├── about.html          # Our Story & Team
│   ├── services.html       # Service Listing with Calculator
│   ├── gallery.html        # Creative Portfolio Grid
│   ├── contact.html        # Contact Page with Validation
│   └── ...                 # Total 15+ specialized pages
├── documentation/          # Comprehensive guides and documentation
└── README.md               # Quick overview and project info
```

## Installation & Setup

1. **Extract** the template package.
2. **Open** `pages/index.html` in your web browser to view the site.
3. No build step is required for the basic preview as it uses Tailwind via CDN.

For detailed setup, features, and customization, please refer to the [Documentation](./documentation/README.md).

## Customizing the Theme

### Colors
Update primary colors in `assets/css/style.css`:
```css
:root {
    --primary-color: #14b8a6; /* Brand Teal */
    --secondary-color: #ef4444; /* Brand Red */
}
```

### Dark/Light Mode
The theme toggle is managed automatically via `main.js`. Preference is stored in `localStorage`.

## License & Credits

- **Copyright**: &copy; 2026 ArtSoul Template. All Rights Reserved.
- **Images**: Unsplash (Royalty Free)
- **Icons**: FontAwesome 6 (Free)
- **Fonts**: Space Grotesk & Cormorant Garamond (Google Fonts)
