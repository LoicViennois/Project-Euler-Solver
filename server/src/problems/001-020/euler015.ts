import { sum } from '../maths';
import { range, times } from '../utils';

/*
https://projecteuler.net/problem=15
*/
export function euler015(): number {
  let level = [1];
  let nextLevel = [];

  times(20, () => {
    for (const i of range(1, level.length)) {
      nextLevel.push(level[i - 1] + level[i]);
    }
    nextLevel.push(1);
    nextLevel.unshift(1);
    level = nextLevel;
    nextLevel = [];
  });

  return sum(level.map((x) => x * x));
}
