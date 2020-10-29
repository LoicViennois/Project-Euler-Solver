/*
https://projecteuler.net/problem=02
*/
export function euler002(): number {
  let res = 0;

  let term0 = 1;
  let term1 = 2;
  res += term1;

  while (true) {
    const term = term1 + term0;
    if (term > 4000000.) {
      break;
    }
    if (term % 2 === 0) {
      res += term;
    }
    term0 = term1;
    term1 = term;
  }

  return res;
}
