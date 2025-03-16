import {
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { problemsPack1 } from '@problems/core/problems-001-020';
import { problemsPack2 } from '@problems/core/problems-021-040';
import { problemsPack3 } from '@problems/core/problems-041-060';
import { problemsPack4 } from '@problems/core/problems-061-080';
import { EulerProblem } from '@problems/core/types/euler-problem';
import { ProblemFunction } from '@problems/core/types/problem-function';
import { Solution } from '@problems/core/types/solution';

@Injectable()
export class SolveService {
  solveProblem(id: number): Solution {
    const problem = this.listProblems().find((ps) => ps.id === id);

    if (!problem) {
      const message = `Problem ${id} is not found`;
      Logger.error(message, this.constructor.name);
      throw new NotFoundException(message);
    }

    if (!problem.solver) {
      const message = `Problem ${id} is not solved yet`;
      Logger.error(message, this.constructor.name);
      throw new UnprocessableEntityException(message);
    }

    const [value, time] = this.executionTime(problem.solver);

    return {
      time: time,
      value: value,
    };
  }

  private listProblems(): EulerProblem[] {
    return [
      ...problemsPack1,
      ...problemsPack2,
      ...problemsPack3,
      ...problemsPack4,
    ];
  }

  private executionTime(func: ProblemFunction): [number, string] {
    const start = +new Date();
    const result = func();
    const end = +new Date();
    return [result, this.millisecondsToTimeString(end - start)];
  }

  private millisecondsToTimeString(milliseconds: number): string {
    const ms = milliseconds % 1000;
    milliseconds = (milliseconds - ms) / 1000;
    const secs = milliseconds % 60;
    milliseconds = (milliseconds - secs) / 60;
    const mins = milliseconds % 60;

    // return hrs + "h " + mins + "m " + secs + "s " + ms + "ms";
    const s1 = mins ? mins + 'm ' : '';
    const s2 = secs ? secs + 's ' : '';
    const s3 = ms ? ms + 'ms' : '<1ms';
    return s1 + s2 + s3;
  }
}
