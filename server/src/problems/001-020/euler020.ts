import { bigFactorial, sum } from '../maths'
import { bigNumber2digits } from '../utils'

export function euler020 (): number {
  return sum(bigNumber2digits(bigFactorial(100)))
}
