import { Module } from '@nestjs/common';

import { ProblemsController } from './infra/problems.controller.js';
import { CodeService } from './infra/services/code.service.js';
import { ProblemsService } from './infra/services/problems.service.js';
import { SolveService } from './infra/services/solve.service.js';

@Module({
  controllers: [ProblemsController],
  providers: [ProblemsService, SolveService, CodeService],
})
export class ProblemsModule {}
