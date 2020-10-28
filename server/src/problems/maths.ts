import { BigNumber } from 'bignumber.js';
import { uniq } from 'lodash';
import { range } from './utils';

/**
 * isPrime(XX) is more efficient than sieve(n).includes(XX)
 * Example for n of range(1e5) (see demo.ts):
 *   isPrime => 14ms
 *   sieve.includes => 144ms
 */
export function isPrime(num: number): boolean {
  if (num === 1 || num < 0) {
    return false;
  }
  if (num % 2 === 0) {
    return num === 2;
  }
  const root = Math.sqrt(num);
  let n = 3;
  while (n <= root) {
    if (num % n === 0) {
      return false;
    }
    n += 2;
  }
  return true;
}

/**
 * All the prime numbers under a given limit
 * Done using the sieve of Eratosthenes
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
export function sieve(n: number): number[] {
  const numbers = range(n);

  for (const prime of numbers) {
    if (prime < 2) {
      continue;
    } else if (prime > n ** 0.5) {
      break;
    }
    for (const i of range(prime ** 2, n, prime)) {
      numbers[i] = 0;
    }
  }

  const final = [];
  for (const num of numbers) {
    if (num > 1) {
      final.push(num);
    }
  }
  return final;
}

export function dividers(val: number): number[] {
  const divs = [];
  for (const d of range(1, Math.sqrt(val) + 1)) {
    if (val % d === 0) {
      divs.push(d);
      divs.push(val / d);
    }
  }
  return uniq(divs).filter(k => k !== val);
}

export function sum(array: number[]): number {
  let s = 0;
  for (const a of array) {
    s += a;
  }
  return s;
}

export function mul(array: number[]): number {
  let m = 1;
  for (const a of array) {
    m *= a;
  }
  return m;
}

export function min(array: number[]): number {
  let m = Infinity;
  for (const n of array) {
    m = n < m ? n : m;
  }
  return m;
}

export function max(array: number[]): number {
  let m = -Infinity;
  for (const n of array) {
    m = n > m ? n : m;
  }
  return m;
}

export function maxKey<T>(map: Map<T, number>): T {
  let m = -Infinity;
  let mk = null;
  map.forEach((v, k) => {
    [m, mk] = v > m ? [v, k] : [m, mk];
  });
  return mk;
}

export function factorial(num: number): number {
  if (num === 0) {
    return 1;
  }
  let res = num;
  for (const n of range(1, num)) {
    res *= n;
  }
  return res;
}

export function bigFactorial(num: number): BigNumber {
  if (num === 0) {
    return new BigNumber(0);
  }
  let res = new BigNumber(num);
  for (const n of range(1, num)) {
    res = res.times(n);
  }
  return res;
}

/**
 * Greatest common divisor
 * Done using the Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
export function gcd(a: number, b: number): number {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}
