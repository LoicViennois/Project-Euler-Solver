import { isPrime, sieve } from '@problems/core/maths';
import { digits2number, number2digits, times } from '@problems/core/utils';

/*
https://projecteuler.net/problem=35
*/
export function euler035(): number {
  const primes = sieve(1e6);

  const rotations = (n: number): number[] => {
    const digits = number2digits(n);
    const nums: number[] = [];
    times(digits.length, () => {
      nums.push(digits2number(digits));
      digits.push(digits.shift() as number);
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
