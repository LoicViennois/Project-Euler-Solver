import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=06
*/
export function euler006(): number {
  let sumSq = 0;
  let sqSum = 0;

  for (const i of range(100)) {
    const d = i + 1;
    sumSq += d * d;
    sqSum += d;
  }

  sqSum = sqSum * sqSum;

  return sqSum - sumSq;
}
