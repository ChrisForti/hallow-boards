import type { TailShape, FinConfiguration } from "../../../types/surfboard";
import { calculateVolume } from "../utils/surfboardMath";
import { useBoardStore } from "../store/boardStore";

export default function ConfigPanel() {
  const { config, updateDimensions, setConfig } = useBoardStore();

  const updateDimension = (
    key: keyof typeof config.dimensions,
    value: number
  ) => {
    updateDimensions({ [key]: value });
  };

  const volume = calculateVolume(config.dimensions);

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-6 overflow-y-auto overflow-x-hidden h-full">
      <h2 className="text-2xl font-bold text-gray-900">Customize Your Board</h2>

      {/* Volume Display */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg">
        <div className="text-sm font-medium">Estimated Volume</div>
        <div className="text-3xl font-bold">{volume.toFixed(1)}L</div>
      </div>

      {/* Dimensions */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Dimensions</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Nose Width: {config.dimensions.noseWidth.toFixed(1)}"
            </label>
            <input
              type="range"
              min="10"
              max="16"
              step="0.5"
              value={config.dimensions.noseWidth}
              onChange={(e) =>
                updateDimension("noseWidth", parseFloat(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Tail Width: {config.dimensions.tailWidth.toFixed(1)}"
            </label>
            <input
              type="range"
              min="12"
              max="18"
              step="0.5"
              value={config.dimensions.tailWidth}
              onChange={(e) =>
                updateDimension("tailWidth", parseFloat(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Nose Rocker: {config.dimensions.noseRocker.toFixed(1)}"
            </label>
            <input
              type="range"
              min="3"
              max="7"
              step="0.25"
              value={config.dimensions.noseRocker}
              onChange={(e) =>
                updateDimension("noseRocker", parseFloat(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Tail Rocker: {config.dimensions.tailRocker.toFixed(1)}"
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.25"
              value={config.dimensions.tailRocker}
              onChange={(e) =>
                updateDimension("tailRocker", parseFloat(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Tail Shape */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Tail Shape</h3>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              "squash",
              "round",
              "pin",
              "swallow",
              "diamond",
              "square",
            ] as TailShape[]
          ).map((shape) => (
            <button
              key={shape}
              onClick={() => setConfig({ ...config, tailShape: shape })}
              className={`px-4 py-2 rounded capitalize font-medium transition-colors ${
                config.tailShape === shape
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {shape}
            </button>
          ))}
        </div>
      </section>

      {/* Fin Configuration */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Fin Setup</h3>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              "single",
              "twin",
              "thruster",
              "quad",
              "five-fin",
            ] as FinConfiguration[]
          ).map((fin) => (
            <button
              key={fin}
              onClick={() => setConfig({ ...config, finConfig: fin })}
              className={`px-4 py-2 rounded capitalize font-medium transition-colors ${
                config.finConfig === fin
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {fin.replace("-", " ")}
            </button>
          ))}
        </div>
      </section>

      {/* Color Picker */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Color</h3>
        <input
          type="color"
          value={config.material.color}
          onChange={(e) =>
            setConfig({
              ...config,
              material: { ...config.material, color: e.target.value },
            })
          }
          className="w-full h-12 rounded cursor-pointer border-2 border-gray-300"
        />
      </section>

      {/* Finish */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Finish</h3>
        <div className="grid grid-cols-3 gap-2">
          {(["glossy", "matte", "satin"] as const).map((finish) => (
            <button
              key={finish}
              onClick={() =>
                setConfig({
                  ...config,
                  material: { ...config.material, finish },
                })
              }
              className={`px-4 py-2 rounded capitalize font-medium transition-colors ${
                config.material.finish === finish
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
