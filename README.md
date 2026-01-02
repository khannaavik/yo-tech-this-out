# YO! TECH THIS OUT

A mobile-first, scroll-based Apple-style frontend website showcasing the future of technology.

## Features

- 🎨 **Dark/Light Theme Toggle** - Smooth theme transitions with CSS variables
- 📱 **Fully Responsive** - Optimized for mobile, tablet, iPad, and desktop
- ⚡ **Modern React** - Built with Vite for lightning-fast development
- 🎯 **Apple-Inspired Design** - Clean, premium, futuristic aesthetic
- ✨ **Smooth Animations** - Lightweight, performant animations
- 🎪 **Scroll-Based Architecture** - Ready for scroll-based product sections

## Tech Stack

- React 18
- Vite
- CSS Custom Properties (CSS Variables)
- Modern CSS (no frameworks)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
yo-tech-this-out/
├── src/
│   ├── components/
│   │   ├── ThemeProvider.jsx    # Theme context and provider
│   │   ├── Navigation.jsx        # Sticky navigation bar
│   │   └── Hero.jsx              # Fullscreen hero section
│   ├── styles/
│   │   ├── variables.css         # CSS variables (theme tokens)
│   │   ├── globals.css           # Global styles and reset
│   │   └── components/
│   │       ├── navigation.css    # Navigation styles
│   │       └── hero.css          # Hero section styles
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

## Theme System

The theme system uses CSS custom properties for seamless theme switching:

- **Default Theme**: Dark
- **Toggle**: Available in navigation bar
- **Persistence**: Theme preference saved to localStorage
- **Transitions**: Smooth 300ms transitions between themes

## Future Sections

The architecture is prepared for the following sections (to be added):

- Product showcase sections
- Category navigation
- Feature highlights
- Footer

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Custom Properties support required

## License

MIT

