import { isPrime, sieve, sum } from '../maths';

/*
https://projecteuler.net/problem=60
*/
export function euler060(): number {
  const limit = 1e4;
  const primes = sieve(limit);

  function areCombinationsPrime(array: number[], n: number): boolean {
    for (const n1 of array) {
      if (!isPrime(+[n1, n].join(''))) {
        return false;
      }
      if (!isPrime(+[n, n1].join(''))) {
        return false;
      }
    }
    return true;
  }

  for (const p1 of primes) {
    for (const p2 of primes.filter((p) => p > p1)) {
      if (areCombinationsPrime([p1], p2)) {
        for (const p3 of primes.filter((p) => p > p2)) {
          if (areCombinationsPrime([p1, p2], p3)) {
            for (const p4 of primes.filter((p) => p > p3)) {
              if (areCombinationsPrime([p1, p2, p3], p4)) {
                for (const p5 of primes.filter((p) => p > p4)) {
                  if (areCombinationsPrime([p1, p2, p3, p4], p5)) {
                    return sum([p1, p2, p3, p4, p5]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return null;
}
