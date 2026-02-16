# Customization Guide

## Color System

### CSS Variables

Colors are defined in `assets/css/style.css`:

```css
:root {
    /* Brand Colors */
    --primary-color: #14b8a6;        /* teal-500 */
    --primary-hover: #0d9488;        /* teal-600 */
    --secondary-color: #ef4444;      /* red-500 */
    --secondary-hover: #dc2626;      /* red-600 */
    --accent-color: #06b6d4;         /* cyan-500 */
    
    /* Background */
    --bg-dark: #111827;              /* gray-900 */
    --bg-glass: rgba(255, 255, 255, 0.05);
    
    /* Text */
    --text-primary: #ffffff;
    --text-secondary: #9ca3af;
    --text-muted: #6b7280;
}
```

### Changing Colors

**Update Primary Color**:
1. Open `assets/css/style.css`
2. Change `--primary-color: #14b8a6;` to your color
3. Update Tailwind colors in HTML:
   - Find/replace `teal-500` with your Tailwind color
   - Example: `teal-500` → `blue-500`

## Typography

### Current Fonts
- **Headings**: Cormorant Garamond (serif)
- **Body**: Space Grotesk (sans-serif)

### Changing Fonts

**1. Update Google Fonts link** in each HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**2. Update Tailwind config**:
```javascript
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['YourFont', 'sans-serif'],
                display: ['YourDisplay', 'serif']
            }
        }
    }
}
```

**3. Update CSS**:
```css
body {
    font-family: 'YourFont', sans-serif;
}

h1, h2, h3 {
    font-family: 'YourDisplay', serif;
}
```

## Spacing System

Uses Tailwind's 4px base scale:
- `xs`: 0.5rem (8px)
- `sm`: 0.75rem (12px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)

**Usage**:
```html
<div class="p-4">Padding 16px</div>
<div class="mt-8">Margin-top 32px</div>
```

## Components

### Creating Custom Components

**1. Add to style.css**:
```css
.my-button {
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.my-button:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
}
```

**2. Use in HTML**:
```html
<button class="my-button">Click Me</button>
```

## Images

### Replacing Images

**Logo**:
1. Replace `assets/images/logo.png`
2. Update src in all HTML files:
```html
<img src="../assets/images/your-logo.png" alt="Logo">
```

**Hero Images**:
- Located in `assets/images/`
- Recommended size: 1920x1080px
- Format: JPG or WebP for best performance

**Gallery Images**:
- Size: 800x600px minimum
- Use WebP for smaller file sizes
- Optimize before uploading

### Image Optimization

**Tools**:
- TinyPNG - Compress images
- Squoosh - Convert to WebP
- ImageOptim - Batch optimization

## Content

### Updating Text

**Home Page** (`pages/index.html`):
- Hero section: Lines 60-80
- Services: Lines 120-200
- Testimonials: Lines 630-680

**About Page** (`pages/about.html`):
- Story: Lines 80-120
- Team: Lines 150-250

### Adding New Pages

**1. Duplicate existing page**:
```bash
copy pages\services.html pages\new-page.html
```

**2. Update content and title**

**3. Add to navigation** in all HTML files:
```html
<a href="new-page.html">New Page</a>
```

## Theme Toggle Customization

### Colors

Edit `assets/css/dark-mode.css`:
```css
.light-mode {
    --bg-dark: #yourcolor;
    --text-primary: #yourcolor;
}
```

### Button Position

Edit `assets/css/dark-mode.css`:
```css
#theme-toggle {
    bottom: 1.5rem;      /* Change position */
    right: 1.5rem;       /* Change position */
}
```

## Forms

### Styling Forms

Forms use validation system automatically.

**Custom styling**:
```css
.input {
    background-color: var(--bg-glass);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
}
```

### Adding Validation

```html
<form class="validate-form">
    <input 
        type="email" 
        required 
        minlength="5"
        id="email"
        name="email">
</form>
```

## Advanced Customization

### Custom Animations

Add to `style.css`:
```css
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}
```

### Custom JavaScript

Add to `assets/js/main.js`:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Your custom code here
});
```

### Plugins

Add third-party plugins to `assets/js/plugins/`:
```html
<script src="../assets/js/plugins/your-plugin.js"></script>
```

## Best Practices

1. **Always backup** before making changes
2. **Test changes** in multiple browsers
3. **Optimize images** before uploading
4. **Validate HTML** using W3C validator
5. **Check mobile** responsiveness
6. **Test accessibility** with screen readers
7. **Keep file structure** intact

## Support

For complex customizations, refer to:
- Tailwind CSS documentation
- Font Awesome icon library
- Google Fonts catalog
