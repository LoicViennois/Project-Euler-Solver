import { sum } from '../maths';
import { difference, digits2number, number2digits, range, union, zip } from '../utils';
import { permutation } from '../combinatorics';

/*
https://projecteuler.net/problem=32
*/
export function euler032(): number {
  const digits = range(1, 10);

  const perms2array = permutation(digits, 2);
  const perms3array = permutation(digits, 3);
  const perms4array = permutation(digits, 4);

  const perms2 = perms2array.map(digits2number);
  const perms3 = perms3array.map(digits2number);
  const perms4 = perms4array.map(digits2number);

  const containsAllDigitsOnlyOnce = (...arrays: number[][]): boolean => {
    const areUniq = union(...arrays).length === sum(arrays.map((a) => a.length));
    const containsAll = difference(union(...arrays), digits).length === 0;
    return areUniq && containsAll;
  };

  const pandigitalProducts = new Set<number>();

  /** Possible solutions:
   * X * YYYY = ZZZZ
   * XX * YYY = ZZZZ
   */
  for (const a of digits) {
    for (const [b, bArray] of zip(perms4, perms4array)) {
      const p = a * b;
      if (containsAllDigitsOnlyOnce([a], bArray, number2digits(p))) {
        pandigitalProducts.add(p);
      }
    }
  }

  for (const [a, aArray] of zip(perms2, perms2array)) {
    for (const [b, bArray] of zip(perms3, perms3array)) {
      const p = a * b;
      if (containsAllDigitsOnlyOnce(aArray, bArray, number2digits(p))) {
        pandigitalProducts.add(p);
      }
    }
  }

  return sum([...pandigitalProducts]);
}
