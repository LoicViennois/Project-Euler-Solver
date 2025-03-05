import { dividers, sum } from '@problems/core/maths';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=23
*/
export function euler023(): number {
  const isAbundant = (n: number) => {
    return sum(dividers(n)) > n;
  };

  const abNums = range(2, 28123).filter((n) => isAbundant(n));

  const abNumsSums = new Set();
  abNums.forEach((v1, k1) => {
    for (let k2 = k1; k2 < abNums.length; k2++) {
      abNumsSums.add(v1 + abNums[k2]);
    }
  });

  return sum(range(1, 28124).filter((n) => !abNumsSums.has(n)));
}
