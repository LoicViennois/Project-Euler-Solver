import { SolutionNotFoundError } from '../errors/solution-not-found.error.js';
import { isPrime, sieve } from '../maths.js';
import {
  arePermutations,
  concat,
  digits2number,
  number2digits,
} from '../utils.js';

/*
https://projecteuler.net/problem=49
*/
export function euler049(): number {
  const primes = sieve(9999).filter((p) => p > 999 && p !== 1487);
  for (const p1 of primes) {
    for (const p2 of primes.filter((p) => p > p1)) {
      const p3 = p2 + p2 - p1;
      if (isPrime(p3) && arePermutations(p1, p2) && arePermutations(p2, p3)) {
        return digits2number(
          concat(number2digits(p1), number2digits(p2), number2digits(p3)),
        );
      }
    }
  }

  throw new SolutionNotFoundError('euler049');
}
