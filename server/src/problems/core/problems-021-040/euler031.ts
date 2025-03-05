import { range } from '@problems/core/utils';

/*
https://projecteuler.net/problem=31
*/
export function euler031(): number {
  let comb = 0;

  for (const g of range(200 / 100 + 1)) {
    for (const f of range((200 - g * 100) / 50 + 1)) {
      for (const e of range((200 - f * 50) / 20 + 1)) {
        for (const d of range((200 - e * 20) / 10 + 1)) {
          for (const c of range((200 - d * 10) / 5 + 1)) {
            for (const b of range((200 - c * 5) / 2 + 1)) {
              for (const a of range(200 - b * 2 + 1)) {
                const sum =
                  a + b * 2 + c * 5 + d * 10 + e * 20 + f * 50 + g * 100;
                if (sum === 200) {
                  comb += 1;
                }
              }
            }
          }
        }
      }
    }
  }

  return comb + 1;
}
