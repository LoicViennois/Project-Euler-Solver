import { sum } from '../maths';
import { bigNumber2digits } from '../utils';

/*
https://projecteuler.net/problem=16
*/
export function euler016(): number {
  const bigNumber = BigInt(2) ** BigInt(1000);
  return sum(bigNumber2digits(bigNumber));
}
