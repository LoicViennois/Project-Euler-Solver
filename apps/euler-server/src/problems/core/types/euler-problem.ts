import { ProblemFunction } from './problem-function.js';

export type EulerProblem = {
  id: number;
  solver: null | ProblemFunction;
  codeFilePath: string;
};
