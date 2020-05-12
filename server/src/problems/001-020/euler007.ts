import { sieve } from '../maths'

export function euler007 (): number {
  return sieve(2e5)[10000]
}
