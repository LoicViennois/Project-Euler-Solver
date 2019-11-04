import { range } from 'lodash'
import { BigNumber } from 'bignumber.js'

export function euler057 (): number {
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
  let a = new BigNumber(1)
  let b = new BigNumber(1)
  let c = new BigNumber(1)
  let d = new BigNumber(0)

  let n = 0
  for (const k of range(1e3)) {
    const aNew = a.times(2).plus(b)
    const bNew = a
    const cNew = c.times(2).plus(d)
    const dNew = c
    a = aNew
    b = bNew
    c = cNew
    d = dNew
    const num = a.times(2).plus(b)
    const denum = c.times(2).plus(d)
    if (num.e > denum.e) {
      n += 1
    }
  }
  return n
}
