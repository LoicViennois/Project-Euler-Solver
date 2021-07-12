/*
https://projecteuler.net/problem=17
*/
export function euler017(): number {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', ...units.slice(1).map((unit) => unit + 'hundred')];

  let allCustomWords: string[] = [];
  for (const hundred of hundreds) {
    for (const ten of tens) {
      for (const unit of units) {
        allCustomWords.push(hundred + ten + unit);
      }
    }
  }
  allCustomWords.shift();
  allCustomWords = allCustomWords.map((val) => {
    return val.replace(/hundred$/, 'tmp')
      .replace(/hundred/, 'hundredand')
      .replace('tmp', 'hundred')
      .replace('tenone', 'eleven')
      .replace('tentwo', 'twelve')
      .replace('tenthree', 'thirteen')
      .replace('tenfour', 'fourteen')
      .replace('tenfive', 'fifteen')
      .replace('tensix', 'sixteen')
      .replace('tenseven', 'seventeen')
      .replace('teneight', 'eighteen')
      .replace('tennine', 'nineteen');
  });
  allCustomWords.push('onethousand');

  return allCustomWords.map((w) => w.length).reduce((a, b) => a + b);
}
