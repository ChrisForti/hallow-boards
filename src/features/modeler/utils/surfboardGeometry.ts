import * as THREE from "three";
import type { BoardConfiguration } from "../../../types/surfboard";
import {
  generateRockerCurve,
  getWidthAtPosition,
} from "../utils/surfboardMath";

/**
 * Generate complete 3D surfboard geometry from configuration
 */
export function generateSurfboardGeometry(
  config: BoardConfiguration
): THREE.BufferGeometry {
  const { dimensions } = config;

  // Get rocker curve
  const rockerCurve = generateRockerCurve(dimensions);

  // Create cross-sections along the length
  const sections = 30;
  const thicknessSegments = 20;
  const geometry = new THREE.BufferGeometry();

  const vertices: number[] = [];
  const indices: number[] = [];
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
  const verticesPerSection = thicknessSegments + 1;
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
