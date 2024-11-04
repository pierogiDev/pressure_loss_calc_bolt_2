export interface Pipe {
  id: string;
  name: string;
  drawingNumber?: string;  // 図番（任意）
  sectionName?: string;    // 区間名（任意）
  diameter: number;       // メートル
  length: number;         // メートル
  flowRate: number;       // m³/s
  roughness: number;      // メートル
  viscosity: number;      // Pa·s
  density: number;        // kg/m³
}