tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#14b8a6', // Teal
                secondary: '#8b5cf6', // Purple
                accent: '#10b981', // Emerald
                dark: '#0f172a',
                light: '#f8fafc',
                'accent-orange': '#FF6B35',
                'accent-teal': '#00D9FF',
                'dark-gray': '#1a1a1a'
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                display: ['Cormorant Garamond', 'serif'],
                serif: ['Cormorant Garamond', 'serif']
            },
            backgroundImage: {
                'ethereal-dark': 'linear-gradient(to bottom right, #111827, #0f172a, #000000)',
            }
        }
    }
}
