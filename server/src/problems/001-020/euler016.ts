import { BigNumber } from 'bignumber.js';
import { sum } from '../maths';
import { bigNumber2digits } from '../utils';

export function euler016(): number {
  const bigNumber = new BigNumber(2).pow(1000);
  return sum(bigNumber2digits(bigNumber));
}
