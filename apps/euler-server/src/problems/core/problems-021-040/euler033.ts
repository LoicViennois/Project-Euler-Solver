import { gcd } from '@problems/core/maths';
import {
  digits2number,
  intersection,
  number2digits,
  range,
} from '@problems/core/utils';

/*
https://projecteuler.net/problem=33
*/
export function euler033(): number {
  const r = range(11, 100).filter((n) => n % 10 !== 0);
  let numProd = 1;
  let denumProd = 1;

  for (const num of r) {
    for (const denum of r) {
      const numDigits = number2digits(num);
      const denumDigits = number2digits(denum);

      for (const i of intersection(numDigits, denumDigits)) {
        const numShort = digits2number(numDigits.filter((k) => k !== i));
        const denumShort = digits2number(denumDigits.filter((k) => k !== i));
        const fraction = num / denum;
        const fractionShort = numShort / denumShort;

        if (fraction === fractionShort && fraction < 1) {
          numProd *= numShort;
          denumProd *= denumShort;
        }
      }
    }
  }

  const div = gcd(numProd, denumProd);
  return denumProd / div;
}
