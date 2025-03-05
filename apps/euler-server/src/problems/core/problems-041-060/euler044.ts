import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=44
*/
export function euler044(): number {
  const limit = 1e4;

  const isPentagonal = new Map<number, boolean>();
  for (const n of range(1, limit)) {
    const p = (n * (3 * n - 1)) / 2;
    isPentagonal.set(p, true);
  }
  for (const j of range(1, limit)) {
    for (const k of range(j + 1, limit)) {
      const pj = (j * (3 * j - 1)) / 2;
      const pk = (k * (3 * k - 1)) / 2;
      const s = pj + pk;
      const d = pk - pj;
      if (isPentagonal.get(s)) {
        if (isPentagonal.get(d)) {
          return d;
        }
      }
    }
  }

  throw new SolutionNotFoundError('euler044');
}
