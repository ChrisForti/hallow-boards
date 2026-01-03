import { useRef, useMemo } from "react";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import type { BoardConfiguration } from "../../../types/surfboard";
import { generateSurfboardGeometry } from "../utils/surfboardGeometry";

interface SurfboardModelProps {
  config: BoardConfiguration;
}

export default function SurfboardModel({ config }: SurfboardModelProps) {
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
        color={config.material.color}
        roughness={
          config.material.finish === "glossy"
            ? 0.1
            : config.material.finish === "matte"
            ? 0.8
            : 0.4
        }
        metalness={0.1}
        transparent={config.material.transparency < 1}
        opacity={config.material.transparency}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}
