import { BigNumber } from 'bignumber.js';
import { range } from '../utils';
import { sum } from '../maths';
import { bigNumber2digits } from '../utils';

export function euler056(): number {
  let max = 0;
  for (const a of range(1, 100)) {
    for (const b of range(1, 100)) {
      const g = new BigNumber(a).pow(b);
      max = Math.max(max, sum(bigNumber2digits(g)));
    }
  }
  return max;
}
