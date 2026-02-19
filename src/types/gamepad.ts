export type ButtonName =
  | "A" | "B" | "X" | "Y"
  | "LT" | "RT" | "LB" | "RB"
  | "UP" | "DOWN" | "LEFT" | "RIGHT"
  | "START" | "SELECT" | "HOME"
  | null;

export interface JoystickPosition {
  x: number;
  y: number;
}

export interface HapticConfig {
  color: string;
  effect: string;
  intensity: number;
  label: string;
  emoji: string;
}
