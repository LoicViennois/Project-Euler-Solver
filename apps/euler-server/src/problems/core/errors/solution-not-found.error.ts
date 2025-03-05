export class SolutionNotFoundError extends Error {
  constructor(problemName: string) {
    super(`Solution not found for ${problemName}`);
  }
}
