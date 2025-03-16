import { sum } from '@problems/core/maths';
import { bigNumber2digits, range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=56
*/
export function euler056(): number {
  let max = 0;
  for (const a of range(1, 100)) {
    for (const b of range(1, 100)) {
      const g = BigInt(a) ** BigInt(b);
      max = Math.max(max, sum(bigNumber2digits(g)));
    }
  }
  return max;
}
