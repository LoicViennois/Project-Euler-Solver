import { Injectable } from '@nestjs/common';

import { problemsPack1 } from '@problems/core/problems-001-020';
import { problemsPack2 } from '@problems/core/problems-021-040';
import { problemsPack3 } from '@problems/core/problems-041-060';
import { problemsPack4 } from '@problems/core/problems-061-080';
import { EulerProblem } from '@problems/core/types/euler-problem';
import { Problem, Status } from '@problems/infra/types/problem';

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
