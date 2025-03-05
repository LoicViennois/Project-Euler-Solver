import { bigFactorial, sum } from '@problems/core/maths';
import { bigNumber2digits } from '@problems/core/utils';

/*
https://projecteuler.net/problem=20
*/
export function euler020(): number {
  return sum(bigNumber2digits(bigFactorial(100)));
}
