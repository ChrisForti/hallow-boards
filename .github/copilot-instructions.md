# Hallow Boards - AI Coding Agent Instructions

## Project Overview

A React/TypeScript surfboard design and customization application with a 3D parametric modeler. The app helps users choose proven surfboard designs and customize them through an interactive 3D viewer.

## Tech Stack & Architecture

- **Frontend:** React 19 + TypeScript + Vite
- **Routing:** React Router v7 (two main routes: `/` home, `/modeler` 3D editor)
- **Styling:** Tailwind CSS v4 (config in `tailwind.config.js`)
- **3D Rendering:** React Three Fiber + Three.js + @react-three/drei
- **State Management:** Zustand for board configuration (`features/modeler/store/boardStore.ts`)
- **Base Path:** `/hallow-boards/` (configured in `vite.config.ts` for GitHub Pages deployment)

## Key Architecture Patterns

### Feature-Based Organization

Code is organized by feature, not by type. The 3D modeler is completely isolated in `src/features/modeler/`:

```
features/modeler/
├── components/    # SurfboardViewer, SurfboardModel, ConfigPanel
├── store/         # boardStore.ts (Zustand state)
└── utils/         # surfboardGeometry.ts, surfboardMath.ts
```

### 3D Geometry Generation

The app uses **parametric modeling** - generating 3D geometry from mathematical formulas:

1. **Board Configuration** (`types/surfboard.ts`): Defines dimensions, tail shape, fin config, material
2. **Math Utilities** (`surfboardMath.ts`): Rocker curves, width profiles, easing functions
3. **Geometry Builder** (`surfboardGeometry.ts`): Converts config → Three.js BufferGeometry
4. **React Component** (`SurfboardModel.tsx`): Renders geometry with materials

Example workflow:

- User adjusts length slider → Updates Zustand store → `useMemo` regenerates geometry → Three.js re-renders

### State Management Philosophy

- **Zustand store** (`boardStore.ts`) manages global board configuration state
- Components access store via `useBoardStore()` hook: `config`, `setConfig`, `updateDimensions`, `resetToDefault`
- Props flow: `Modeler` reads from store → passes `boardConfig` to `SurfboardViewer` → `SurfboardModel`
- `ConfigPanel` updates store directly via `updateDimensions()` and `setConfig()`

## Critical Developer Workflows

### Development Commands

```bash
npm run dev          # Start dev server on localhost:5173
npm run build        # TypeScript compile + Vite build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Working with 3D Components

- Always wrap Three.js components with React Three Fiber's `<Canvas>`
- Use `@react-three/drei` helpers: `OrbitControls`, `Environment`, `PerspectiveCamera`
- Regenerate geometry in `useMemo` when config changes (expensive operation)
- Three.js coordinates: Y-up, measurements in inches (surfboard industry standard)

### Type Safety

- Board dimensions have strict ranges (see `types/surfboard.ts` comments)
- All Three.js types imported from `@types/three`
- React Three Fiber provides typed refs: `useRef<Mesh>(null)`

## Project-Specific Conventions

### Surfboard Math

- **Length** in feet (5.0-10.0), all other dimensions in inches
- **Rocker curve**: CatmullRomCurve3 with 5 control points (nose, quarter, center, quarter, tail)
- **Width profile**: Smooth interpolation using cubic easing between nose/wide/tail sections
- **Volume calculation**: Approximates liters using elliptical cross-sections

### Styling Patterns

- Dark gradient backgrounds: `bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
- Glass morphism: `backdrop-blur-sm bg-black/20` with subtle borders
- Accent color: Purple (`purple-500`, `purple-600`)
- Range inputs use `accent-purple-600` for custom slider colors

### File Naming

- React components: PascalCase with `.tsx` extension
- Utilities: camelCase with `.ts` extension
- Types: Exported interfaces/types in `types/` directory

## Integration Points

### React Three Fiber Bridge

- `Canvas` component creates WebGL context and RAF loop
- `useFrame` hook for animations (runs every frame)
- `useMemo` for geometry generation (prevents unnecessary recalculations)
- Props changes flow naturally: React re-render → geometry regeneration → Three.js update

### Router Integration

- Simple two-route setup: Home (marketing) + Modeler (3D tool)
- No nested routes or loaders yet
- Header component uses `Link` for navigation (client-side routing)

### External Dependencies

- Three.js: Direct imports for math (`Vector2`, `Vector3`, `CatmullRomCurve3`)
- Drei: Imports for camera, controls, environment (pre-built scenes)

## Common Tasks

### Adding New Board Parameters

1. Add to `BoardDimensions` interface in `types/surfboard.ts`
2. Update `DEFAULT_BOARD` constant
3. Add slider in `ConfigPanel.tsx`
4. Use parameter in `surfboardGeometry.ts` generation logic

### Modifying 3D Appearance

- Materials: Edit `SurfboardModel.tsx` `<meshStandardMaterial>` props
- Lighting: Adjust `SurfboardViewer.tsx` light positions/intensities
- Environment: Change `<Environment preset="...">` (sunset, dawn, night, etc.)

### Debugging 3D Issues

- Use React DevTools for component hierarchy
- Add `<axesHelper />` to Canvas for coordinate system visualization
- Console.log geometry vertex count: `geometry.attributes.position.count`
- Enable Three.js stats: `import { Stats } from '@react-three/drei'` + `<Stats />`

## Known Issues & TODOs

See `TODO.md` for comprehensive punch list. Key active work:

- Tail shape geometry implementation (currently only squash works)
- Fin box/configuration visualization
- Board templates (only default exists)
- Mobile responsive design for modeler

## Research & Context

See `3D_MODELER_RESEARCH.md` for detailed technology evaluation and implementation rationale. React Three Fiber was chosen over Three.js Studio, Spline, and other alternatives for React integration, performance, and flexibility.
