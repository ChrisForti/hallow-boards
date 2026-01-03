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
