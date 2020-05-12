import { intersection, range, without } from 'lodash'
import { gcd } from '../maths'
import { digits2number, number2digits } from '../utils'

export function euler033 (): number {
  const r = range(11, 100).filter((n) => n % 10 !== 0)
  let numProd = 1
  let denumProd = 1

  for (const num of r) {
    for (const denum of r) {

      const numDigits = number2digits(num)
      const denumDigits = number2digits(denum)

      for (const i of intersection(numDigits, denumDigits)) {

        const numShort = digits2number(without(numDigits, i))
        const denumShort = digits2number(without(denumDigits, i))
        const fraction = num / denum
        const fractionShort = numShort / denumShort

        if (fraction === fractionShort && fraction < 1) {
          numProd *= numShort
          denumProd *= denumShort
        }
      }
    }
  }

  const div = gcd(numProd, denumProd)
  return denumProd / div
}
