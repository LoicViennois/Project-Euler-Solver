import { dividers, sum } from '../maths.js';
import { range } from '../utils.js';

/*
https://projecteuler.net/problem=21
*/
export function euler021(): number {
  const divSum = new Map<number, number>();

  for (const n of range(2, 10001)) {
    let divs = dividers(n);
    divs = divs.filter((k) => k !== n);
    divSum.set(n, sum(divs));
  }

  const amicalNumbers: number[] = [];

  divSum.forEach((val, key) => {
    if (divSum.has(val) && divSum.get(val) === key && val !== key) {
      amicalNumbers.push(val);
    }
  });

  return sum(amicalNumbers);
}
