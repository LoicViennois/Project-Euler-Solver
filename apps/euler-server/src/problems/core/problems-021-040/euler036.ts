import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=36
*/
export function euler036(): number {
  const isPalindromic = (n: number): boolean => {
    const digits = n.toString();
    const digitsR = digits.split('').reverse().join('');
    return digits === digitsR;
  };

  const isBinaryPalindromic = (n: number): boolean => {
    // (n).toString(2) converts n to base 2
    const digits = n.toString(2);
    const digitsR = digits.split('').reverse().join('');
    return digits === digitsR;
  };

  let sum = 0;
  for (const num of range(1e6)) {
    if (isPalindromic(num) && isBinaryPalindromic(num)) {
      sum += num;
    }
  }

  return sum;
}
