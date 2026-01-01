# 3D Surfboard Modeler - Research & Implementation Plan

**Project:** Hallow Boards  
**Date:** December 30, 2025  
**Purpose:** Research and implementation roadmap for 3D surfboard customization tool

---

## Executive Summary

After comprehensive research, **React Three Fiber (R3F)** is the recommended solution for building the 3D surfboard modeler. It provides the best balance of performance, flexibility, React integration, and community support for this specific use case.

**Key Recommendation Benefits:**

- Native React integration with component-based architecture
- Excellent performance through Three.js WebGL rendering
- Large, active community with extensive documentation
- No licensing costs
- Full control over customization features
- Rich ecosystem of helper libraries

---

## 1. Technology Evaluation

### 1.1 React Three Fiber (R3F) + Three.js

**Description:** React renderer for Three.js that brings declarative, component-based 3D graphics to React applications.

#### Pros:

- ✅ **Seamless React Integration:** Works naturally with your existing React/TypeScript/Vite stack
- ✅ **Component-Based:** 3D objects as React components with props and state
- ✅ **Excellent Performance:** Leverages Three.js's optimized WebGL rendering
- ✅ **Rich Ecosystem:** @react-three/drei (helpers), @react-three/fiber (core), @react-three/postprocessing (effects)
- ✅ **Flexible:** Full control over geometry, materials, lighting, and interactions
- ✅ **Active Community:** 25k+ GitHub stars, excellent documentation
- ✅ **Free & Open Source:** MIT license, no usage fees
- ✅ **TypeScript Support:** First-class TypeScript definitions

#### Cons:

- ⚠️ **Learning Curve:** Requires understanding 3D concepts (geometry, materials, lighting)
- ⚠️ **Custom Geometry Required:** Need to build parametric surfboard shapes from scratch
- ⚠️ **3D Expertise Needed:** Team needs some 3D graphics knowledge

#### Feature Implementation Difficulty:

- Viewer Controls: ⭐ Easy (built-in OrbitControls)
- Material/Color: ⭐ Easy (Three.js materials)
- Dimensions Display: ⭐⭐ Medium (custom overlays)
- View Presets: ⭐ Easy (camera positioning)
- Cross-sections: ⭐⭐⭐ Medium-Hard (custom geometry/clipping planes)
- Parametric Model: ⭐⭐⭐ Medium-Hard (custom geometry generation)

#### Cost: **$0** (Free and open source)

#### Learning Resources:

- Official docs: https://docs.pmnd.rs/react-three-fiber
- Three.js fundamentals: https://threejs.org/manual/
- Drei helpers: https://github.com/pmndrs/drei

---

### 1.2 Shaper3D API

**Description:** Commercial API specifically designed for surfboard and watercraft design.

#### Pros:

- ✅ **Surfboard-Specific:** Built explicitly for board design industry
- ✅ **Professional Features:** Industry-standard rocker curves, rail profiles
- ✅ **Proven Technology:** Used by professional shapers
- ✅ **Pre-built Models:** May have surfboard templates
- ✅ **Industry Terminology:** Uses standard shaping vocabulary

#### Cons:

- ❌ **Cost:** Likely requires licensing fees (pricing unclear/proprietary)
- ❌ **Limited Documentation:** Not widely publicly documented
- ❌ **Integration Complexity:** May require backend/API integration
- ❌ **Less Flexibility:** Constrained to their feature set
- ❌ **Vendor Lock-in:** Dependent on their service availability
- ❌ **Unknown Community:** Limited public community support

#### Feature Implementation Difficulty:

- Depends heavily on API capabilities (unclear without access)

#### Cost: **Unknown** (Likely commercial licensing - needs inquiry)

#### Assessment:

While Shaper3D is purpose-built for surfboards, the lack of clear public documentation, uncertain costs, and potential vendor lock-in make it risky for a web-based consumer application. Best suited for professional CAD/CAM workflows rather than interactive web experiences.

---

### 1.3 Babylon.js

**Description:** Complete 3D game engine with comprehensive toolset for web-based 3D experiences.

#### Pros:

- ✅ **Feature-Rich:** Physics, particles, audio, advanced rendering
- ✅ **Performance:** Excellent WebGL and WebGPU support
- ✅ **Powerful Editor:** Visual scene editor available
- ✅ **Good Documentation:** Comprehensive tutorials and playground
- ✅ **Free & Open Source:** Apache 2.0 license

#### Cons:

- ⚠️ **Heavier:** Larger bundle size than needed for this use case
- ⚠️ **Game-Engine Oriented:** More features than needed for product customizer
- ⚠️ **React Integration:** Requires wrapper library (@babylonjs/react)
- ⚠️ **Learning Curve:** Complex API with many concepts
- ⚠️ **Smaller React Community:** Less React-specific examples

#### Feature Implementation Difficulty:

- Similar to Three.js but with more overhead

#### Cost: **$0** (Free and open source)

#### Assessment:

Excellent engine, but overkill for this project. The game-engine focus brings unnecessary complexity and bundle size. Better suited for games or VR experiences than product configurators.

---

### 1.4 Other Alternatives Considered

#### **Spline (https://spline.design/)**

- **Type:** Design-first 3D tool with web export
- **Pros:** Beautiful UI, easy for designers, quick prototypes
- **Cons:** Less programmatic control, subscription costs ($8-30/month), limited customization logic
- **Verdict:** Good for static 3D content, not ideal for dynamic parametric models

#### **SketchFab API**

- **Type:** Embed 3D models from SketchFab platform
- **Pros:** Easy embedding, community models
- **Cons:** Limited customization, requires model creation elsewhere, API limits
- **Verdict:** Not suitable for real-time customization

#### **Three.js (Vanilla)**

- **Type:** Pure Three.js without React wrapper
- **Pros:** Most flexible, smallest overhead
- **Cons:** Doesn't integrate well with React patterns, more imperative code
- **Verdict:** R3F provides better React integration for same performance

---

## 2. Final Recommendation: React Three Fiber

### Why React Three Fiber?

1. **Perfect Stack Fit:** Integrates seamlessly with your existing React/TypeScript/Vite setup
2. **Cost Effective:** Zero licensing fees, active open-source development
3. **Flexibility:** Complete control over every aspect of the surfboard model
4. **Performance:** Production-ready performance for web applications
5. **Community:** Large, active community with abundant learning resources
6. **Future-Proof:** Can scale from simple viewer to advanced configurator
7. **Developer Experience:** Declarative React patterns you already know

### When to Reconsider:

- If professional CAD file export is required → Consider Shaper3D
- If team has zero 3D experience → Start with Spline for prototyping
- If targeting mobile-first with strict bundle size → Consider Three.js vanilla

---

## 3. Implementation Plan

### Phase 1: Foundation Setup (Week 1)

#### 3.1 Install Dependencies

```bash
npm install three @types/three
npm install @react-three/fiber @react-three/drei
npm install leva # Optional: for debugging UI controls
```

#### 3.2 File Structure

```
src/
├── components/
│   ├── surfboard/
│   │   ├── SurfboardViewer.tsx       # Main 3D viewer container
│   │   ├── SurfboardModel.tsx        # 3D surfboard mesh component
│   │   ├── SurfboardGeometry.ts      # Parametric geometry generator
│   │   ├── Controls.tsx              # Camera controls wrapper
│   │   ├── Lights.tsx                # Scene lighting setup
│   │   ├── Environment.tsx           # Environment/background
│   │   ├── Measurements.tsx          # Dimension overlays
│   │   └── ViewPresets.tsx           # Camera preset buttons
│   ├── configurator/
│   │   ├── ConfigPanel.tsx           # Customization UI panel
│   │   ├── DimensionControls.tsx     # Length/width/thickness sliders
│   │   ├── ShapeControls.tsx         # Tail/nose shape selectors
│   │   ├── FinControls.tsx           # Fin configuration
│   │   ├── MaterialControls.tsx      # Color/material picker
│   │   └── RockerControls.tsx        # Rocker curve adjustments
│   └── Design.tsx                    # Main page (integrate viewer here)
├── types/
│   └── surfboard.ts                  # TypeScript interfaces
├── utils/
│   ├── surfboardMath.ts              # Curve calculations
│   └── geometryHelpers.ts            # Geometry utilities
└── store/
    └── surfboardStore.ts             # State management (optional)
```

#### 3.3 Initial Setup Tasks

- [ ] Install R3F and dependencies
- [ ] Create basic scene with lighting
- [ ] Set up camera controls (OrbitControls)
- [ ] Add simple box placeholder model
- [ ] Verify rendering in existing Design component

### Phase 2: Basic Surfboard Model (Week 2)

#### 3.4 Parametric Geometry

Create surfboard geometry using Three.js BufferGeometry:

- [ ] Define surfboard parameters interface
- [ ] Generate outline curve from length, nose/tail widths
- [ ] Create thickness profile (rocker)
- [ ] Build 3D mesh from cross-sections
- [ ] Add basic material (solid color)

#### 3.5 Camera & Controls

- [ ] Implement OrbitControls for rotation/zoom/pan
- [ ] Add view presets (top, side, bottom, isometric)
- [ ] Implement smooth camera transitions
- [ ] Set appropriate camera limits (prevent extreme angles)

### Phase 3: Customization Features (Week 3-4)

#### 3.6 Dimension Controls

- [ ] Length slider (5'0" - 10'0")
- [ ] Width slider (18" - 24")
- [ ] Thickness slider (2" - 3.5")
- [ ] Real-time geometry updates
- [ ] Display current dimensions

#### 3.7 Shape Controls

- [ ] Tail shape selector (squash, round, swallow, diamond, etc.)
- [ ] Nose shape selector (pointed, round)
- [ ] Outline curve adjustment
- [ ] Rail profile (soft/hard)

#### 3.8 Rocker Profile

- [ ] Entry rocker slider (nose curve)
- [ ] Exit rocker slider (tail curve)
- [ ] Visual representation of rocker curve
- [ ] Presets for different board types

#### 3.9 Fin Configuration

- [ ] Fin box placement visualization
- [ ] Configuration selector (single, twin, thruster, quad, 5-fin)
- [ ] Fin size options (small, medium, large)
- [ ] Toggle fin visibility

### Phase 4: Visual Polish (Week 5)

#### 3.10 Materials & Colors

- [ ] Material presets (glossy resin, matte, wood, carbon fiber)
- [ ] Color picker for tint
- [ ] Deck/bottom different colors
- [ ] Texture mapping (optional)

#### 3.11 Measurements Display

- [ ] Length measurement with arrows
- [ ] Width at widest point
- [ ] Thickness at center
- [ ] Volume calculation display
- [ ] CSS2DRenderer for HTML overlays

#### 3.12 Cross-Section View

- [ ] Clipping plane to show internal structure
- [ ] Toggle hollow core visibility
- [ ] Adjustable cut position slider
- [ ] Outline highlighting

### Phase 5: Performance & Polish (Week 6)

#### 3.13 Optimization

- [ ] Implement LOD (Level of Detail) for complex geometry
- [ ] Optimize vertex count
- [ ] Debounce real-time updates
- [ ] Add loading states
- [ ] Progressive enhancement

#### 3.14 User Experience

- [ ] Touch gesture support for mobile
- [ ] Keyboard shortcuts
- [ ] Preset board templates (shortboard, longboard, fish, etc.)
- [ ] Share/export configuration
- [ ] Screenshot/download feature

---

## 4. Detailed Code Examples

### 4.1 Basic Scene Setup

```tsx
// src/components/surfboard/SurfboardViewer.tsx
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import SurfboardModel from "./SurfboardModel";
import Lights from "./Lights";

interface SurfboardViewerProps {
  boardConfig: BoardConfiguration;
}

export default function SurfboardViewer({ boardConfig }: SurfboardViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        {/* Camera Setup */}
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />

        {/* Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />

        {/* Lighting */}
        <Lights />

        {/* Environment/Background */}
        <Environment preset="sunset" />

        {/* Surfboard Model */}
        <SurfboardModel config={boardConfig} />

        {/* Ground Plane for Reference */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}
```

### 4.2 Camera Controls with Presets

```tsx
// src/components/surfboard/ViewPresets.tsx
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const PRESETS = {
  top: { position: new Vector3(0, 8, 0), target: new Vector3(0, 0, 0) },
  side: { position: new Vector3(8, 0, 0), target: new Vector3(0, 0, 0) },
  bottom: { position: new Vector3(0, -8, 0), target: new Vector3(0, 0, 0) },
  iso: { position: new Vector3(5, 4, 5), target: new Vector3(0, 0, 0) },
};

export default function ViewPresets() {
  const { camera, controls } = useThree();

  const setView = (presetName: keyof typeof PRESETS) => {
    const preset = PRESETS[presetName];
    camera.position.copy(preset.position);

    if (controls) {
      controls.target.copy(preset.target);
      controls.update();
    }
  };

  return null; // Controlled externally via buttons
}

// Usage in UI:
// <button onClick={() => setView('top')}>Top View</button>
```

### 4.3 Parametric Surfboard Geometry

```typescript
// src/utils/surfboardMath.ts
import { Vector2, Vector3, CatmullRomCurve3, Shape } from "three";

export interface BoardDimensions {
  length: number; // feet
  width: number; // inches
  thickness: number; // inches
  noseWidth: number; // inches
  tailWidth: number; // inches
  noseRocker: number; // inches
  tailRocker: number; // inches
}

export function generateOutline(dims: BoardDimensions): Vector2[] {
  const { length, width, noseWidth, tailWidth } = dims;
  const lengthInches = length * 12;

  // Create surfboard outline as 2D points
  const points: Vector2[] = [];
  const segments = 50;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = (t - 0.5) * lengthInches; // Center at 0

    // Calculate width at position using smooth curve
    let w: number;
    if (t < 0.3) {
      // Nose section
      w = mix(noseWidth, width, easeInOutCubic(t / 0.3));
    } else if (t > 0.7) {
      // Tail section
      w = mix(width, tailWidth, easeInOutCubic((t - 0.7) / 0.3));
    } else {
      // Middle section
      w = width;
    }

    points.push(new Vector2(x, w / 2));
  }

  // Mirror for other side
  for (let i = segments - 1; i >= 0; i--) {
    const pt = points[i];
    points.push(new Vector2(pt.x, -pt.y));
  }

  return points;
}

export function generateRockerCurve(dims: BoardDimensions): CatmullRomCurve3 {
  const { length, noseRocker, tailRocker } = dims;
  const lengthInches = length * 12;

  // Create rocker curve (bottom curve of board)
  const points = [
    new Vector3(-lengthInches / 2, -noseRocker, 0), // Nose
    new Vector3(-lengthInches / 4, -noseRocker / 2, 0), // Quarter
    new Vector3(0, 0, 0), // Center (flat)
    new Vector3(lengthInches / 4, -tailRocker / 2, 0), // Quarter
    new Vector3(lengthInches / 2, -tailRocker, 0), // Tail
  ];

  return new CatmullRomCurve3(points);
}

function mix(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
```

### 4.4 Surfboard Model Component

```tsx
// src/components/surfboard/SurfboardModel.tsx
import { useRef, useMemo } from "react";
import { Mesh, BufferGeometry, ExtrudeGeometry, Shape } from "three";
import { useFrame } from "@react-three/fiber";
import { BoardConfiguration } from "../../types/surfboard";
import { generateSurfboardGeometry } from "./SurfboardGeometry";

interface Props {
  config: BoardConfiguration;
}

export default function SurfboardModel({ config }: Props) {
  const meshRef = useRef<Mesh>(null);

  // Generate geometry based on configuration
  const geometry = useMemo(() => {
    return generateSurfboardGeometry(config);
  }, [config]);

  // Optional: subtle rotation animation when idle
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow>
      <meshStandardMaterial
        color={config.color}
        roughness={0.2}
        metalness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
}
```

### 4.5 Geometry Generator

```typescript
// src/components/surfboard/SurfboardGeometry.ts
import * as THREE from "three";
import { BoardConfiguration } from "../../types/surfboard";
import {
  generateOutline,
  generateRockerCurve,
} from "../../utils/surfboardMath";

export function generateSurfboardGeometry(
  config: BoardConfiguration
): THREE.BufferGeometry {
  const { dimensions } = config;

  // Get outline and rocker
  const outline = generateOutline(dimensions);
  const rockerCurve = generateRockerCurve(dimensions);

  // Create cross-sections along the length
  const sections = 30;
  const geometry = new THREE.BufferGeometry();

  const vertices: number[] = [];
  const indices: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];

  // Generate vertices for each cross-section
  for (let i = 0; i <= sections; i++) {
    const t = i / sections;
    const lengthPos = (t - 0.5) * dimensions.length * 12;

    // Get rocker height at this position
    const rockerPoint = rockerCurve.getPointAt(t);
    const rockerHeight = rockerPoint.y;

    // Get width at this position
    const widthT = getWidthAtPosition(t, dimensions);

    // Create thickness profile (ellipse cross-section)
    const thicknessSegments = 20;
    for (let j = 0; j <= thicknessSegments; j++) {
      const angle = (j / thicknessSegments) * Math.PI; // Half circle for top/bottom

      const x = lengthPos;
      const y = rockerHeight + Math.sin(angle) * (dimensions.thickness / 2);
      const z = Math.cos(angle) * widthT;

      vertices.push(x, y, z);

      // UVs for texture mapping
      uvs.push(t, j / thicknessSegments);
    }
  }

  // Generate indices for triangles
  const verticesPerSection = 21; // thicknessSegments + 1
  for (let i = 0; i < sections; i++) {
    for (let j = 0; j < verticesPerSection - 1; j++) {
      const a = i * verticesPerSection + j;
      const b = a + 1;
      const c = a + verticesPerSection;
      const d = c + 1;

      indices.push(a, b, d);
      indices.push(a, d, c);
    }
  }

  geometry.setIndex(indices);
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  return geometry;
}

function getWidthAtPosition(
  t: number,
  dims: BoardConfiguration["dimensions"]
): number {
  // Simplified width interpolation
  if (t < 0.3) {
    return mix(dims.noseWidth / 2, dims.width / 2, t / 0.3);
  } else if (t > 0.7) {
    return mix(dims.width / 2, dims.tailWidth / 2, (t - 0.7) / 0.3);
  }
  return dims.width / 2;
}

function mix(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t;
}
```

### 4.6 TypeScript Types

```typescript
// src/types/surfboard.ts
export interface BoardDimensions {
  length: number; // feet (5.0 - 10.0)
  width: number; // inches (18 - 24)
  thickness: number; // inches (2.0 - 3.5)
  noseWidth: number; // inches (10 - 16)
  tailWidth: number; // inches (12 - 18)
  noseRocker: number; // inches (3 - 7)
  tailRocker: number; // inches (1 - 3)
}

export type TailShape =
  | "squash"
  | "round"
  | "pin"
  | "swallow"
  | "diamond"
  | "square";

export type FinConfiguration =
  | "single"
  | "twin"
  | "thruster"
  | "quad"
  | "five-fin";

export interface BoardMaterial {
  color: string;
  finish: "glossy" | "matte" | "satin";
  transparency: number;
}

export interface BoardConfiguration {
  id: string;
  name: string;
  dimensions: BoardDimensions;
  tailShape: TailShape;
  finConfig: FinConfiguration;
  material: BoardMaterial;
}

export const DEFAULT_BOARD: BoardConfiguration = {
  id: "default",
  name: "Default Shortboard",
  dimensions: {
    length: 6.0,
    width: 18.5,
    thickness: 2.375,
    noseWidth: 12,
    tailWidth: 14,
    noseRocker: 5,
    tailRocker: 2,
  },
  tailShape: "squash",
  finConfig: "thruster",
  material: {
    color: "#ffffff",
    finish: "glossy",
    transparency: 0.9,
  },
};
```

### 4.7 Customization UI Panel

```tsx
// src/components/configurator/ConfigPanel.tsx
import { useState } from "react";
import { BoardConfiguration, DEFAULT_BOARD } from "../../types/surfboard";

interface Props {
  config: BoardConfiguration;
  onChange: (config: BoardConfiguration) => void;
}

export default function ConfigPanel({ config, onChange }: Props) {
  const updateDimension = (
    key: keyof BoardConfiguration["dimensions"],
    value: number
  ) => {
    onChange({
      ...config,
      dimensions: {
        ...config.dimensions,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold">Customize Your Board</h2>

      {/* Dimensions */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Dimensions</h3>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Length: {config.dimensions.length.toFixed(1)}'
            </label>
            <input
              type="range"
              min="5.0"
              max="10.0"
              step="0.1"
              value={config.dimensions.length}
              onChange={(e) =>
                updateDimension("length", parseFloat(e.target.value))
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Width: {config.dimensions.width.toFixed(1)}"
            </label>
            <input
              type="range"
              min="18"
              max="24"
              step="0.25"
              value={config.dimensions.width}
              onChange={(e) =>
                updateDimension("width", parseFloat(e.target.value))
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Thickness: {config.dimensions.thickness.toFixed(2)}"
            </label>
            <input
              type="range"
              min="2.0"
              max="3.5"
              step="0.125"
              value={config.dimensions.thickness}
              onChange={(e) =>
                updateDimension("thickness", parseFloat(e.target.value))
              }
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Tail Shape */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Tail Shape</h3>
        <div className="grid grid-cols-3 gap-2">
          {["squash", "round", "pin", "swallow", "diamond", "square"].map(
            (shape) => (
              <button
                key={shape}
                onClick={() => onChange({ ...config, tailShape: shape as any })}
                className={`px-4 py-2 rounded capitalize ${
                  config.tailShape === shape
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {shape}
              </button>
            )
          )}
        </div>
      </section>

      {/* Fin Configuration */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Fin Setup</h3>
        <div className="grid grid-cols-2 gap-2">
          {["single", "twin", "thruster", "quad", "five-fin"].map((fin) => (
            <button
              key={fin}
              onClick={() => onChange({ ...config, finConfig: fin as any })}
              className={`px-4 py-2 rounded capitalize ${
                config.finConfig === fin
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {fin.replace("-", " ")}
            </button>
          ))}
        </div>
      </section>

      {/* Color Picker */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Color</h3>
        <input
          type="color"
          value={config.material.color}
          onChange={(e) =>
            onChange({
              ...config,
              material: { ...config.material, color: e.target.value },
            })
          }
          className="w-full h-12 rounded cursor-pointer"
        />
      </section>
    </div>
  );
}
```

### 4.8 Measurement Overlays

```tsx
// src/components/surfboard/Measurements.tsx
import { Html } from "@react-three/drei";
import { BoardDimensions } from "../../types/surfboard";

interface Props {
  dimensions: BoardDimensions;
}

export default function Measurements({ dimensions }: Props) {
  const lengthInches = dimensions.length * 12;

  return (
    <>
      {/* Length measurement */}
      <Html position={[0, 0, dimensions.width / 2 + 2]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
          Length: {dimensions.length.toFixed(1)}'
        </div>
      </Html>

      {/* Width measurement */}
      <Html position={[lengthInches / 4, 0, 0]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
          Width: {dimensions.width.toFixed(1)}"
        </div>
      </Html>

      {/* Thickness measurement */}
      <Html position={[-lengthInches / 4, dimensions.thickness, 0]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
          Thickness: {dimensions.thickness.toFixed(2)}"
        </div>
      </Html>
    </>
  );
}
```

### 4.9 Integration with Existing App

```tsx
// src/components/Design.tsx - Updated with 3D viewer
import { useState } from "react";
import SurfboardViewer from "./surfboard/SurfboardViewer";
import ConfigPanel from "./configurator/ConfigPanel";
import { BoardConfiguration, DEFAULT_BOARD } from "../types/surfboard";

export default function Design() {
  const [boardConfig, setBoardConfig] =
    useState<BoardConfiguration>(DEFAULT_BOARD);

  return (
    <section id="design" className="flex-1 flex">
      {/* 3D Viewer - takes most space */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50">
        <SurfboardViewer boardConfig={boardConfig} />
      </div>

      {/* Configuration Panel - sidebar */}
      <div className="w-96 overflow-y-auto">
        <ConfigPanel config={boardConfig} onChange={setBoardConfig} />
      </div>
    </section>
  );
}
```

---

## 5. Dependencies & Installation

### Required Packages

```json
{
  "dependencies": {
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.96.0",
    "@react-three/postprocessing": "^2.16.0"
  },
  "devDependencies": {
    "@types/three": "^0.160.0"
  }
}
```

### Installation Command

```bash
npm install three @types/three @react-three/fiber @react-three/drei
```

### Optional (for debugging/development)

```bash
npm install leva  # GUI controls for tweaking parameters
npm install @react-three/postprocessing  # Advanced visual effects
```

---

## 6. Performance Considerations

### Optimization Strategies

1. **Geometry Caching:** Memoize geometry generation based on config hash
2. **Debounce Updates:** Delay geometry regeneration during slider drag (use `useMemo` with throttle)
3. **LOD (Level of Detail):** Use fewer vertices when zoomed out
4. **Instancing:** For fin boxes/multiple fins, use InstancedMesh
5. **Shadows:** Make shadows optional for lower-end devices
6. **Bundle Size:** Tree-shake unused Three.js modules

### Target Performance

- **60 FPS** on modern laptops/desktops
- **30+ FPS** on mobile devices (iOS/Android)
- **Bundle Size:** ~500KB gzipped (Three.js + R3F)
- **Initial Load:** <2s on 3G

---

## 7. Development Timeline

### Realistic Estimates (1 developer)

| Phase                      | Duration      | Key Deliverables                                |
| -------------------------- | ------------- | ----------------------------------------------- |
| **Phase 1: Setup**         | 3-5 days      | Basic scene, camera controls, simple model      |
| **Phase 2: Geometry**      | 5-7 days      | Parametric surfboard shape, rocker curves       |
| **Phase 3: Customization** | 7-10 days     | All sliders, shape selectors, real-time updates |
| **Phase 4: Visual Polish** | 5-7 days      | Materials, measurements, cross-sections         |
| **Phase 5: Optimization**  | 3-5 days      | Performance tuning, mobile support, UX          |
| **Testing & Bug Fixes**    | 3-5 days      | Cross-browser testing, edge cases               |
| **Total**                  | **4-6 weeks** | Production-ready 3D modeler                     |

### Accelerated Timeline (2-3 weeks)

For MVP, focus on:

- ✅ Basic viewer with controls (Week 1)
- ✅ Dimension customization only (Week 2)
- ✅ Material/color selection (Week 2)
- ⚠️ Skip: Cross-sections, advanced rocker, measurement overlays

---

## 8. Learning Resources

### Essential Reading

1. **React Three Fiber Basics**

   - Official docs: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
   - Tutorial: https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations

2. **Three.js Fundamentals**

   - Three.js journey (paid but excellent): https://threejs-journey.com/
   - Three.js manual: https://threejs.org/manual/#en/fundamentals

3. **Drei Helpers**

   - Storybook: https://drei.pmnd.rs/
   - GitHub: https://github.com/pmndrs/drei

4. **Surfboard Geometry**
   - Rocker curves: Research Bezier/Catmull-Rom curves
   - CAD concepts: Look at Shaper3D terminology for industry terms

### Video Tutorials

- "React Three Fiber Crash Course" - YouTube
- "Building a 3D Product Configurator" - Frontend Masters
- "Three.js Custom Geometry" - Three.js docs

### Community

- Discord: Poimandres (R3F community) - https://discord.gg/poimandres
- Reddit: r/threejs
- Twitter: @0xca0a (R3F creator)

---

## 9. Risk Assessment & Mitigation

### Technical Risks

| Risk                           | Likelihood | Impact | Mitigation                                           |
| ------------------------------ | ---------- | ------ | ---------------------------------------------------- |
| Complex geometry calculations  | High       | High   | Start simple, iterate; use existing curve libraries  |
| Performance on mobile          | Medium     | High   | Early mobile testing, provide quality settings       |
| Learning curve for 3D concepts | High       | Medium | Allocate learning time, use examples                 |
| Browser compatibility          | Low        | Medium | Test on Safari, Firefox, Chrome; use WebGL fallbacks |

### Business Risks

| Risk                            | Likelihood | Impact | Mitigation                                 |
| ------------------------------- | ---------- | ------ | ------------------------------------------ |
| Scope creep (too many features) | High       | High   | Prioritize MVP features, phase development |
| User confusion with 3D controls | Medium     | Medium | Add tutorial/tooltips, preset examples     |
| Device compatibility issues     | Medium     | Medium | Progressive enhancement, fallback to 2D    |

---

## 10. Next Steps

### Immediate Actions (This Week)

1. ✅ **Approve this plan** - Review and sign off on technology choice
2. 🔧 **Install dependencies** - Run `npm install three @react-three/fiber @react-three/drei`
3. 📁 **Create file structure** - Set up folders per Section 3.2
4. 🎨 **Build basic scene** - Get a spinning cube rendering in Design.tsx
5. 📚 **Start learning** - Complete R3F intro tutorial

### Week 1 Goals

- [ ] Basic 3D scene rendering in your app
- [ ] Camera controls working (rotate, zoom, pan)
- [ ] Simple surfboard placeholder (box or imported model)
- [ ] Integration with existing Design component

### Decision Points

**Decision 1: Complexity Level**

- 🔷 **Option A (Recommended):** Full parametric model (4-6 weeks)
- 🔷 **Option B:** Pre-made models with limited customization (2-3 weeks)
- 🔷 **Option C:** Hybrid - start with pre-made, add parametric later (3-4 weeks)

**Decision 2: Mobile Priority**

- If mobile-first: Simplify geometry, optimize bundle size
- If desktop-first: Focus on visual quality, add mobile later

---

## 11. Conclusion

React Three Fiber provides the optimal balance of power, flexibility, and React integration for building a professional 3D surfboard customizer. While there's a learning curve for 3D concepts, the technology is mature, well-documented, and capable of delivering the exact features you've specified.

The estimated 4-6 week timeline is realistic for a full-featured implementation, with an MVP possible in 2-3 weeks by focusing on core features. The investment in R3F pays long-term dividends through complete control over the experience and zero ongoing licensing costs.

### Recommended Path Forward

1. **Week 1:** Setup + basic viewer ← START HERE
2. **Week 2:** Parametric geometry (simple version)
3. **Week 3:** Dimension customization UI
4. **Week 4:** Colors, materials, presets
5. **Weeks 5-6:** Polish, optimization, advanced features

This plan provides a clear roadmap from research to production. The code examples give you concrete starting points, and the phased approach allows for iterative development and early user feedback.

**Ready to start building!** 🏄‍♂️🚀

---

## Appendix A: Alternative Approaches if R3F Doesn't Work

### Fallback Plan 1: Pre-made Models + Limited Customization

- Use Blender to create 5-10 surfboard variants
- Export as GLTF/GLB files
- Load with R3F but no parametric generation
- Allow color/material changes only
- **Timeline:** 1-2 weeks

### Fallback Plan 2: 2D Visualization

- SVG-based top/side views
- CSS transforms for "3D-ish" effect
- Focus on specification selection over visualization
- **Timeline:** 1 week

### Fallback Plan 3: Embed External Service

- Use SketchFab embedded models
- Limited customization, focus on viewing
- Quick to implement but less flexible
- **Timeline:** 2-3 days

---

**Document Version:** 1.0  
**Last Updated:** December 30, 2025  
**Author:** GitHub Copilot  
**Status:** Ready for Implementation
