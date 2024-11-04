interface PressureLossParams {
  diameter: number;
  length: number;
  flowRate: number;
  roughness: number;
  viscosity: number;
  density: number;
}

export function calculatePressureLoss({
  diameter,
  length,
  flowRate,
  roughness,
  viscosity,
  density
}: PressureLossParams): number {
  // 流速の計算
  const area = Math.PI * Math.pow(diameter / 2, 2);
  const velocity = flowRate / area;

  // レイノルズ数の計算
  const reynolds = (density * velocity * diameter) / viscosity;

  // 摩擦係数の計算 (Colebrook-White式)
  let friction = 0.02; // 初期値
  for (let i = 0; i < 50; i++) {
    const f = -2 * Math.log10(
      roughness / (3.7 * diameter) + 2.51 / (reynolds * Math.sqrt(friction))
    );
    friction = 1 / (f * f);
  }

  // 圧力損失の計算 (Darcy-Weisbach式)
  const pressureLoss =
    friction * (length / diameter) * (density * Math.pow(velocity, 2)) / 2;

  return pressureLoss;
}