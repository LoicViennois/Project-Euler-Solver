import { sum } from '../maths.js';
import { bigNumber2digits } from '../utils.js';

/*
https://projecteuler.net/problem=16
*/
export function euler016(): number {
  const bigNumber = BigInt(2) ** BigInt(1000);
  return sum(bigNumber2digits(bigNumber));
}
