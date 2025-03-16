import { range } from '@problems/core/utils';

export function findPeriod(num: number): [number, number[]] {
  const sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    return [0, []];
  }
  let a = Math.floor(sqrt);
  let b = 1;
  const [a0, b0] = [a, b];
  let period = 0;
  const terms = [a0];

  while (true) {
    period += 1;
    const part = Math.floor(b / (sqrt - a));
    b = (num - a ** 2) / b;
    a = b * part - a;
    terms.push(part);
    if (a === a0 && b === b0) {
      return [period, terms];
    }
  }
}

/*
https://projecteuler.net/problem=64
*/
export function euler064(): number {
  let nbOdds = 0;
  for (const num of range(1, 10001)) {
    const period = findPeriod(num)[0];
    if (period % 2 === 1) {
      nbOdds += 1;
    }
  }

  return nbOdds;
}
