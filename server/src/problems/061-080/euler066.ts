import { findPeriod } from './euler064';

function computeContinuedFraction(terms: number[]): [number, number] {
  const limit = terms.length;

  let ni = terms[limit - 1];
  let di = 1;

  for (let i = limit - 1; i--; i >= 0) {
    const aj = terms[i];
    const nj1 = ni;
    ni = ni * aj + di;
    di = nj1;
  }
  return [ni, di];
}

/*
https://projecteuler.net/problem=66
*/
export function euler066(): number {
  let xMax = 0;
  let dMax = 0;
  for (let d = 2; d <= 1000; d++) {
    const sqrt = Math.sqrt(d);
    if (sqrt === Math.floor(sqrt)) {
      continue;
    }
    const [period, terms] = findPeriod(d);
    let [num, denum] = [0, 0];
    if (period % 2 === 1) {
      const termsToCompute = [...terms, ...terms.slice(1, terms.length - 1)];
      [num, denum] = computeContinuedFraction(termsToCompute);
    } else {
      const termsToCompute = [...terms.slice(0, terms.length - 1)];
      [num, denum] = computeContinuedFraction(termsToCompute);
    }
    if (num > xMax) {
      xMax = num;
      dMax = d;
    }
  }

  return dMax;
}
