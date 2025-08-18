# Overstanding Live

A modern web application built with Vite, React, and TypeScript, exploring themes of understanding, wisdom, and knowledge through essays, aphorisms, and curated content.

## Template Selection & Adaptation

This project uses the **shadcn/ui "Taxonomy" template** as its visual foundation, adapted for Vite instead of Next.js. The Taxonomy template was selected because:

- **License**: MIT (free for commercial use)
- **Design Philosophy**: Clean, typography-first approach perfect for a writing-focused site
- **Visual Patterns**: Landing hero, article cards, tag systems, and minimal footer design
- **Component Quality**: Well-structured shadcn/ui components with excellent accessibility

### Key Adaptations Made:
- Recreated Next.js visual patterns in Vite environment
- Adapted server-specific components to client-side React
- Customized color palette to black-and-gold brand theme
- Integrated Marcellus SC and Inter typography
- Maintained responsive design and accessibility standards

## Brand & Design System

### Color Palette
- **Background**: `#0D0D0D` (Deep Black)
- **Primary**: `#E6A700` (Gold)
- **Foreground**: `#F9F6F2` (Bone)
- **Secondary**: `#5E5A59` (Charcoal)

### Typography
- **Headings**: Marcellus SC (serif)
- **Body**: Inter (sans-serif)
- **Features**: OpenType features enabled, generous line heights

### Accessibility
- WCAG 2.2 AA compliance target
- High contrast ratios (gold on black)
- Respects `prefers-reduced-motion`
- Semantic HTML structure
- Keyboard navigation support

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
