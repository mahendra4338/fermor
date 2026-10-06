export type Point = { year: number; invested: number; value: number };

export function project(monthly: number, years: number, annualRate: number): Point[] {
  const r = annualRate / 100 / 12;
  const points: Point[] = [];
  for (let y = 0; y <= years; y++) {
    const n = y * 12;
    const value = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    points.push({ year: y, invested: monthly * n, value });
  }
  return points;
}

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export const formatINR = (n: number) => inr.format(Math.round(n));

export function formatShort(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return formatINR(n);
}
