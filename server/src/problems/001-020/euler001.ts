export function euler001(): number {
  const limit = 999;

  function sumOfDivisors(n, max): number {
    const maxMultiplier = Math.floor(max / n);
    return n * maxMultiplier * (maxMultiplier + 1) / 2;
  }

  return sumOfDivisors(3, limit) + sumOfDivisors(5, limit) - sumOfDivisors(15, limit);
}
