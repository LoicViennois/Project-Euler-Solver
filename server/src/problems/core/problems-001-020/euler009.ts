import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=09
*/
export function euler009(): number {
  const sum = 1000;

  for (const a of range(1, sum)) {
    for (const b of range(a, sum - a)) {
      const c = sum - a - b;

      if (a * a + b * b === c * c) {
        return a * b * c; // There is only one
      }
    }
  }

  throw new SolutionNotFoundError('euler009');
}
