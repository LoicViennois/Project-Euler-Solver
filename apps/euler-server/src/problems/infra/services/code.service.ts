import * as fs from 'node:fs';

import {
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { problemsPack1 } from '../../core/problems-001-020/index.js';
import { problemsPack2 } from '../../core/problems-021-040/index.js';
import { problemsPack3 } from '../../core/problems-041-060/index.js';
import { problemsPack4 } from '../../core/problems-061-080/index.js';
import { EulerProblem } from '../../core/types/euler-problem.js';

@Injectable()
export class CodeService {
  getCode(id: number) {
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

    return this.readCode(problem.codeFilePath);
  }

  private listProblems(): EulerProblem[] {
    return [
      ...problemsPack1,
      ...problemsPack2,
      ...problemsPack3,
      ...problemsPack4,
    ];
  }

  private readCode(filePath: string) {
    return fs.readFileSync(filePath).toString();
  }
}
