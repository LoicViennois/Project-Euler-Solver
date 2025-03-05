import * as fs from 'fs';
import * as path from 'node:path';

import { max } from '@problems/core/maths';

/*
https://projecteuler.net/problem=67
*/
export function euler067(): number {
  const assetFilePath = path.resolve(__dirname, './assets/p067_triangle.txt');
  const rows = fs
    .readFileSync(assetFilePath)
    .toString()
    .split('\n')
    .filter((line) => line)
    .map((line) => {
      return line.split(' ').map((n) => +n);
    });

  const distances: number[] = new Array<number>(rows.length).fill(0);

  for (const row of rows) {
    const previousDistances = [...distances];
    for (const [index, col] of row.entries()) {
      distances[index] =
        col +
        max([previousDistances[index - 1] || 0, previousDistances[index]]);
    }
  }

  return max(distances);
}
