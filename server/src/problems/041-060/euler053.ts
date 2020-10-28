import { factorial } from '../maths';
import { range } from '../utils';

function ncr(n, r): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

export function euler053(): number {
  let count = 0;
  for (const n of range(1, 101)) {
    for (const r of range(1, n + 1)) {
      if (ncr(n, r) > 1e6) {
        count += 1;
      }
    }
  }
  return count;
}
