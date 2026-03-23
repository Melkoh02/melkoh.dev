# melkoh.dev

Personal portfolio site for **Melkoh** — built with React 19, TypeScript, Tailwind CSS 4, and Vite.

## Features

- **Atomic design** — components organized as atoms, molecules, and organisms
- **Scroll spy navigation** — active nav link updates as you scroll, smooth-scroll on click
- **Glassmorphism navbar** — frosted-glass fixed header with backdrop blur
- **Bento grid portfolio** — asymmetric card layout showcasing projects
- **Responsive** — mobile-first design that adapts to any screen size
- **i18n** — English and Spanish via i18next with auto browser language detection
- **Design system** — 40+ custom color tokens following Material Design 3 tonal palette
- **Dark mode ready** — Tailwind `dark:` variants wired throughout

## Tech Stack

| Layer     | Tech                              |
| --------- | --------------------------------- |
| Framework | React 19, TypeScript 5.8          |
| Build     | Vite 7                            |
| Styling   | Tailwind CSS 4 (CSS-based config) |
| Routing   | React Router DOM 7                |
| i18n      | i18next, react-i18next            |
| Linting   | ESLint 9 (flat config), Prettier  |
| Icons     | Material Symbols (Google Fonts)   |
| Fonts     | Inter (Google Fonts)              |

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn

### Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev
```

Opens at `http://localhost:5173`.

### Build

```bash
yarn build
```

Output goes to `dist/`.

### Other Scripts

```bash
yarn preview       # Preview production build locally
yarn type-check    # Run TypeScript type checking
yarn lint          # Lint with ESLint
yarn lint:fix      # Lint and auto-fix
yarn format        # Format with Prettier
yarn format:check  # Check formatting without writing
```

## Project Structure

```
src/
├── components/
│   ├── atoms/              # Smallest reusable UI units
│   │   ├── Button.tsx         # Primary/secondary/tertiary variants
│   │   ├── IconButton.tsx     # Icon-only action button
│   │   ├── Logo.tsx           # Brand mark
│   │   ├── MaterialIcon.tsx   # Material Symbols wrapper
│   │   ├── NavLink.tsx        # Nav item with active state
│   │   └── SectionLabel.tsx   # Uppercase tracking label
│   ├── molecules/          # Composed atom groups
│   │   ├── NavActions.tsx     # Search + grid icon buttons
│   │   ├── NavLinks.tsx       # Scroll-spy nav with smooth scroll
│   │   └── SocialLinks.tsx    # Footer social links
│   └── organisms/          # Full page sections
│       ├── AboutSection.tsx   # Sticky title + philosophy text
│       ├── BentoGrid.tsx      # Project cards (Solve Arena featured)
│       ├── ContactSection.tsx # Dark CTA with email
│       ├── Footer.tsx         # Copyright + social links
│       ├── HeroSection.tsx    # Full-viewport hero
│       └── Navbar.tsx         # Glassmorphism fixed nav
├── lib/
│   └── hooks/
│       └── useActiveSection.ts  # Scroll-position-based scroll spy
├── localization/
│   ├── index.ts            # i18next setup + language detector
│   └── locales/
│       ├── en.json            # English translations
│       └── es.json            # Spanish translations
├── pages/
│   ├── App.tsx             # Router entry point
│   └── HomePage.tsx        # Composes all organisms
├── index.css               # Tailwind v4 @theme + global styles
├── main.tsx                # React DOM render
└── vite-env.d.ts           # Vite type definitions
```

## Adding a New Language

1. Create `src/localization/locales/{lang}.json` copying the structure from `en.json`
2. Add the import and resource entry in `src/localization/index.ts`

The language detector checks `localStorage` first, then falls back to the browser's preferred language.

## License

MIT
