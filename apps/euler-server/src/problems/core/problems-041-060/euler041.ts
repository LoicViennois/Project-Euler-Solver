import { permutation } from '@problems/core/combinatorics';
import { isPrime } from '@problems/core/maths';
import { digits2number, range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=41
*/
export function euler041(): number {
  let max = 0;
  let found = false;
  let upperDigit = 9;

  while (!found) {
    for (const comb of permutation(range(1, upperDigit + 1))) {
      const num = digits2number(comb);
      if (isPrime(num)) {
        found = true;
        max = Math.max(num, max);
      }
    }
    upperDigit -= 1;
  }

  return max;
}
