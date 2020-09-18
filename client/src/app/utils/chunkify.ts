export function Chunkify<T>(array: T[], n: number): T[][] {
  const chunks = [];
  let chunk = [];
  array.forEach((a, i: number) => {
    if (i % n === 0 && i > 0) {
      chunks.push(chunk);
      chunk = [];
    }
    chunk.push(a);
  });
  chunks.push(chunk);

  return chunks;
}
