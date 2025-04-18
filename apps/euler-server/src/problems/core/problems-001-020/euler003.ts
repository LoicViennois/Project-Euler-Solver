import { isPrime } from '@problems/core/maths';

/*
https://projecteuler.net/problem=03
*/
export function euler003(): number {
  const theMax = 600851475143;
  const root = Math.floor(Math.sqrt(theMax));
  let n = 3;
  const factors: number[] = [];

  while (n < root) {
    if (theMax % n === 0) {
      factors.push(n);
    }
    n += 2;
  }

  factors.reverse();

  let theOne: number = 0;

  for (const num of factors) {
    if (isPrime(num)) {
      theOne = num;
      break;
    }
  }

  return theOne;
}
