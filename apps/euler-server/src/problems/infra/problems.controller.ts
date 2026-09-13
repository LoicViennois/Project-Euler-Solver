import {
  Controller,
  Get,
  Header,
  Logger,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import type { Solution } from '../core/types/solution.js';

import { CodeService } from './services/code.service.js';
import { ProblemsService } from './services/problems.service.js';
import { SolveService } from './services/solve.service.js';
import type { Problem } from './types/problem.js';

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

  @Get(':id/solve')
  solveProblem(@Param('id', ParseIntPipe) id: number): Solution {
    Logger.log(`Solve problem ${id}`, this.constructor.name);
    return this.solveService.solveProblem(id);
  }

  @Get(':id/code')
  @Header('Content-Type', 'application/json')
  getCode(@Param('id', ParseIntPipe) id: number): string {
    Logger.log(`Get code for problem ${id}`, this.constructor.name);
    return JSON.stringify(this.codeService.getCode(id));
  }
}
