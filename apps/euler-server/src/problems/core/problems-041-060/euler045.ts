import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=45
*/
export function euler045(): number {
  const limit = 1e5;

  const isPentagonal = new Map<number, boolean>();
  for (const n of range(1, limit)) {
    const p = (n * (3 * n - 1)) / 2;
    isPentagonal.set(p, true);
  }

  const isHexagonal = new Map<number, boolean>();
  for (const n of range(1, limit)) {
    const p = n * (2 * n - 1);
    isHexagonal.set(p, true);
  }

  for (const n of range(286, limit)) {
    const t = (n * (n + 1)) / 2;
    if (isPentagonal.get(t) && isHexagonal.get(t)) {
      return t;
    }
  }

  throw new SolutionNotFoundError('euler045');
}
