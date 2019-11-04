import { range } from 'lodash'
import { isPrime, sieve } from './maths'
import { execTime } from './utils'

const r = range(1e6)
const primes = sieve(1e6)

const primesMap = new Map()
for (const p of primes) {
  primesMap.set(p, true)
}

const primesSet = new Set()
for (const p of primes) {
  primesSet.add(p)
}

const solution1 = () => {
  for (const n of r) {
    isPrime(n)
  }
  return 0
}

const solution2 = () => {
  for (const n of r) {
    primes.includes(n)
  }
  return 0
}

const solution3 = () => {
  for (const n of r) {
    primesMap.has(n)
  }
  return 0
}

const solution4 = () => {
  for (const n of r) {
    primesSet.has(n)
  }
  return 0
}

console.log(execTime(solution1))
console.log('-----------------')
console.log(execTime(solution2))
console.log('-----------------')
console.log(execTime(solution3))
console.log('-----------------')
console.log(execTime(solution4))
