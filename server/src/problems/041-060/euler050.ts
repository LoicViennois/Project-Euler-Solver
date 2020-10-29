import { isPrime, sieve, sum } from '../maths';
import { maxBy } from 'lodash';

/*
https://projecteuler.net/problem=50
*/
export function euler050(): number {
  const limit = 1e6;
  const primes = sieve(limit - 1);
  const chains: number[][] = [];

  primes.forEach((p, i) => {
    let k = 1;
    let chainSum = p;
    const chain = [p];
    while (true) {
      const nextPrime = primes[i + k];
      if (!nextPrime) {
        break;
      }
      chainSum += nextPrime;
      if (nextPrime < limit && chainSum < limit) {
        chain.push(nextPrime);
        k += 1;
      } else {
        break;
      }
    }
    if (chain.length > 20) {
      chains.push(chain);
    }
  });

  const finalChains = [];
  for (const chain of chains) {
    while (!isPrime(sum(chain))) {
      chain.pop();
    }
    if (chain.length > 20) {
      finalChains.push(chain);
    }
  }

  return sum(maxBy(finalChains, (c) => c.length));
}
