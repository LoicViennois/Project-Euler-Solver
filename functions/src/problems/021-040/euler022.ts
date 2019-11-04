import * as fs from 'fs'
import { wordValue } from '../utils'

export function euler022 (): number {
  const names = fs.readFileSync('./src/problems/021-040/p022_names.txt')
      .toString()
      .replace(/"/g, '')
      .split(',')

  names.sort()

  let total = 0
  names.forEach((n, i) => {
    total += wordValue(n) * (i + 1)
  })

  return total
}
