import { sum } from '../maths';
import { bigNumber2digits, range } from '../utils';

/*
https://projecteuler.net/problem=65
*/
export function euler065(): number {
  const terms = [BigInt(2), BigInt(1)];
  for (const i of range(1, 34)) {
    terms.push(...[BigInt(2) * BigInt(i), BigInt(1), BigInt(1)]);
  }

  const limit = 100;

  let nj = terms[limit - 1];
  let dj = BigInt(1);

  for (let j = limit - 1; j--; j === 0) {
    const aj = terms[j];
    const nj1 = nj;
    nj = nj * aj + dj;
    dj = nj1;
  }

  return sum(bigNumber2digits(nj));
}
