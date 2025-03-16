import { Module } from '@nestjs/common';

import { ProblemsController } from './infra/problems.controller';
import { CodeService } from './infra/services/code.service';
import { ProblemsService } from './infra/services/problems.service';
import { SolveService } from './infra/services/solve.service';

@Module({
  controllers: [ProblemsController],
  providers: [ProblemsService, SolveService, CodeService],
})
export class ProblemsModule {}
