import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=63
*/
export function euler063(): number {
  let count = 0;
  for (const num of range(10)) {
    for (const pow of range(100)) {
      const nbDigits = Math.floor(Math.log10(num ** pow)) + 1;
      if (nbDigits === pow) {
        count += 1;
      }
    }
  }

  return count;
}
