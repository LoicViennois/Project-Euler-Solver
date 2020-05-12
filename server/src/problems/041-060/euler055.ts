import { range } from 'lodash'

function isPalindromic (n: number): boolean {
  const num = n + ''
  return num.split('').reverse().join('') === num
}

function reverse (n: number): number {
  const num = n + ''
  return +num.split('').reverse().join('')
}

export function euler055 (): number {
  let count = 0
  for (const start of range(10, 1e4)) {
    let n = start + reverse(start)
    let nbIter = 1
    while (!isPalindromic(n) && nbIter < 50) {
      n = n + reverse(n)
      nbIter += 1
    }
    if (nbIter === 50) {
      count += 1
    }
  }
  return count
}
