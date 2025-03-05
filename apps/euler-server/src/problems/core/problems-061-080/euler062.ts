import { SolutionNotFoundError } from '@problems/core/errors/solution-not-found.error';
import { min } from '@problems/core/maths';
import { number2digits, range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=62
*/
export function euler062(): number {
  const cubesMap = new Map<string, number[]>();

  for (const val of range(1e4)) {
    const cube = val ** 3;
    const cubeDigits = number2digits(cube).sort().join('');
    const cubes = cubesMap.get(cubeDigits);

    if (cubes) {
      const newValue = [...cubes, cube];
      cubesMap.set(cubeDigits, newValue);
      if (newValue.length === 5) {
        return min(newValue);
      }
    } else {
      cubesMap.set(cubeDigits, [cube]);
    }
  }

  throw new SolutionNotFoundError('euler062');
}
