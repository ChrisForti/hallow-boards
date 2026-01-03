import { useState } from "react";
import Header from "../components/Header";
import SurfboardViewer from "../features/modeler/components/SurfboardViewer";
import ConfigPanel from "../features/modeler/components/ConfigPanel";
import type { BoardConfiguration } from "../types/surfboard";
import { DEFAULT_BOARD } from "../types/surfboard";

export default function Modeler() {
  const [boardConfig, setBoardConfig] =
    useState<BoardConfiguration>(DEFAULT_BOARD);

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header for navigation */}
      <Header />

      {/* Main Modeler Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Templates (future) */}
        <div className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 p-4">
          <h2 className="text-white text-xl font-bold mb-4">Board Templates</h2>
          <div className="space-y-2">
            <button
              onClick={() => setBoardConfig(DEFAULT_BOARD)}
              className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
            >
              Default Shortboard
            </button>
            <p className="text-white/50 text-sm mt-4">
              More templates coming soon...
            </p>
          </div>
        </div>

        {/* Center - 3D Viewer */}
        <div className="flex-1">
          <SurfboardViewer boardConfig={boardConfig} />
        </div>

        {/* Right Sidebar - Configuration Panel */}
        <div className="w-96">
          <ConfigPanel config={boardConfig} onChange={setBoardConfig} />
        </div>
      </div>
    </div>
  );
}
