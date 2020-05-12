import { clone, isEqual, range } from 'lodash'

export function euler004 (): number {
  let pal = 0

  for (const i of range(100, 999)) {
    for (const j of range(i, 999)) {
      const prod = i * j
      const pop: string[] = prod.toString().split('')
      const revPop: string[] = clone(pop)
      revPop.reverse()
      if (isEqual(pop, revPop)) {
        pal = Math.max(pal, prod)
      }
    }
  }

  return pal
}
