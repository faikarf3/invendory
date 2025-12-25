# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Invendory is a vendor discovery and filtering platform built as a modern React single-page application. The project currently contains only a frontend implementation with mock data, designed for future backend integration.

## Development Commands

All commands should be run from the `frontend/` directory:

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build (with lovable-tagger enabled)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC compiler (fast refresh)
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (for future API integration)
- **UI Framework**: shadcn/ui (53+ components based on Radix UI primitives)
- **Styling**: Tailwind CSS with custom design tokens
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components (53+ pre-built)
│   │   ├── FilterSidebar.tsx
│   │   ├── VendorCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Index.tsx    # Main vendor listing page
│   │   └── NotFound.tsx # 404 page
│   ├── hooks/           # Custom React hooks (use-mobile, use-toast)
│   ├── lib/
│   │   └── utils.ts     # cn() utility for className merging
│   ├── App.tsx          # Root component with providers
│   └── main.tsx         # Entry point
├── vite.config.ts       # Vite configuration (port 8080, @ alias)
├── tailwind.config.ts   # Tailwind with custom colors/animations
└── components.json      # shadcn/ui configuration
```

### Provider Hierarchy

The app uses a strict provider stack in [App.tsx](frontend/src/App.tsx):

```
QueryClientProvider (TanStack Query for API state)
└── TooltipProvider (Radix UI tooltips)
    └── Toaster + Sonner (dual notification systems)
        └── BrowserRouter (routing)
            └── Routes
```

### Routing Convention

- All custom routes must be added ABOVE the catch-all `*` route in [App.tsx](frontend/src/App.tsx:19)
- Use React Router DOM v6 syntax with element prop

### Import Path Alias

The project uses `@/` as an alias for `./src/`. Always use this for imports:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Code Patterns & Conventions

### Component Structure

1. **Functional Components**: All components use function syntax with hooks
2. **Props Typing**: Define TypeScript interfaces for all component props
3. **Naming**: PascalCase for components, kebab-case for files in `ui/` folder
4. **Hooks**: Custom hooks prefixed with `use-` (e.g., `use-mobile.tsx`)

### Styling Approach

- **Primary Method**: Tailwind utility classes
- **Class Merging**: Use `cn()` utility from `@/lib/utils` for conditional classes
- **Component Variants**: Use `class-variance-authority` (cva) for component variants
- **Responsive Design**: Mobile-first with Tailwind breakpoints (`sm:`, `lg:`, `xl:`)
- **Theme Variables**: CSS custom properties in `index.css` (--primary, --navbar, etc.)
- **Dark Mode**: Supported via `next-themes` with `.dark` class selector

Example:
```typescript
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // allow prop override
)}>
```

### Data Handling

- **Current State**: Mock data embedded in components (see [Index.tsx](frontend/src/pages/Index.tsx:6-88))
- **Future Integration**: TanStack Query already configured for API calls
- **Price Formatting**: Use `Intl.NumberFormat` with Indonesian locale (`id-ID`)

### State Management

- **Local UI State**: `useState` for component-level state
- **Server State**: TanStack Query (configured but not yet used)
- **Form State**: React Hook Form for all forms
- **Global UI State**: React Context where needed (tooltips, toasts)

### shadcn/ui Components

The project uses 53+ pre-built accessible components. To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

All ui components are in `src/components/ui/` and built on Radix UI primitives for accessibility.

## Current Limitations & Future Development Areas

### Not Yet Implemented

1. **Backend Integration**: No API endpoints connected (mock data only)
2. **Filtering Logic**: FilterSidebar UI exists but doesn't filter vendors
3. **Sorting**: Sort dropdown is non-functional
4. **Pagination**: "Load More" button is a placeholder
5. **Authentication**: No auth system (but providers are set up)
6. **Favorites**: UI exists but no persistence

### Ready for Integration

When adding backend integration:
- Use TanStack Query hooks (already configured)
- Add API utilities in `src/lib/` or `src/api/`
- Update mock data in components to API calls
- Implement filter/sort/pagination logic server-side

## Build Configuration

### Vite Settings

- **Dev Server**: Port 8080, IPv6 enabled (`::`)
- **Path Alias**: `@` resolves to `./src`
- **Development Plugin**: `lovable-tagger` enabled in dev mode only
- **Compiler**: SWC for fast TypeScript/JSX compilation

### TypeScript Settings

- **Type Checking**: Loose mode (noImplicitAny: false, strictNullChecks: false)
- **Module Resolution**: Bundler mode for Vite
- **Paths**: `@/*` mapped to `./src/*`

## Design System

### Custom Animations

Defined in [tailwind.config.ts](frontend/tailwind.config.ts):
- `fade-in`: Opacity transition
- `slide-in`: Transform and opacity
- Accordion expand/collapse animations

### Typography

- **Heading Font**: Garet
- **Body Font**: DM Sans

### Color System

Custom color tokens extend Tailwind's palette. See [tailwind.config.ts](frontend/tailwind.config.ts) for full definitions.

## Adding New Pages

1. Create component in `src/pages/`
2. Add route in [App.tsx](frontend/src/App.tsx) ABOVE the `*` catch-all route
3. Add navigation link in [Navbar.tsx](frontend/src/components/Navbar.tsx) if needed
4. Use the existing layout pattern (Navbar + content + Footer) for consistency

## Working with Forms

Use React Hook Form + Zod pattern:

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  field: z.string().min(1, "Required"),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

## Accessibility

- All shadcn/ui components include proper ARIA attributes via Radix UI
- Use semantic HTML (nav, article, aside, section)
- Ensure label associations for form inputs
- Test with keyboard navigation
- Maintain high contrast ratios
