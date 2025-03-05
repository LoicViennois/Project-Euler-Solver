import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { maxKey } from '@problems/core/maths';
import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=14
*/
export function euler014(): number {
  const sizeDict = new Map<number, number>();

  const collatz = (num: number) => {
    if (num % 2 === 0) {
      return num / 2;
    } else {
      return 3 * num + 1;
    }
  };

  for (const start of range(14, 1000000)) {
    let n = start;
    let size = 1;
    while (n !== 1) {
      if (sizeDict.has(n)) {
        const savedSize = sizeDict.get(n);
        if (!savedSize) {
          throw new SolutionNotFoundError('euler014');
        }
        size = savedSize + size;
        break;
      } else {
        n = collatz(n);
        size += 1;
      }
    }
    sizeDict.set(start, size);
  }

  return +maxKey(sizeDict);
}
