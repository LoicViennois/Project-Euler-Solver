import { Controller, Get, Logger, Param, ParseIntPipe } from '@nestjs/common';

import { Solution } from '@problems/core/types/solution';

import { CodeService } from './services/code.service';
import { ProblemsService } from './services/problems.service';
import { SolveService } from './services/solve.service';
import { Problem } from './types/problem';

@Controller('problems')
export class ProblemsController {
  constructor(
    private readonly problemsService: ProblemsService,
    private readonly solveService: SolveService,
    private readonly codeService: CodeService,
  ) {}

  @Get()
  getProblems(): Problem[] {
    Logger.log(`Get all problems`, this.constructor.name);
    return this.problemsService.getProblems();
  }

  @Get('/solve/:id')
  solveProblem(@Param('id', ParseIntPipe) id: number): Solution {
    Logger.log(`Solve problem ${id}`, this.constructor.name);
    return this.solveService.solveProblem(id);
  }

  @Get('/code/:id')
  getCode(@Param('id', ParseIntPipe) id: number): string {
    Logger.log(`Get code for problem ${id}`, this.constructor.name);
    return this.codeService.getCode(id);
  }
}
