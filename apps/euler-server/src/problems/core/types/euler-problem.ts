import { ProblemFunction } from './problem-function';

export type EulerProblem = {
  id: number;
  solver: null | ProblemFunction;
  codeFilePath: string;
};
