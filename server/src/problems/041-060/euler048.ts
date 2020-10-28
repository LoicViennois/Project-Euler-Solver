import { BigNumber } from 'bignumber.js';
import { range } from '../utils';

export function euler048(): number {
  let sum = new BigNumber(0);
  for (const i of range(1000)) {
    sum = sum.plus(new BigNumber(i + 1).pow(i + 1));
  }
  return +sum.toFixed().slice(sum.e - 9, sum.e + 1);
}
