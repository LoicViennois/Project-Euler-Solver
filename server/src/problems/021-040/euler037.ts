import { isPrime, sieve, sum } from '../maths';
import { digits2number, number2digits } from '../utils';

/*
https://projecteuler.net/problem=37
*/
export function euler037(): number {
  const primes = sieve(1e6);

  const truncatablePrimes = [];

  for (const p of primes.filter((n) => n >= 10)) {
    const digits = number2digits(p);
    const dLeft = digits.slice();
    const dRight = digits.slice();
    let isTruncatable = true;

    dLeft.pop();
    while (dLeft.length) {
      const newP = digits2number(dLeft);
      if (!isPrime(newP)) {
        isTruncatable = false;
        break;
      }
      dLeft.pop();
    }

    if (!isTruncatable) {
      continue;
    }

    dRight.shift();
    while (dRight.length) {
      const newP = digits2number(dRight);
      if (!isPrime(newP)) {
        isTruncatable = false;
        break;
      }
      dRight.shift();
    }

    if (!isTruncatable) {
      continue;
    }

    truncatablePrimes.push(p);
    if (truncatablePrimes.length === 11) {
      break;
    }
  }

  return sum(truncatablePrimes);
}
