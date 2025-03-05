import { Module } from '@nestjs/common';

import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [ProblemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
