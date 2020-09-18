import { times } from 'lodash';
import { isPrime, sieve } from '../maths';
import { digits2number, number2digits } from '../utils';

export function euler035(): number {
  const primes = sieve(1e6);

  const rotations = (n): number[] => {
    const digits = number2digits(n);
    const nums = [];
    times(digits.length, () => {
      nums.push(digits2number(digits));
      digits.push(digits.shift());
    });
    return nums;
  };

  let nbCircularPrimes = 0;
  for (const p of primes) {
    if (rotations(p).every((n) => isPrime(n))) {
      nbCircularPrimes += 1;
    }
  }
  return nbCircularPrimes;
}
