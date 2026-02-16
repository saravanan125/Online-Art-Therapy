# Installation Guide

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for customization (VS Code recommended)
- Web server for deployment (optional for local viewing)

## File Structure

```
ArtSoul/
├── assets/
│   ├── css/
│   │   ├── style.css (main styles + components)
│   │   ├── dark-mode.css (theme toggle)
│   │   └── rtl.css (RTL support)
│   ├── js/
│   │   ├── main.js (all functionality)
│   │   └── plugins/ (future extensions)
│   ├── images/
│   └── fonts/
├── pages/
│   ├── index.html (home)
│   ├── about.html
│   ├── services.html
│   ├── blog.html
│   ├── contact.html
│   └── [15 total pages]
├── documentation/
└── README.md
```

## Installation Steps

### 1. Extract Files
Extract the template to your desired location.

### 2. Open in Browser
Navigate to `pages/index.html` and open in your browser.

### 3. Verify Assets
Ensure all CSS and JS files load correctly:
- Check browser console for errors
- Verify images display
- Test theme toggle button (bottom-right)

### 4. Customize Content
Edit HTML files in the `pages/` directory to match your content.

### 5. Deploy
Upload all files to your web hosting:
- Use FTP/SFTP client
- Or deploy via cPanel/hosting panel
- Ensure file paths remain intact

## Dependencies

### External Libraries (CDN)
- **Tailwind CSS** - via CDN in each HTML file
- **Font Awesome** - Icons library
- **Google Fonts** - Space Grotesk + Cormorant Garamond

No npm or build process required - template works out of the box!

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari, Chrome Mobile

## Troubleshooting

**Theme toggle not working?**
- Ensure `dark-mode.css` is loading
- Check browser console for errors
- Clear browser cache

**Images not showing?**
- Verify image paths are correct
- Check that images exist in `assets/images/`

**Forms not validating?**
- Ensure `main.js` is loading
- Add class `.validate-form` to forms
- Check required attributes on inputs
