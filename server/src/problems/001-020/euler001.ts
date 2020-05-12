
export function euler001 (): number {
  const limit = 999

  function sumOfDivisors (n, max) {
    const maxMultipler = Math.floor(max / n)
    return n * maxMultipler * (maxMultipler + 1) / 2
  }

  return sumOfDivisors(3, limit) + sumOfDivisors(5, limit) - sumOfDivisors(15, limit)
}
