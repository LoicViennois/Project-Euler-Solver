import * as fs from 'fs';
import * as path from 'path';
import { assetsFolder } from '../assets-folder';
import { max } from '../maths';

/*
https://projecteuler.net/problem=67
*/
export function euler067(): number {
  const rows = fs.readFileSync(path.join(assetsFolder, 'p067_triangle.txt'))
    .toString()
    .split('\n')
    .filter((line) => line)
    .map((line) => {
      return line.split(' ').map(n => +n);
    });

  const distances = new Array(rows.length).fill(0);

  for (const row of rows) {
    const previousDistances = [...distances];
    for (const [index, col] of row.entries()) {
      distances[index] = col + max([
        previousDistances[index - 1] || 0,
        previousDistances[index]
      ]);
    }
  }

  return max(distances);
}
