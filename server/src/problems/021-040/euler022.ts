import * as fs from 'fs'
import * as path from 'path'

import { wordValue } from '../utils'
import { assetsFolder } from '../assets-folder'

export function euler022 (): number {
  const names = fs.readFileSync(path.join(assetsFolder, 'p022_names.txt'))
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
