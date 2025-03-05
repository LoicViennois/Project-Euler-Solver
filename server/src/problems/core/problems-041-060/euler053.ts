import { factorial } from '@problems/core/maths';
import { range } from '@problems/core/utils';

function ncr(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/*
https://projecteuler.net/problem=53
*/
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
