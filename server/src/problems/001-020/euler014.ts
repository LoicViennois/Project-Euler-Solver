import { maxKey } from '../maths';
import { range } from '../utils';

export function euler014(): number {
  const sizeDict = new Map<number, number>();

  const collatz = (num) => {
    if (num % 2 === 0) {
      return num / 2.;
    } else {
      return 3 * num + 1;
    }
  };

  for (const start of range(14, 1000000)) {
    let n = start;
    let size = 1;
    while (n !== 1) {
      if (sizeDict.has(n)) {
        size = sizeDict.get(n) + size;
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
