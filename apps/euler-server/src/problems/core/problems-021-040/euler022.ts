import * as fs from 'fs';
import * as path from 'node:path';

import { wordValue } from '@problems/core/utils';

/*
https://projecteuler.net/problem=22
*/
export function euler022(): number {
  const assetFilePath = path.resolve(__dirname, './assets/p022_names.txt');
  const names = fs
    .readFileSync(assetFilePath)
    .toString()
    .replace(/"/g, '')
    .split(',');

  names.sort();

  let total = 0;
  names.forEach((n, i) => {
    total += wordValue(n) * (i + 1);
  });

  return total;
}
