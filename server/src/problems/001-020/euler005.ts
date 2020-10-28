import { range } from '../utils';

export function euler005(): number {
  let theBigOne = 1;
  for (const i of range(10)) {
    theBigOne *= i + 11;
  }

  const isValid = (num): boolean => {
    for (const i of range(10)) {
      const m = i + 11;
      if (num % m !== 0) {
        return false;
      }
    }
    return true;
  };

  let res = theBigOne;
  for (const i of range(20)) {
    const d = 20 - i;
    const dd = res / d;
    if (isValid(dd)) {
      res = dd;
    }
  }

  return res;
}
