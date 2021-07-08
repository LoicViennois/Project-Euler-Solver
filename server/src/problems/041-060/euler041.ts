import { range } from '../utils';
import { isPrime } from '../maths';
import { digits2number } from '../utils';
import { permutation } from '../combinatorics';

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
