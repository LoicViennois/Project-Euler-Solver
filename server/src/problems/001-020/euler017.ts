import { range } from 'lodash'
import { toWords } from 'number-to-words'

export function euler017 (): number {
  let nbLetters = 0
  for (const num of range(1, 1001)) {
    const words = toWords(num)
        .replace(/hundred\s/g, 'hundredand')
        .replace(/\s/g, '')
        .replace('-', '')
    nbLetters += words.length
  }

  return nbLetters
}
