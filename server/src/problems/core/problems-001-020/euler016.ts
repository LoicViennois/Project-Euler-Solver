import { sum } from '@problems/core/maths';
import { bigNumber2digits } from '@problems/core/utils';

/*
https://projecteuler.net/problem=16
*/
export function euler016(): number {
  const bigNumber = BigInt(2) ** BigInt(1000);
  return sum(bigNumber2digits(bigNumber));
}
