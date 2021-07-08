import { range } from '../utils';

/*
https://projecteuler.net/problem=57
*/
export function euler057(): number {
  /**
   * let u be the sequence converging to sqrt(2)
   *
   * u0 = (x + 1) / x  with x = 2
   * => u0 = 3 / 2
   *
   * un = (ax + b) / (cx + d)  with x = 2
   * x => 2 + 1 / x
   * un+1 = ((2a + b)x + a) / ((2c + d)x + c)
   *
   * u0 = un  with a=1,b=1,c=1,d=0
   */
  let a = BigInt(1);
  let b = BigInt(1);
  let c = BigInt(1);
  let d = BigInt(0);

  let n = 0;
  for (const k of range(1e3)) {
    const aNew = a * BigInt(2) + b;
    const bNew = a;
    const cNew = c * BigInt(2) + d;
    const dNew = c;
    a = aNew;
    b = bNew;
    c = cNew;
    d = dNew;
    const num = a * BigInt(2) + b;
    const denum = c * BigInt(2) + d;
    if (num.toString().length > denum.toString().length) {
      n += 1;
    }
  }
  return n;
}
