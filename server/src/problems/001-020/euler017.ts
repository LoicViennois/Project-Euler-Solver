import { range } from '../utils';
import { toWords } from 'number-to-words';

/*
https://projecteuler.net/problem=17
*/
export function euler017(): number {
  let nbLetters = 0;
  for (const num of range(1, 1001)) {
    const words = toWords(num)
      .replace(/hundred\s/g, 'hundredand')
      .replace(/\s/g, '')
      .replace('-', '');
    nbLetters += words.length;
  }

  return nbLetters;
}
