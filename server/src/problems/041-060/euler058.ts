import { isPrime } from '../maths';

export function euler058(): number {
  let step = 1;
  const corners = [1];
  const primeCorners = [];
  let n = 2;
  let ratio = 1;

  function increment(): void {
    n += step;
    corners.push(n);
    if (isPrime(n)) {
      primeCorners.push(n);
    }
  }

  while (ratio >= 0.1) {
    increment();
    step += 1;
    increment();
    increment();
    step += 1;
    increment();
    ratio = primeCorners.length / corners.length;
  }

  return step;
}
