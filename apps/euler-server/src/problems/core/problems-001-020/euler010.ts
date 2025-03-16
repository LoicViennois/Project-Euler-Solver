import { sieve, sum } from '@problems/core/maths';

/*
https://projecteuler.net/problem=10
*/
export function euler010(): number {
  return sum(sieve(2e6));
}
