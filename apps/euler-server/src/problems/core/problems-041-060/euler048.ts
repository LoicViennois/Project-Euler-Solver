import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=48
*/
export function euler048(): number {
  let sum = BigInt(0);
  for (const i of range(1000)) {
    sum = sum + BigInt(i + 1) ** BigInt(i + 1);
  }
  return +sum
    .toString()
    .slice(sum.toString().length - 10, sum.toString().length);
}
