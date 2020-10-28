import { maxKey } from '../maths';
import { range } from '../utils';

export function euler039(): number {
  const limit = 1000;
  const squareRoots = new Map<number, number>(range(1, limit).map((n) => [n ** 2, n]) as [number, number][]);
  const candidates = new Map<number, number>();

  for (let a = 1; a < limit; a++) {
    for (let b = a; a + b < limit; b++) {
      const c2 = a * a + b * b;
      if (squareRoots.has(c2)) {
        const c = squareRoots.get(c2);
        const p = a + b + c;
        if (p > limit) {
          continue;
        }
        const n = candidates.get(p) || 0;
        candidates.set(p, n + 1);
      }
    }
  }

  return maxKey(candidates);
}
