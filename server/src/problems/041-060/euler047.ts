import { uniq } from 'lodash';
import { sieve } from '../maths';
import { areDisjoint, haveSameLength } from '../utils';

export function euler047(): number {
  const limit = 1e4;
  const primes = sieve(limit);

  function nextPrimeFactor(n: number): number {
    for (const p of primes) {
      if (n % p === 0) {
        return p;
      }
    }
  }

  function primeFactors(n: number): number[] {
    const factors: number[] = [];
    while (n > 1) {
      const p = nextPrimeFactor(n);
      factors.push(p);
      n /= p;
    }
    return factors;
  }

  let n1 = 1;
  let primesN1 = uniq(primeFactors((n1)));
  let n2 = 2;
  let primesN2 = uniq(primeFactors((n2)));
  let n3 = 3;
  let primesN3 = uniq(primeFactors((n3)));
  let n4 = 4;
  let primesN4 = uniq(primeFactors((n4)));

  while (true) {

    if (primesN1.length === 4 &&
      haveSameLength(primesN1, primesN2, primesN3, primesN4) &&
      areDisjoint(primesN1, primesN2, primesN3, primesN4)) {
      return n1;
    }
    n1 = n2;
    n2 = n3;
    n3 = n4;
    n4 += 1;
    primesN1 = primesN2;
    primesN2 = primesN3;
    primesN3 = primesN4;
    primesN4 = uniq(primeFactors((n4)));
  }
}
