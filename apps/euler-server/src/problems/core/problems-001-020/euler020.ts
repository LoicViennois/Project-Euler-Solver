import { bigFactorial, sum } from '../maths.js';
import { bigNumber2digits } from '../utils.js';

/*
https://projecteuler.net/problem=20
*/
export function euler020(): number {
  return sum(bigNumber2digits(bigFactorial(100)));
}
