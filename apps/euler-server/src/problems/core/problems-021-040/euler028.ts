/*
https://projecteuler.net/problem=28
*/
export function euler028(): number {
  let sum = 1;
  let n = 1;
  let k = 2;
  let counter = 0;

  while (n < 1001 * 1001) {
    n += k;
    sum += n;
    counter += 1;
    if (counter === 4) {
      counter = 0;
      k += 2;
    }
  }

  return sum;
}
