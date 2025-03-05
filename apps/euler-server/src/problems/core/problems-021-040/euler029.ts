import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=29
*/
export function euler029(): number {
  const nums = new Set();

  for (const a of range(2, 101)) {
    for (const b of range(2, 101)) {
      const big = BigInt(a) ** BigInt(b);
      nums.add(big.toString());
    }
  }

  return nums.size;
}
