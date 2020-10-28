import { range } from '../utils';

export function euler026(): number {

  let maxLen = 0;
  let maxN = 0;

  for (const n of range(1, 1000)) {
    let r = 10 % n;
    const rests = [r];
    while (r !== 0) {
      r = r * 10 % n;
      if (rests.includes(r)) {
        break;
      }
      rests.push(r);
    }
    const len = rests.length;
    if (len > maxLen) {
      maxLen = len;
      maxN = n;
    }
  }

  return maxN;
}
