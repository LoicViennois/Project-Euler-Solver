import * as fs from 'fs'
import * as path from 'path'

import { range, times, zip } from 'lodash'
import { permutation } from 'js-combinatorics'
import { sum } from '../maths'
import { assetsFolder } from '../assets-folder'

export function euler059 (): number {
  const bytes = fs.readFileSync(path.join(assetsFolder, 'p059_cipher.txt'))
      .toString()
      .split(',')
      .map((c) => +c)

  const nbCycles = Math.ceil(bytes.length / 3)

  const aByte = 'a'.charCodeAt(0)
  const zByte = 'z'.charCodeAt(0)
  const possibleBytes = range(aByte, zByte + 1)

  function guessPassword () {
    /**
     * Guess password on a smaller version of the message
     */
    const shortBytes = bytes.slice(0, bytes.length / 10)
    const shortNbCycles = Math.ceil(shortBytes.length / 3)
    for (const key of permutation(possibleBytes, 3).toArray()) {
      let shortKeyBytes = []
      times(shortNbCycles).forEach(() => {
        shortKeyBytes = shortKeyBytes.concat(key)
      })
      shortKeyBytes = shortKeyBytes.slice(0, bytes.length)

      let msg = ''
      for (const [b, k] of zip(shortBytes, shortKeyBytes)) {
        msg += String.fromCharCode(b ^ k)
      }
      if (msg.match(/ the /)) {
        return key
      }
    }
  }

  const pass = guessPassword()

  let keyBytes = []
  times(nbCycles).forEach(() => {
    keyBytes = keyBytes.concat(pass)
  })
  keyBytes = keyBytes.slice(0, bytes.length)

  let message = ''
  for (const [b, k] of zip(bytes, keyBytes)) {
    message += String.fromCharCode(b ^ k)
  }
  return sum(message.split('').map((c) => c.charCodeAt(0)))

}
