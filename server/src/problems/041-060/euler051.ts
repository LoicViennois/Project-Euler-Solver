import { maxBy, range } from 'lodash'
import { cartesianProduct, combination } from 'js-combinatorics'

import { isPrime } from '../maths'

export function euler051 (): number {
  const digits = range(10).map((d) => '' + d)
  const maxNbDigits = 6

  const digitReplacements: number[][] = []

  for (const nbDigitsToReplace of range(1, maxNbDigits)) {
    combination(range(maxNbDigits), nbDigitsToReplace).forEach((digitsToReplace) => {
      const possibleDigits = []
      for (const i of range(maxNbDigits)) {
        if (digitsToReplace.includes(i)) {
          possibleDigits.push(['X'])
        } else {
          possibleDigits.push(digits)
        }
      }
      cartesianProduct(...possibleDigits).forEach((possibleNumberAsArray) => {
        const possibleNumber = possibleNumberAsArray.join('')
        const replacements = []
        for (const d of digits) {
          const replacement: string = possibleNumber.replace(/X/g, d)
          if (replacement[0] !== '0' && isPrime(+replacement)) {
            replacements.push(+replacement)
          }
        }
        digitReplacements.push(replacements)
      })
    })
  }

  return maxBy(digitReplacements, (a) => a.length)[0]
}
