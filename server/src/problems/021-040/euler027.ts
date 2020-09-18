import { range } from 'lodash';
import { isPrime, maxKey, mul, sieve } from '../maths';

export function euler027(): number {
  const aRange = range(-999, 1000).filter((x) => x % 2 !== 0); // odd numbers between -999 and 999
  const bRange = sieve(1e3); // All primes under 1000
  const nbPrimes = new Map<number[], number>();

  let n: number;
  let q: number;
  for (const a of aRange) {
    for (const b of bRange) {
      n = 0;
      while (true) {
        q = n * n + a * n + b;
        if (!isPrime(q)) {
          nbPrimes.set([a, b], n);
          break;
        }
        n += 1;
      }
    }
  }

  return mul(maxKey(nbPrimes));
}
