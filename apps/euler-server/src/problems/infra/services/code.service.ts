import {
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { problemsPack1 } from '@problems/core/problems-001-020';
import { problemsPack2 } from '@problems/core/problems-021-040';
import { problemsPack3 } from '@problems/core/problems-041-060';
import { problemsPack4 } from '@problems/core/problems-061-080';
import { EulerProblem } from '@problems/core/types/euler-problem';

@Injectable()
export class CodeService {
  constructor(private readonly configService: ConfigService) {}

  getCodeUrl(id: number): string {
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

    return this.generateGithubUrl(problem.codeFilePath);
  }

  private listProblems(): EulerProblem[] {
    return [
      ...problemsPack1,
      ...problemsPack2,
      ...problemsPack3,
      ...problemsPack4,
    ];
  }

  private generateGithubUrl(filePath: string): string {
    const prefix = this.configService.get<string>('github.prefix');

    const pathMatch = filePath.match(/problems\/core\/.*/);
    const relativePath = pathMatch ? pathMatch[0] : '';

    return `${prefix}/${relativePath}`;
  }
}
