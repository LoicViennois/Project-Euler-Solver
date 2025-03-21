import { sieve } from '@problems/core/maths';

/*
https://projecteuler.net/problem=07
*/
export function euler007(): number {
  return sieve(2e5)[10000];
}
