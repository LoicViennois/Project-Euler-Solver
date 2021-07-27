import { range } from '../utils';

/*
https://projecteuler.net/problem=64
*/
export function euler064(): number {
  const findPeriod = (num) => {
    const sqrt = Math.sqrt(num);
    if (sqrt === Math.floor(sqrt)) {
      return 0;
    }
    let a = Math.floor(sqrt);
    let b = 1;
    const [a0, b0] = [a, b];
    let period = 0;

    for (let i = 1; i < 999; i++) {
      period += 1;
      const part = Math.floor(b / (sqrt - a));
      b = (num - a ** 2) / b;
      a = b * part - a;
      if (a === a0 && b === b0) {
        return period;
      }
    }

    return 0;
  };

  let nbOdds = 0;
  for (const num of range(1, 10001)) {
    const period = findPeriod(num);
    if (period % 2 === 1) {
      nbOdds += 1;
    }
  }

  return nbOdds;
}
