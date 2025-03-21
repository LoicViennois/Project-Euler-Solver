import { max } from '@problems/core/maths';
import {
  difference,
  digits2number,
  intersection,
  number2digits,
  range,
  union,
  uniq,
} from '@problems/core/utils';

/*
https://projecteuler.net/problem=38
*/
export function euler038(): number {
  /*
  maxNum = num such as :
    - num * 1 = A
    - num * 2 = B
    - nDigits(AB) = 9
    => num has 4 digits max
   */
  const maxNum = 9876;
  const allDigits = range(1, 10);

  const pandigitals = [];

  for (const p of range(1, maxNum + 1)) {
    let digits: number[] = [];
    let n = 1;
    while (true) {
      const newDigits = number2digits(p * n);
      if (
        newDigits.length > uniq(newDigits).length ||
        intersection(digits, newDigits).length > 0 ||
        newDigits.includes(0)
      ) {
        break;
      }
      digits = union(digits, newDigits);
      if (difference(allDigits, digits).length === 0) {
        pandigitals.push(digits2number(digits));
      }
      n += 1;
    }
  }

  return max(pandigitals);
}
