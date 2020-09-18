import { sieve, sum } from '../maths';

export function euler010(): number {
  return sum(sieve(2e6));
}
