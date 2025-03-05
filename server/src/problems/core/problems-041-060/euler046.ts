import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { sieve } from '@problems/core/maths';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=46
*/
export function euler046(): number {
  const limit = 1e4;

  const primes = sieve(limit);
  const twiceSquares = range(Math.floor(Math.sqrt(limit / 2)) + 1).map(
    (n) => 2 * n ** 2,
  );

  const combinations = new Set<number>();
  for (const p of primes) {
    for (const t of twiceSquares) {
      combinations.add(p + t);
    }
  }

  for (const n of range(3, limit, 2)) {
    if (!combinations.has(n)) {
      return n;
    }
  }

  throw new SolutionNotFoundError('euler046');
}
