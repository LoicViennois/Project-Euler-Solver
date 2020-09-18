import { union } from 'lodash';
import { dividers } from '../maths';

export function euler012(): number {

  const un = (k) => {
    return (k + 1) * k / 2.;
  };

  let n = 1.;
  let tick = true;
  let divs = [];
  while (divs.length <= 500) {
    n += 1.;
    let divs1: number[];
    let divs2: number[];

    if (tick) {
      divs1 = dividers(n / 2.);
      divs2 = dividers(n + 1.);
    } else {
      divs1 = dividers((n + 1) / 2.);
      divs2 = dividers(n);
    }

    tick = !tick;
    const others: number[] = [];
    for (const div1 of divs1) {
      for (const div2 of divs2) {
        others.push(div1 * div2);
      }
    }
    divs = union(divs1, divs2, others);
  }

  return un(n);
}
