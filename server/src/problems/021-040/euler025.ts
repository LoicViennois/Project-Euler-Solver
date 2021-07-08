/*
https://projecteuler.net/problem=25
*/
export function euler025(): number {
  let num1 = BigInt(1);
  let num2 = BigInt(1);
  let next = BigInt(0);
  let index = 2;

  while (next.toString().length < 1000) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    index += 1;
  }

  return index;
}
