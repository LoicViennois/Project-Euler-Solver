import { BigNumber } from 'bignumber.js';
import { range } from 'lodash';

export function euler029(): number {
  const nums = new Set();

  for (const a of range(2, 101)) {
    for (const b of range(2, 101)) {
      nums.add(new BigNumber(a).pow(b).toFixed());
    }
  }

  return nums.size;
}
