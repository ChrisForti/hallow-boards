import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import type { BoardConfiguration } from "../../../types/surfboard";
import SurfboardModel from "./SurfboardModel";

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
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.5} />

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
