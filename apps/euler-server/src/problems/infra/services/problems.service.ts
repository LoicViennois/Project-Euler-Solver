import { Injectable } from '@nestjs/common';

import { problemsPack1 } from '../../core/problems-001-020/index.js';
import { problemsPack2 } from '../../core/problems-021-040/index.js';
import { problemsPack3 } from '../../core/problems-041-060/index.js';
import { problemsPack4 } from '../../core/problems-061-080/index.js';
import { EulerProblem } from '../../core/types/euler-problem.js';
import { Problem, Status } from '../types/problem.js';

@Injectable()
export class ProblemsService {
  getProblems(): Problem[] {
    return this.listProblems().map((problemSolver) =>
      this.createProblem(problemSolver),
    );
  }

  private listProblems(): EulerProblem[] {
    return [
      ...problemsPack1,
      ...problemsPack2,
      ...problemsPack3,
      ...problemsPack4,
    ];
  }

  private createProblem(problemSolver: EulerProblem): Problem {
    return {
      id: problemSolver.id,
      name: problemSolver.solver ? problemSolver.solver.name : null,
      status: problemSolver.solver ? Status.toSolve : Status.notAvailable,
    };
  }
}
