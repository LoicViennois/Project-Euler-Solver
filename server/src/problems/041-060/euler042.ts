import * as fs from 'fs';
import * as path from 'path';

import { max } from '../maths';
import { wordValue } from '../utils';
import { assetsFolder } from '../assets-folder';

export function euler042(): number {

  const triangle = (n: number): number => {
    return n * (n + 1) / 2;
  };

  const words = fs.readFileSync(path.join(assetsFolder, 'p042_words.txt'))
    .toString()
    .replace(/"/g, '')
    .split(',');

  // Max triangle number is the length of the longest word * 26 (for ZZZZZZ...)
  const maxTriangleNumber = max(words.map((w) => w.length)) * 26;

  const triangleNumbers = [];
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
