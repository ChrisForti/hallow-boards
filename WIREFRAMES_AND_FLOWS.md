# 3D Surfboard Modeler - Wireframes & Interaction Flows

## 1. Main Interface Layout (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                      │
│ [Logo] Hollow Boards                    [Save] [Export] [Share] [Account] │
└─────────────────────────────────────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────────────────────┬──────────────┐
│              │                                              │              │
│  TOOL PANEL  │         3D VIEWPORT                          │  PROPERTIES  │
│              │                                              │              │
│ [📏 Dims]    │                                              │  ┌─────────┐ │
│ [🏄 Shape]   │              ╱╲                              │  │ Length  │ │
│ [🔱 Fins]    │             ╱  ╲                             │  │ 6'2"    │ │
│ [🎨 Material]│            ╱    ╲                            │  │ ▬▬▬●─── │ │
│ [💾 Presets] │           ╱      ╲                           │  └─────────┘ │
│              │          ╱        ╲                          │              │
│              │         ╱          ╲                         │  ┌─────────┐ │
│              │        ╱            ╲                        │  │ Width   │ │
│              │       ▕              ▏                       │  │ 18.5"   │ │
│              │       ▕              ▏                       │  │ ▬▬●──── │ │
│              │       ▕              ▏                       │  └─────────┘ │
│              │       ▕              ▏                       │              │
│              │        ╲            ╱                        │  ┌─────────┐ │
│              │         ╲          ╱                         │  │ Thick   │ │
│              │          ╲        ╱                          │  │ 2.5"    │ │
│              │           ╲      ╱                           │  │ ▬●───── │ │
│              │            ╲    ╱                            │  └─────────┘ │
│              │             ╲  ╱                             │              │
│              │              ╲╱                              │  [Apply]    │
│              │                                              │  [Reset]    │
│              │                                              │              │
│              │                                              │              │
├──────────────┴──────────────────────────────────────────────┴──────────────┤
│ VIEW CONTROLS                                                               │
│ [⊙ Top] [⊕ Bottom] [⊟ Side] [⊞ 3/4] [⊠ Front]  🎥 [●] Capture Screenshot  │
│                                                                             │
│ [↻ Rotate] [± Zoom] [⊕ Pan]        Grid: [ON] Dimensions: [ON]           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Layout Breakdown:

- **Header**: 60px height, fixed position
- **Tool Panel**: 240px width, left sidebar
- **3D Viewport**: Flexible center area (min 600px width)
- **Properties Panel**: 320px width, right sidebar
- **View Controls**: 100px height, bottom docked

---

## 2. Customization Panel Design

### 2.1 Dimensions Panel

```
┌─────────────────────────────────────┐
│ 📏 DIMENSIONS                   [−] │
├─────────────────────────────────────┤
│                                     │
│ Length                              │
│ ┌─────────────────────────────────┐│
│ │ 5'0"  ▬▬▬▬▬▬▬●▬▬▬▬▬  10'0"      ││
│ │         6' 2"                    ││
│ └─────────────────────────────────┘│
│ [Quick: 5'6" 6'0" 6'4" 7'0" 8'0"] │
│                                     │
│ Width                               │
│ ┌─────────────────────────────────┐│
│ │ 16"   ▬▬▬▬▬▬●▬▬▬▬▬▬▬  24"       ││
│ │       18.5"                      ││
│ └─────────────────────────────────┘│
│                                     │
│ Thickness                           │
│ ┌─────────────────────────────────┐│
│ │ 2.0"  ▬▬▬●▬▬▬▬▬▬▬▬▬  3.5"       ││
│ │       2.5"                       ││
│ └─────────────────────────────────┘│
│                                     │
│ Volume: 32.4L (Calculated)          │
│                                     │
│ [Reset to Default]                  │
└─────────────────────────────────────┘
```

### 2.2 Shape Panel

```
┌─────────────────────────────────────┐
│ 🏄 SHAPE                        [−] │
├─────────────────────────────────────┤
│                                     │
│ Rocker Profile                      │
│ ┌─────────────────────────────────┐│
│ │ Nose: ▬▬▬▬●▬▬▬▬▬▬ (Medium)      ││
│ │ Tail: ▬▬▬▬▬●▬▬▬▬▬ (Low)         ││
│ └─────────────────────────────────┘│
│ [Preview Cross-Section]             │
│                                     │
│ Nose Shape                          │
│ ┌───────────────────────────────┐  │
│ │ ○ Rounded  ◉ Pointed  ○ Blunt│  │
│ └───────────────────────────────┘  │
│ Roundness: ▬▬▬▬▬●▬▬▬▬              │
│                                     │
│ Tail Shape                          │
│ ┌───────┬───────┬───────┬────────┐ │
│ │ [▭]   │ [╲╱]  │ [╱ ╲] │ [◊]   │ │
│ │Square │Round  │Swallow│Diamond │ │
│ │  ◉    │  ○    │   ○   │   ○   │ │
│ └───────┴───────┴───────┴────────┘ │
│                                     │
│ Rails                               │
│ ┌─────────────────────────────────┐│
│ │ ○ Boxy  ◉ Medium  ○ Tucked      ││
│ └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### 2.3 Fins Panel

```
┌─────────────────────────────────────┐
│ 🔱 FIN CONFIGURATION            [−] │
├─────────────────────────────────────┤
│                                     │
│ Setup                               │
│ ┌────────────────────────────────┐ │
│ │  [1]   [2]   [◉3]   [4]   [5] │ │
│ │ Single Twin Thruster Quad 5-Fin│ │
│ └────────────────────────────────┘ │
│                                     │
│ Fin System                          │
│ ┌────────────────────────────────┐ │
│ │ ◉ FCS II  ○ Futures  ○ Fixed  │ │
│ └────────────────────────────────┘ │
│                                     │
│ Fin Size (Center)                   │
│ ┌─────────────────────────────────┐│
│ │ XS    ▬▬▬●▬▬▬▬▬▬▬    XL         ││
│ │       M                          ││
│ └─────────────────────────────────┘│
│                                     │
│ Fin Position                        │
│ ┌─────────────────────────────────┐│
│ │ Forward ▬▬▬▬●▬▬▬▬ Back          ││
│ │         Center                   ││
│ └─────────────────────────────────┘│
│                                     │
│ Toe Angle: ▬▬▬●▬▬▬▬▬ (2.5°)        │
│ Cant Angle: ▬▬▬▬●▬▬▬▬ (5.0°)       │
│                                     │
│ [Preview Bottom View]               │
└─────────────────────────────────────┘
```

### 2.4 Materials Panel

```
┌─────────────────────────────────────┐
│ 🎨 MATERIALS & FINISH           [−] │
├─────────────────────────────────────┤
│                                     │
│ Core Material                       │
│ ┌────────────────────────────────┐ │
│ │ ◉ EPS Foam    ○ XPS Foam      │ │
│ │ ○ Balsa Wood  ○ Carbon Fiber  │ │
│ └────────────────────────────────┘ │
│                                     │
│ Laminate                            │
│ ┌────────────────────────────────┐ │
│ │ ◉ Fiberglass  ○ Epoxy         │ │
│ │ ○ Carbon      ○ Hybrid        │ │
│ └────────────────────────────────┘ │
│ Layers: [2▼]                        │
│                                     │
│ Deck Color                          │
│ ┌─────────────────────────────────┐│
│ │ [⬜][⬛][🟥][🟦][🟩][🟨][🟪] [+]││
│ │ Custom: [#FF5733] [Pick]        ││
│ └─────────────────────────────────┘│
│                                     │
│ Bottom Color                        │
│ ┌─────────────────────────────────┐│
│ │ [⬜][⬛][🟥][🟦][🟩][🟨][🟪] [+]││
│ │ Custom: [#33C3FF] [Pick]        ││
│ └─────────────────────────────────┘│
│                                     │
│ Finish                              │
│ ┌────────────────────────────────┐ │
│ │ ◉ Gloss  ○ Satin  ○ Matte     │ │
│ └────────────────────────────────┘ │
│                                     │
│ Artwork/Graphics                    │
│ [Upload Image] [Add Text]           │
│                                     │
│ Est. Weight: 5.8 lbs                │
└─────────────────────────────────────┘
```

---

## 3. User Flow Diagrams

### 3.1 Initial Load Flow

```
START
  │
  ├─→ Landing Page
  │     ├─ Hero with 3D Preview
  │     ├─ "Start Designing" CTA
  │     └─ Featured Presets Gallery
  │
  ├─→ Click "Start Designing"
  │     │
  │     ├─→ Choose Starting Point:
  │     │     ├─ [Blank Canvas] → Default Shortboard
  │     │     ├─ [Preset Template] → Gallery Modal
  │     │     └─ [Load Design] → File Upload
  │     │
  │     └─→ Load 3D Modeler Interface
  │           ├─ Initialize Three.js Scene
  │           ├─ Load Default/Selected Board
  │           ├─ Animate Camera to Front View
  │           └─ Show Quick Tutorial (first time)
  │
  └─→ Design Interface Ready
```

### 3.2 Customization Flow

```
DESIGN MODE
  │
  ├─→ Select Tool Category
  │     ├─ Dimensions → Properties Panel Updates
  │     ├─ Shape → Shape Panel Expands
  │     ├─ Fins → Fin Panel Expands
  │     └─ Materials → Material Panel Expands
  │
  ├─→ Adjust Parameter
  │     ├─ Drag Slider
  │     ├─ Type Value
  │     └─ Select Option
  │     │
  │     ├─→ Real-time Preview
  │     │     ├─ Update 3D Model (debounced 100ms)
  │     │     ├─ Recalculate Volume/Weight
  │     │     └─ Update Dimension Labels
  │     │
  │     └─→ Visual Feedback
  │           ├─ Highlight Changed Area
  │           ├─ Show "Calculating..."
  │           └─ Smooth Animation
  │
  ├─→ Change View
  │     ├─ Preset Views → Animate Camera
  │     ├─ Manual Rotation → Orbit Controls
  │     └─ Toggle Overlays → Show/Hide UI
  │
  └─→ Save/Export
        ├─ [Save Design] → Cloud/Local Storage
        ├─ [Export] → 3D File (STL/OBJ)
        ├─ [Screenshot] → PNG Image
        └─ [Share] → Generate Link
```

### 3.3 Detailed Dimension Adjustment Flow

```
User Adjusts Length Slider
  │
  ├─→ onInput Event (100ms debounce)
  │     │
  │     ├─→ Update State
  │     │     ├─ lengthValue = newValue
  │     │     ├─ Set isCalculating = true
  │     │     └─ Trigger Re-render
  │     │
  │     ├─→ Update 3D Geometry
  │     │     ├─ Scale Mesh Z-axis
  │     │     ├─ Recalculate Vertices
  │     │     ├─ Update Normal Vectors
  │     │     └─ Refresh Material
  │     │
  │     ├─→ Recalculate Metrics
  │     │     ├─ Volume = f(L, W, T)
  │     │     ├─ Weight = Volume × Density
  │     │     └─ Surface Area
  │     │
  │     ├─→ Update Dimension Overlays
  │     │     ├─ Redraw Length Arrow
  │     │     ├─ Update Label Position
  │     │     └─ Animate Label Value
  │     │
  │     └─→ Set isCalculating = false
  │
  └─→ Show Success Indicator (subtle green glow)
```

### 3.4 Save & Export Flow

```
User Clicks "Save"
  │
  ├─→ Check Auth Status
  │     ├─ [Logged In] → Continue
  │     └─ [Guest] → Show Modal
  │           ├─ "Sign in to save online"
  │           ├─ [Sign In] → Auth Flow
  │           └─ [Save Locally] → Browser Storage
  │
  ├─→ Save Design Data
  │     ├─ Serialize Configuration
  │     │   ├─ dimensions: {...}
  │     │   ├─ shape: {...}
  │     │   ├─ fins: {...}
  │     │   └─ materials: {...}
  │     │
  │     ├─ Generate Thumbnail
  │     │   ├─ Render Canvas to Image
  │     │   └─ Compress to 256x256
  │     │
  │     └─ Store Design
  │           ├─ [Cloud] → POST to API
  │           └─ [Local] → localStorage
  │
  ├─→ Show Success Toast
  │     "Design saved as 'My Board #3'"
  │     [View] [Share] [Dismiss]
  │
  └─→ Add to Recent Designs List
```

---

## 4. Mobile Layout

### 4.1 Mobile Portrait (≤768px)

```
┌───────────────────────────┐
│ ☰ Hollow Boards      [💾]│
├───────────────────────────┤
│                           │
│         3D VIEW           │
│                           │
│          ╱╲              │
│         ╱  ╲             │
│        ╱    ╲            │
│       ╱      ╲           │
│      ╱        ╲          │
│     ▕          ▏         │
│     ▕          ▏         │
│      ╲        ╱          │
│       ╲      ╱           │
│        ╲    ╱            │
│         ╲  ╱             │
│          ╲╱              │
│                           │
│ [Touch to rotate]         │
├───────────────────────────┤
│ View: [Top][Side][Front]  │
├───────────────────────────┤
│                           │
│ ▼ Dimensions              │
│   Length: 6'2"            │
│   ━━━━━●━━━━━            │
│                           │
│ ▼ Shape                   │
│   Tail: Square            │
│   Rocker: Medium          │
│                           │
│ ▼ Fins                    │
│   Setup: Thruster         │
│                           │
│ ▼ Materials               │
│   Core: EPS               │
│   Color: Blue             │
│                           │
├───────────────────────────┤
│ [Save] [Export] [Share]   │
└───────────────────────────┘
```

### 4.2 Mobile Interaction Patterns

**Touch Gestures:**

- **Single Finger Drag**: Rotate board (orbit)
- **Two Finger Pinch**: Zoom in/out
- **Two Finger Drag**: Pan camera
- **Double Tap**: Reset to front view
- **Long Press**: Toggle dimension overlays

**Accordion Panels:**

```
┌─────────────────────────────┐
│ ▼ DIMENSIONS            [×] │ ← Expanded
├─────────────────────────────┤
│ Length: 6'2"                │
│ ━━━━━━●━━━━━               │
│ [5'6"][6'0"][6'4"][7'0"]   │
│                             │
│ Width: 18.5"                │
│ ━━━━●━━━━━━                │
│                             │
│ Thickness: 2.5"             │
│ ━━●━━━━━━━━                │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ▶ SHAPE                     │ ← Collapsed
└─────────────────────────────┘
┌─────────────────────────────┐
│ ▶ FINS                      │
└─────────────────────────────┘
```

**Bottom Sheet for Tools:**

```
Tap on Hamburger Menu:

┌───────────────────────────┐
│ [Background Dimmed]       │
│                           │
│                           │
│                           │
└───────────────────────────┘
┌───────────────────────────┐ ← Slides up
│ ═══════                   │   from bottom
│                           │
│ 📏 Dimensions             │
│ 🏄 Shape                  │
│ 🔱 Fins                   │
│ 🎨 Materials              │
│ 💾 Presets                │
│ ⚙️  Settings              │
│                           │
│ [My Designs] [Export]     │
│                           │
│ [Tap outside to close]    │
└───────────────────────────┘
```

---

## 5. Component Specifications

### 5.1 Core Component Structure

```typescript
// Component Hierarchy
App
├── Header
│   ├── Logo
│   ├── SaveButton
│   ├── ExportButton
│   ├── ShareButton
│   └── UserMenu
│
├── DesignInterface
│   ├── ToolPanel (Desktop only)
│   │   ├── ToolButton[]
│   │   └── PresetsList
│   │
│   ├── ViewportContainer
│   │   ├── ThreeJSCanvas
│   │   │   ├── Scene
│   │   │   ├── Camera (Perspective)
│   │   │   ├── OrbitControls
│   │   │   ├── Lights (3x)
│   │   │   ├── SurfboardMesh
│   │   │   └── HelperGrid
│   │   │
│   │   ├── DimensionOverlay
│   │   │   ├── LengthLabel
│   │   │   ├── WidthLabel
│   │   │   └── ThicknessLabel
│   │   │
│   │   └── LoadingIndicator
│   │
│   ├── PropertiesPanel (Desktop) / BottomSheet (Mobile)
│   │   ├── DimensionsPanel
│   │   │   ├── SliderInput (length)
│   │   │   ├── SliderInput (width)
│   │   │   ├── SliderInput (thickness)
│   │   │   ├── QuickSelectButtons
│   │   │   └── VolumeDisplay
│   │   │
│   │   ├── ShapePanel
│   │   │   ├── RockerControls
│   │   │   ├── NoseShapeSelector
│   │   │   ├── TailShapeSelector
│   │   │   └── RailSelector
│   │   │
│   │   ├── FinsPanel
│   │   │   ├── FinSetupSelector
│   │   │   ├── FinSystemSelector
│   │   │   ├── FinSizeSlider
│   │   │   └── FinPositionControls
│   │   │
│   │   └── MaterialsPanel
│   │       ├── CoreMaterialSelector
│   │       ├── LaminateSelector
│   │       ├── ColorPicker (deck)
│   │       ├── ColorPicker (bottom)
│   │       └── FinishSelector
│   │
│   └── ViewControls
│       ├── ViewPresetButtons
│       ├── ManualControls
│       └── ToggleButtons
│
└── Footer
    ├── SocialLinks
    └── Copyright
```

### 5.2 Key Component Props & State

#### ThreeJSCanvas Component

```typescript
interface ThreeJSCanvasProps {
  boardConfig: BoardConfiguration;
  onModelUpdate: (mesh: Mesh) => void;
  viewMode: "orbit" | "fixed";
  showDimensions: boolean;
  showGrid: boolean;
}

// Internal State
{
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  surfboardMesh: THREE.Mesh;
  isRendering: boolean;
  cameraPosition: Vector3;
}
```

#### SliderInput Component

```typescript
interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  debounceMs?: number; // Default: 100
  showQuickSelect?: boolean;
  quickValues?: number[];
}
```

#### ShapeSelector Component

```typescript
interface ShapeSelectorProps {
  options: ShapeOption[];
  selected: string;
  onChange: (shapeId: string) => void;
  renderMode: "icons" | "thumbnails";
  columns?: number; // Grid layout
}

interface ShapeOption {
  id: string;
  name: string;
  icon: ReactNode;
  thumbnail?: string;
  description?: string;
}
```

### 5.3 Responsive Breakpoints

```typescript
// Tailwind breakpoints
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape / Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
};

// Component behavior
{
  mobile: '<768px',
  // - Single column layout
  // - Bottom sheet for controls
  // - Touch gestures enabled
  // - Simplified controls

  tablet: '768px-1024px',
  // - Two column layout (viewport + panels)
  // - Collapsible sidebars
  // - Touch + mouse support

  desktop: '>1024px',
  // - Three column layout
  // - Fixed sidebars
  // - Full feature set
  // - Keyboard shortcuts
}
```

### 5.4 Position & Behavior Specs

#### Header Component

- **Position**: Fixed top, z-index: 1000
- **Height**: 60px
- **Background**: White with shadow
- **Behavior**:
  - Scrolls out of view on mobile when scrolling down
  - Reappears on scroll up
  - Buttons disable during calculations

#### Tool Panel (Desktop)

- **Position**: Fixed left, below header
- **Width**: 240px (collapsed: 64px)
- **Background**: Gray-50
- **Behavior**:
  - Toggleable collapse/expand
  - Active tool highlighted
  - Tooltips on hover
  - Keyboard navigation (1-5 keys)

#### 3D Viewport

- **Position**: Center, flexible
- **Min Width**: 600px desktop, 100vw mobile
- **Aspect Ratio**: Maintains board proportions
- **Behavior**:
  - Resize handler with debounce
  - Performance mode on low FPS
  - Loading skeleton while initializing
  - Error boundary for WebGL failures

#### Properties Panel (Desktop)

- **Position**: Fixed right, below header
- **Width**: 320px (collapsible to 0)
- **Scroll**: Independent scroll within panel
- **Behavior**:
  - Accordion sections (one open at a time)
  - Smooth expand/collapse animations
  - Form validation on input fields
  - Real-time save indicator

#### View Controls (Desktop)

- **Position**: Fixed bottom, above footer
- **Height**: 100px
- **Background**: White with top border
- **Behavior**:
  - Auto-hide after 3s of inactivity
  - Show on mouse move near bottom
  - Highlight active view preset

#### Bottom Sheet (Mobile)

- **Position**: Fixed bottom, z-index: 999
- **Initial Height**: 120px (collapsed)
- **Max Height**: 80vh (expanded)
- **Behavior**:
  - Drag handle for expand/collapse
  - Swipe down to dismiss
  - Backdrop blur when expanded
  - Maintains scroll position per section

---

## 6. UX Best Practices

### 6.1 3D Interface Patterns

#### Camera Controls

```
Best Practices:
✓ Default to 3/4 view showing most features
✓ Smooth easing on camera transitions (0.5s)
✓ Limit zoom range (min: 1.5x, max: 0.3x board size)
✓ Auto-frame board when dimensions change significantly
✓ Orbit center locked to board center point
✓ Damping enabled for natural feel (dampingFactor: 0.05)

Avoid:
✗ Starting in extreme close-up or far view
✗ Allowing camera to go inside the mesh
✗ Instant camera jumps (no transitions)
✗ Unlimited zoom causing disorientation
```

#### Visual Feedback

```
Real-time Updates:
• Mesh updates: <100ms from slider change
• Visual indicator: Subtle outline pulse during calculation
• Progress: Linear loader in header for heavy operations
• Success: Green glow fade (500ms) after successful update

Error States:
• Invalid input: Red border + shake animation
• WebGL failure: Fallback to 2D wireframe view
• Network error: Retry button + error message
• Geometry error: Restore last valid state + warning
```

#### Dimension Overlays

```
Display Rules:
• Show when: Hovering over viewport OR editing dimensions
• Hide when: Customizing materials/colors (not relevant)
• Update: Animate numbers smoothly (CountUp effect)
• Position: Dynamic - avoid overlapping board
• Style: High contrast with drop shadow for readability

Implementation:
<DimensionLabel
  value={length}
  unit="inches"
  position={[0, 0, boardLength/2]}
  visible={showDimensions}
  orientation="horizontal"
  animate={true}
/>
```

### 6.2 Feedback Mechanisms

#### Loading States

```typescript
// Skeleton loading for 3D viewport
<ViewportContainer>
  {isLoading ? (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-96 w-full" />
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded" />
        <div className="bg-gray-300 h-4 w-1/2 rounded" />
      </div>
    </div>
  ) : (
    <Canvas />
  )}
</ViewportContainer>

// Processing indicator
<div className="absolute top-4 right-4">
  {isCalculating && (
    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
      <Spinner />
      <span>Updating model...</span>
    </div>
  )}
</div>
```

#### Toast Notifications

```typescript
// Success messages
toast.success("Design saved successfully!", {
  duration: 3000,
  icon: "✓",
  action: {
    label: "View",
    onClick: () => navigate("/my-designs"),
  },
});

// Error messages
toast.error("Failed to export design", {
  duration: 5000,
  action: {
    label: "Retry",
    onClick: () => retryExport(),
  },
});

// Info messages
toast.info("Pro tip: Use number keys 1-5 to switch tools", {
  duration: 4000,
  dismissible: true,
});
```

#### Validation Feedback

```typescript
// Input validation
<SliderInput
  value={length}
  onChange={handleLengthChange}
  validation={{
    min: 60, // 5 feet
    max: 120, // 10 feet
    message: "Length must be between 5' and 10'",
  }}
  // Visual states:
  // - Invalid: red border + error message
  // - Warning: yellow border (approaching limits)
  // - Valid: normal state
/>
```

### 6.3 Accessibility

#### Keyboard Navigation

```
Global Shortcuts:
• Esc         - Close panels/modals
• Ctrl/Cmd+S  - Save design
• Ctrl/Cmd+E  - Export
• Ctrl/Cmd+Z  - Undo
• Ctrl/Cmd+Y  - Redo
• Space       - Reset camera view

Tool Selection:
• 1 - Dimensions
• 2 - Shape
• 3 - Fins
• 4 - Materials
• 5 - Presets

View Controls:
• T - Top view
• S - Side view
• B - Bottom view
• F - Front view
• G - Toggle grid
• D - Toggle dimensions

Slider Controls:
• Tab       - Focus next slider
• Arrow Keys - Fine adjust (±0.1)
• Shift+Arrow - Coarse adjust (±1.0)
• Home/End  - Min/Max value
```

#### Screen Reader Support

```typescript
// Semantic HTML
<nav aria-label="Design tools">
  <button
    aria-label="Dimensions tool"
    aria-pressed={activeTool === 'dimensions'}
    aria-describedby="dims-description"
  >
    <Icon />
    Dimensions
  </button>
</nav>

// Live regions for dynamic updates
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {isCalculating ? "Calculating board dimensions" : "Board updated"}
</div>

// Form labels
<label htmlFor="length-slider">
  Board Length
  <span className="text-sm text-gray-500">(5'0" - 10'0")</span>
</label>
<input
  id="length-slider"
  type="range"
  aria-valuemin={60}
  aria-valuemax={120}
  aria-valuenow={length}
  aria-valuetext={`${formatLength(length)}`}
/>
```

#### Focus Management

```typescript
// Trap focus in modals
<Modal onClose={handleClose}>
  <FocusTrap>
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">Save Design</h2>
      {/* Content */}
      <button onClick={handleClose}>Cancel</button>
      <button onClick={handleSave}>Save</button>
    </div>
  </FocusTrap>
</Modal>;

// Restore focus after actions
const buttonRef = useRef<HTMLButtonElement>(null);

const handleAction = () => {
  performAction();
  buttonRef.current?.focus(); // Return focus
};
```

#### Color Contrast

```css
/* WCAG AA compliance (4.5:1 minimum) */
:root {
  --text-primary: #1a1a1a; /* 16:1 on white */
  --text-secondary: #4a4a4a; /* 9:1 on white */
  --link-color: #0066cc; /* 7:1 on white */
  --error-color: #c70000; /* 4.5:1 on white */
  --success-color: #008500; /* 4.5:1 on white */
}

/* Focus indicators */
*:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 6.4 Performance Optimization

#### 3D Rendering

```typescript
// LOD (Level of Detail) for complex geometry
const surfboardLOD = new THREE.LOD();
surfboardLOD.addLevel(highDetailMesh, 0); // < 10 units
surfboardLOD.addLevel(mediumDetailMesh, 10); // 10-30 units
surfboardLOD.addLevel(lowDetailMesh, 30); // > 30 units

// Throttle render loop
const renderLoop = throttle(() => {
  renderer.render(scene, camera);
}, 16); // ~60fps

// Debounce expensive calculations
const updateGeometry = debounce((config: BoardConfig) => {
  rebuildMesh(config);
  recalculateVolume(config);
}, 100);

// Disable shadows on mobile
const enableShadows = window.innerWidth > 768;
renderer.shadowMap.enabled = enableShadows;
```

#### Asset Loading

```typescript
// Lazy load 3D models
const SurfboardModel = lazy(() => import("./models/Surfboard"));

// Preload critical assets
useEffect(() => {
  Promise.all([
    loadTexture("/textures/fiberglass.jpg"),
    loadTexture("/textures/foam.jpg"),
    loadFont("/fonts/Roboto.json"),
  ]).then(() => setAssetsReady(true));
}, []);

// Progressive image loading
<img
  src={lowResPreview}
  data-src={highResImage}
  className="blur-sm transition-all duration-300"
  onLoad={(e) => {
    e.currentTarget.src = e.currentTarget.dataset.src!;
    e.currentTarget.classList.remove("blur-sm");
  }}
/>;
```

#### State Management

```typescript
// Memoize expensive calculations
const boardVolume = useMemo(
  () => calculateVolume(length, width, thickness),
  [length, width, thickness]
);

// Prevent unnecessary re-renders
const MemoizedCanvas = memo(ThreeJSCanvas, (prev, next) => {
  return prev.boardConfig === next.boardConfig;
});

// Virtualize long lists (presets)
<VirtualList
  height={600}
  itemCount={presets.length}
  itemSize={120}
  renderItem={({ index, style }) => (
    <PresetCard preset={presets[index]} style={style} />
  )}
/>;
```

---

## 7. Implementation Guide

### 7.1 Tech Stack Setup

```bash
# Project initialization
npm create vite@latest hollow-boards-3d -- --template react-ts
cd hollow-boards-3d

# Core dependencies
npm install react react-dom
npm install three @react-three/fiber @react-three/drei
npm install @react-three/postprocessing

# UI & Styling
npm install tailwindcss postcss autoprefixer
npm install clsx tailwind-merge
npm install lucide-react # Icons

# State & Forms
npm install zustand
npm install react-hook-form zod

# Utilities
npm install lodash-es
npm install @types/lodash-es

# Development
npm install -D @types/three
npm install -D @typescript-eslint/parser
```

### 7.2 Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx              # Main Three.js scene
│   │   ├── SurfboardMesh.tsx      # Board geometry
│   │   ├── Lighting.tsx           # Light setup
│   │   ├── Controls.tsx           # Camera controls
│   │   ├── DimensionOverlay.tsx   # Measurement labels
│   │   └── helpers/
│   │       ├── GridHelper.tsx
│   │       └── AxisHelper.tsx
│   │
│   ├── panels/
│   │   ├── DimensionsPanel.tsx
│   │   ├── ShapePanel.tsx
│   │   ├── FinsPanel.tsx
│   │   ├── MaterialsPanel.tsx
│   │   └── PresetsPanel.tsx
│   │
│   ├── controls/
│   │   ├── SliderInput.tsx
│   │   ├── ColorPicker.tsx
│   │   ├── ShapeSelector.tsx
│   │   └── ToggleGroup.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── ToolPanel.tsx
│   │   ├── ViewportContainer.tsx
│   │   ├── PropertiesPanel.tsx
│   │   ├── ViewControls.tsx
│   │   ├── BottomSheet.tsx        # Mobile
│   │   └── Footer.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Toast.tsx
│       ├── Modal.tsx
│       ├── Spinner.tsx
│       └── Tooltip.tsx
│
├── lib/
│   ├── geometry/
│   │   ├── surfboardGenerator.ts  # Generate mesh
│   │   ├── rockerProfile.ts       # Rocker curves
│   │   ├── railProfile.ts         # Rail shapes
│   │   └── volumeCalculator.ts    # Physics calculations
│   │
│   ├── store/
│   │   ├── boardStore.ts          # Zustand store
│   │   ├── uiStore.ts             # UI state
│   │   └── historyStore.ts        # Undo/redo
│   │
│   ├── hooks/
│   │   ├── useSurfboard.ts
│   │   ├── useViewport.ts
│   │   └── useKeyboardShortcuts.ts
│   │
│   └── utils/
│       ├── debounce.ts
│       ├── formatters.ts
│       └── validation.ts
│
├── types/
│   ├── board.ts
│   ├── geometry.ts
│   └── ui.ts
│
└── styles/
    ├── globals.css
    └── animations.css
```

### 7.3 Core Implementation Examples

#### Board Configuration Store (Zustand)

```typescript
// lib/store/boardStore.ts
import create from "zustand";
import { BoardConfiguration } from "@/types/board";

interface BoardStore {
  config: BoardConfiguration;
  history: BoardConfiguration[];
  historyIndex: number;

  // Actions
  updateDimensions: (dims: Partial<Dimensions>) => void;
  updateShape: (shape: Partial<Shape>) => void;
  updateFins: (fins: Partial<FinConfig>) => void;
  updateMaterials: (materials: Partial<Materials>) => void;

  // History
  undo: () => void;
  redo: () => void;

  // Persistence
  saveDesign: () => Promise<void>;
  loadDesign: (id: string) => Promise<void>;
}

export const useBoardStore = create<BoardStore>((set, get) => ({
  config: getDefaultConfig(),
  history: [getDefaultConfig()],
  historyIndex: 0,

  updateDimensions: (dims) => {
    const current = get().config;
    const updated = {
      ...current,
      dimensions: { ...current.dimensions, ...dims },
    };

    set((state) => ({
      config: updated,
      history: [...state.history.slice(0, state.historyIndex + 1), updated],
      historyIndex: state.historyIndex + 1,
    }));
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      set({
        config: history[historyIndex - 1],
        historyIndex: historyIndex - 1,
      });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      set({
        config: history[historyIndex + 1],
        historyIndex: historyIndex + 1,
      });
    }
  },

  saveDesign: async () => {
    const config = get().config;
    const thumbnail = await captureThumbnail();

    await fetch("/api/designs", {
      method: "POST",
      body: JSON.stringify({ config, thumbnail }),
    });
  },
}));
```

#### Surfboard Mesh Generator

```typescript
// lib/geometry/surfboardGenerator.ts
import * as THREE from "three";
import { BoardConfiguration } from "@/types/board";

export function generateSurfboardMesh(config: BoardConfiguration): THREE.Mesh {
  const { dimensions, shape } = config;

  // Create outline curve
  const outline = createOutlineCurve(
    dimensions.length,
    dimensions.width,
    shape.noseShape,
    shape.tailShape
  );

  // Create rocker profile
  const rocker = createRockerProfile(
    dimensions.length,
    shape.rockerNose,
    shape.rockerTail
  );

  // Create rail profile
  const rail = createRailProfile(dimensions.thickness, shape.railType);

  // Generate geometry using lofting
  const geometry = loftSurfboard(outline, rocker, rail);

  // Create material
  const material = createMaterial(config.materials);

  // Create mesh
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
}

function createOutlineCurve(
  length: number,
  width: number,
  noseShape: NoseShape,
  tailShape: TailShape
): THREE.Curve<THREE.Vector2> {
  // Generate points along half the outline
  const points: THREE.Vector2[] = [];
  const segments = 50;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments; // 0 to 1, nose to tail
    const z = (t - 0.5) * length; // Center at origin

    // Calculate width at this position
    let w = calculateWidthAtPosition(t, width, noseShape, tailShape);

    points.push(new THREE.Vector2(z, w));
  }

  return new THREE.SplineCurve(points);
}

function calculateWidthAtPosition(
  t: number,
  maxWidth: number,
  noseShape: NoseShape,
  tailShape: TailShape
): number {
  // Bezier-like curve for smooth width distribution
  const noseInfluence = Math.pow(1 - t, 2);
  const tailInfluence = Math.pow(t, 2);
  const middleInfluence = 2 * t * (1 - t);

  const noseWidth =
    noseShape === "pointed" ? 0.1 : noseShape === "rounded" ? 0.3 : 0.5;
  const tailWidth =
    tailShape === "pintail" ? 0.4 : tailShape === "squash" ? 0.7 : 0.8;

  return (
    maxWidth *
    (noseInfluence * noseWidth +
      middleInfluence * 1.0 +
      tailInfluence * tailWidth)
  );
}
```

#### Main 3D Scene Component

```typescript
// components/3d/Scene.tsx
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { SurfboardMesh } from "./SurfboardMesh";
import { Lighting } from "./Lighting";
import { DimensionOverlay } from "./DimensionOverlay";
import { useBoardStore } from "@/lib/store/boardStore";

export function Scene() {
  const config = useBoardStore((state) => state.config);
  const showDimensions = useUIStore((state) => state.showDimensions);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 2, 5], fov: 50 }}
      gl={{ antialias: true }}
    >
      {/* Environment */}
      <color attach="background" args={["#f0f0f0"]} />
      <fog attach="fog" args={["#f0f0f0", 10, 50]} />

      {/* Lighting */}
      <Lighting />

      {/* Board */}
      <SurfboardMesh config={config} />

      {/* Overlays */}
      {showDimensions && <DimensionOverlay config={config} />}

      {/* Controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Environment map for reflections */}
      <Environment preset="studio" />
    </Canvas>
  );
}
```

#### Slider Input Component

```typescript
// components/controls/SliderInput.tsx
import { useState, useCallback } from "react";
import { debounce } from "lodash-es";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  quickValues?: number[];
}

export function SliderInput({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  quickValues,
}: SliderInputProps) {
  const [localValue, setLocalValue] = useState(value);

  // Debounced change handler
  const debouncedChange = useCallback(
    debounce((val: number) => onChange(val), 100),
    [onChange]
  );

  const handleChange = (val: number) => {
    setLocalValue(val);
    debouncedChange(val);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-mono text-gray-900">
          {localValue}
          {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />

      {quickValues && (
        <div className="flex gap-2">
          {quickValues.map((val) => (
            <button
              key={val}
              onClick={() => handleChange(val)}
              className={`px-2 py-1 text-xs rounded transition ${
                localValue === val
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {val}
              {unit}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 7.4 Responsive Layout Implementation

```typescript
// components/layout/DesignInterface.tsx
import { useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { ToolPanel } from "./ToolPanel";
import { ViewportContainer } from "./ViewportContainer";
import { PropertiesPanel } from "./PropertiesPanel";
import { BottomSheet } from "./BottomSheet";
import { ViewControls } from "./ViewControls";

export function DesignInterface() {
  const [activePanel, setActivePanel] = useState<string>("dimensions");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  return (
    <div className="flex h-[calc(100vh-60px)]">
      {/* Desktop: Three column layout */}
      {!isMobile && !isTablet && (
        <>
          <ToolPanel activePanel={activePanel} onPanelChange={setActivePanel} />
          <ViewportContainer className="flex-1" />
          <PropertiesPanel activePanel={activePanel} />
        </>
      )}

      {/* Tablet: Two column layout */}
      {isTablet && (
        <>
          <ViewportContainer className="flex-1" />
          <PropertiesPanel activePanel={activePanel} collapsible />
        </>
      )}

      {/* Mobile: Full screen with bottom sheet */}
      {isMobile && (
        <>
          <ViewportContainer className="flex-1" />
          <BottomSheet activePanel={activePanel}>
            <PropertiesPanel activePanel={activePanel} />
          </BottomSheet>
        </>
      )}

      {/* View controls (all devices) */}
      <ViewControls className="absolute bottom-0 left-0 right-0" />
    </div>
  );
}
```

### 7.5 Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        board: {
          foam: "#f5f5f0",
          fiberglass: "#e8f4f8",
          carbon: "#1a1a1a",
        },
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "fade-in": "fadeIn 0.2s ease-in",
        "pulse-subtle": "pulseSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
```

### 7.6 Testing Strategy

```typescript
// __tests__/geometry/surfboardGenerator.test.ts
import { generateSurfboardMesh } from "@/lib/geometry/surfboardGenerator";
import { defaultConfig } from "@/lib/constants";

describe("Surfboard Generator", () => {
  it("generates valid mesh from config", () => {
    const mesh = generateSurfboardMesh(defaultConfig);

    expect(mesh).toBeInstanceOf(THREE.Mesh);
    expect(mesh.geometry.attributes.position).toBeDefined();
    expect(mesh.material).toBeDefined();
  });

  it("calculates correct volume", () => {
    const config = {
      ...defaultConfig,
      dimensions: { length: 72, width: 18.5, thickness: 2.5 },
    };

    const volume = calculateVolume(config);
    expect(volume).toBeCloseTo(32.4, 1); // 32.4L ±0.1
  });

  it("handles edge cases gracefully", () => {
    const extremeConfig = {
      ...defaultConfig,
      dimensions: { length: 240, width: 36, thickness: 6 }, // 20ft monster
    };

    expect(() => generateSurfboardMesh(extremeConfig)).not.toThrow();
  });
});

// __tests__/components/SliderInput.test.tsx
import { render, fireEvent, waitFor } from "@testing-library/react";
import { SliderInput } from "@/components/controls/SliderInput";

describe("SliderInput", () => {
  it("debounces onChange calls", async () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <SliderInput
        label="Length"
        value={72}
        min={60}
        max={120}
        step={1}
        unit='"'
        onChange={onChange}
      />
    );

    const slider = getByRole("slider");

    // Rapid changes
    fireEvent.change(slider, { target: { value: 73 } });
    fireEvent.change(slider, { target: { value: 74 } });
    fireEvent.change(slider, { target: { value: 75 } });

    // Should only call once after debounce
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
    expect(onChange).toHaveBeenCalledWith(75);
  });
});
```

---

## 8. Next Steps & Recommendations

### Phase 1: Foundation (Week 1-2)

- [ ] Set up React + TypeScript + Tailwind project
- [ ] Implement basic Three.js scene with camera controls
- [ ] Create responsive layout shell (header, panels, viewport)
- [ ] Build core UI components (Button, Slider, etc.)

### Phase 2: Core Features (Week 3-4)

- [ ] Implement surfboard geometry generator
- [ ] Add dimension controls with real-time updates
- [ ] Create shape customization (nose, tail, rails)
- [ ] Implement material system and color picker

### Phase 3: Advanced Features (Week 5-6)

- [ ] Add fin configuration system
- [ ] Implement view presets and camera animations
- [ ] Create dimension overlay system
- [ ] Add save/load functionality

### Phase 4: Polish & Optimization (Week 7-8)

- [ ] Mobile responsive optimization
- [ ] Performance tuning (LOD, throttling)
- [ ] Accessibility improvements
- [ ] User testing and refinements

### Recommended Tools & Libraries

- **3D Visualization**: Three.js, React Three Fiber, Drei
- **State Management**: Zustand (lightweight, perfect for 3D apps)
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Headless UI or Radix UI
- **Animations**: Framer Motion for UI, Three.js for 3D
- **Icons**: Lucide React (tree-shakeable)
- **Testing**: Vitest + React Testing Library

### Performance Targets

- **Initial Load**: < 3s on 3G
- **3D Render**: 60fps on desktop, 30fps on mobile
- **Interaction Response**: < 100ms for slider changes
- **Bundle Size**: < 500KB initial, < 2MB total

---

**Document Version**: 1.0  
**Last Updated**: December 30, 2025  
**Author**: Design System for Hollow Boards 3D Modeler
