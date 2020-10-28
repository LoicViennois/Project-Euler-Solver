import { arePermutations, range } from '../utils';

export function euler052(): number {
  for (const n of range(100, 1e6)) {
    if (arePermutations(n, 2 * n) &&
      arePermutations(n, 3 * n) &&
      arePermutations(n, 4 * n) &&
      arePermutations(n, 5 * n) &&
      arePermutations(n, 6 * n)) {
      return n;
    }
  }
}
