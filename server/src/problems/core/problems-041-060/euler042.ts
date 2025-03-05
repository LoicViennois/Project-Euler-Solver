import * as fs from 'fs';
import * as path from 'node:path';

import { max } from '@problems/core/maths';
import { wordValue } from '@problems/core/utils';

/*
https://projecteuler.net/problem=42
*/
export function euler042(): number {
  const triangle = (n: number): number => {
    return (n * (n + 1)) / 2;
  };

  const assetFilePath = path.resolve(__dirname, './assets/p042_words.txt');
  const words = fs
    .readFileSync(assetFilePath)
    .toString()
    .replace(/"/g, '')
    .split(',');

  // Max triangle number is the length of the longest word * 26 (for ZZZZZZ...)
  const maxTriangleNumber = max(words.map((w) => w.length)) * 26;

  const triangleNumbers: number[] = [];
  let t = 0;
  let i = 1;
  while (t < maxTriangleNumber) {
    t = triangle(i);
    triangleNumbers.push(t);
    i += 1;
  }

  let nbTriangleWords = 0;
  words.forEach((w) => {
    if (triangleNumbers.includes(wordValue(w))) {
      nbTriangleWords += 1;
    }
  });

  return nbTriangleWords;
}
