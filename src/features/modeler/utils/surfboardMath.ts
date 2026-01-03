import { Vector2, Vector3, CatmullRomCurve3 } from "three";
import type { BoardDimensions } from "../../../types/surfboard";

/**
 * Generate 2D outline points for surfboard shape
 */
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
      // Middle section (widest point)
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

/**
 * Generate rocker curve (bottom curve of board)
 */
export function generateRockerCurve(dims: BoardDimensions): CatmullRomCurve3 {
  const { length, noseRocker, tailRocker } = dims;
  const lengthInches = length * 12;

  // Create rocker curve with smooth transitions
  const points = [
    new Vector3(-lengthInches / 2, -noseRocker, 0), // Nose (lifted)
    new Vector3(-lengthInches / 4, -noseRocker / 2, 0), // Quarter point
    new Vector3(0, 0, 0), // Center (flat/lowest)
    new Vector3(lengthInches / 4, -tailRocker / 2, 0), // Quarter point
    new Vector3(lengthInches / 2, -tailRocker, 0), // Tail (lifted)
  ];

  return new CatmullRomCurve3(points);
}

/**
 * Get width at specific position along board length
 */
export function getWidthAtPosition(t: number, dims: BoardDimensions): number {
  const { width, noseWidth, tailWidth } = dims;

  if (t < 0.3) {
    // Nose section
    return mix(noseWidth / 2, width / 2, easeInOutCubic(t / 0.3));
  } else if (t > 0.7) {
    // Tail section
    return mix(width / 2, tailWidth / 2, easeInOutCubic((t - 0.7) / 0.3));
  }
  // Middle section
  return width / 2;
}

/**
 * Calculate board volume in liters (approximate)
 */
export function calculateVolume(dims: BoardDimensions): number {
  const { length, width, thickness } = dims;
  const lengthInches = length * 12;

  // Simplified volume calculation (cone approximation)
  // Real calculation would integrate cross-sections
  const volume = lengthInches * width * thickness * 0.4; // 40% of rectangular prism

  // Convert cubic inches to liters
  return volume * 0.0163871;
}

/**
 * Linear interpolation between two values
 */
export function mix(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t;
}

/**
 * Smooth easing function for natural curves
 */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
