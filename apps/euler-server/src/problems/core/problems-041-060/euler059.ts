import * as fs from 'fs';
import * as path from 'node:path';

import { permutation } from '@problems/core/combinatorics';
import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { sum } from '@problems/core/maths';
import { concat, range, times, zip } from '@problems/core/utils';

/*
https://projecteuler.net/problem=59
*/
export function euler059(): number {
  const assetFilePath = path.resolve(__dirname, './assets/p059_cipher.txt');
  const bytes = fs
    .readFileSync(assetFilePath)
    .toString()
    .split(',')
    .map((c) => +c);

  const nbCycles = Math.ceil(bytes.length / 3);

  const aByte = 'a'.charCodeAt(0);
  const zByte = 'z'.charCodeAt(0);
  const possibleBytes = range(aByte, zByte + 1);

  function guessPassword(): number[] {
    /**
     * Guess password on a smaller version of the message
     */
    const shortBytes = bytes.slice(0, bytes.length / 10);
    const shortNbCycles = Math.ceil(shortBytes.length / 3);
    for (const key of permutation(possibleBytes, 3)) {
      let shortKeyBytes: number[] = [];
      times(shortNbCycles, () => {
        shortKeyBytes = concat(shortKeyBytes, key);
      });
      shortKeyBytes = shortKeyBytes.slice(0, bytes.length);

      let msg = '';
      for (const [b, k] of zip(shortBytes, shortKeyBytes)) {
        msg += String.fromCharCode(b ^ k);
      }
      if (msg.match(/ the /)) {
        return key;
      }
    }
    throw new SolutionNotFoundError('euler059');
  }

  const pass = guessPassword();

  let keyBytes: number[] = [];
  times(nbCycles, () => {
    keyBytes = concat(keyBytes, pass);
  });
  keyBytes = keyBytes.slice(0, bytes.length);

  let message = '';
  for (const [b, k] of zip(bytes, keyBytes)) {
    message += String.fromCharCode(b ^ k);
  }
  return sum(message.split('').map((c) => c.charCodeAt(0)));
}
