import { factorial } from '../maths';
import { range } from '../utils';

/*
https://projecteuler.net/problem=24
*/
export function euler024(): number {
  let availNums = range(10);
  const pickedNums = [];

  const limit = 1e6;
  let place = 0;

  // Pick function
  const pickOne = (nums: number[]): number => {
    for (const n of nums) {
      const newPlace = place + +factorial(nums.length - 1);
      if (newPlace >= limit) {
        return n;
      } else {
        place = newPlace;
      }
    }
    return null;
  };

  // Pick nums one by one
  while (availNums.length > 1) {
    const picked = pickOne(availNums);
    availNums = availNums.filter(k => k !== picked);
    pickedNums.push(picked);
  }

  // Push the last one
  pickedNums.push(availNums[0]);

  return +pickedNums.join('');

}
