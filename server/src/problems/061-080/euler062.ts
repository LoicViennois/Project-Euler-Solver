import { number2digits, range } from '../utils';
import { min } from '../maths';

/*
https://projecteuler.net/problem=62
*/
export function euler062(): number {
  const cubes = new Map();

  for (const val of range(1e4)) {
    const cube = val ** 3;
    const cubeDigits = number2digits(cube).sort().join('');
    if (cubes.has(cubeDigits)) {
      cubes.set(cubeDigits, [...cubes.get(cubeDigits), cube]);
      if (cubes.get(cubeDigits).length === 5) {
        return min(cubes.get(cubeDigits));
      }
    } else {
      cubes.set(cubeDigits, [cube]);
    }
  }

  return null;
}
