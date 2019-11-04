import { range } from 'lodash'
import { sieve } from '../maths'

export function euler046 (): number {
  const limit = 1e4

  const primes = sieve(limit)
  const twiceSquares = range(Math.floor(Math.sqrt(limit / 2)) + 1).map((n) => 2 * n ** 2)

  const combinations = new Set<number>()
  for (const p of primes) {
    for (const t of twiceSquares) {
      combinations.add(p + t)
    }
  }

  for (const n of range(3, limit, 2)) {
    if (!combinations.has(n)) {
      return n
    }
  }
}
