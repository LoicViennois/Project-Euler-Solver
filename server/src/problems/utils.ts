import { BigNumber } from 'bignumber.js'
import { intersection, isEmpty, uniq, unzip, isEqual, sortBy } from 'lodash'

import { sum } from './maths'

export function msToTime (t: number): string {
  const ms = t % 1000
  t = (t - ms) / 1000
  const secs = t % 60
  t = (t - secs) / 60
  const mins = t % 60

  // return hrs + "h " + mins + "m " + secs + "s " + ms + "ms";
  const s1 = mins ? mins + 'm ' : ''
  const s2 = secs ? secs + 's ' : ''
  const s3 = ms ? ms + 'ms' : '<1ms'
  return s1 + s2 + s3
}

type nFunc = () => number

export function execTime (func: nFunc): [number, string] {
  const t0 = +new Date()
  const res = func()
  const t1 = +new Date()
  return [res, msToTime(t1 - t0)]
}

export function transpose (array: number[][]): number[][] {
  return unzip(array)
}

export function number2digits (n: number | string): number[] {
  const s = n + ''
  return s.split('').map((c) => +c)
}

export function digits2number (digits: number[]): number {
  return +digits.join('')
}

export function bigNumber2digits (b: BigNumber): number[] {
  return b.toFixed().split('').map((c) => +c)
}

function alphaPosition (c: string): number {
  return c.charCodeAt(0) - 64
}

export function wordValue (word: string): number {
  return sum(word.split('').map((c: string) => alphaPosition(c)))
}

export function areEqual (...values: number[]): boolean {
  const v0 = values[0]
  for (let i = 1; i < values.length; i++) {
    if (values[i] !== v0) {
      return false
    }
  }
  return true
}

export function haveSameLength (...arrays): boolean {
  return areEqual(...arrays.map((a) => a.length))
}

export function areDisjoint (...arrays): boolean {
  return isEmpty(intersection(...arrays))
}

export function haveDuplicates (array): boolean {
  return uniq(array).length !== array.length
}

export function isUniq (array): boolean {
  return sortBy(array).reduce((a, b) => a === b ? a : null) !== null
}

export function nbOccurences<T> (item: T, array: T[]): number {
  let count = 0
  for (const e of array) {
    if (e === item) {
      count += 1
    }
  }
  return count
}

export function arePermutations (n1: number, n2: number): boolean {
  return isEqual(sortBy(number2digits(n1)), sortBy(number2digits(n2)))
}
