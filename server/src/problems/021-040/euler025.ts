import { BigNumber } from 'bignumber.js';

/*
https://projecteuler.net/problem=25
*/
export function euler025(): number {
  let num1 = new BigNumber(1);
  let num2 = new BigNumber(1);
  let next = new BigNumber(0);
  let index = 2;

  while (next.e < 999) {
    next = num1.plus(num2);
    num1 = num2;
    num2 = next;
    index += 1;
  }

  return index;
}
