import { range, without } from 'lodash';
import { bigFactorial } from '../maths';

export function euler024(): number {
  let availNums = range(10);
  const pickedNums = [];

  const limit = 1e6;
  let place = 0;

  // Pick function
  const pickOne = (nums: number[]): number => {
    for (const n of nums) {
      const newPlace = place + +bigFactorial(nums.length - 1);
      if (newPlace >= limit) {
        return n;
      } else {
        place = newPlace;
      }
    }
  };

  // Pick nums one by one
  while (availNums.length > 1) {
    const picked = pickOne(availNums);
    availNums = without(availNums, picked);
    pickedNums.push(picked);
  }

  // Push the last one
  pickedNums.push(availNums[0]);

  return +pickedNums.join('');

}
