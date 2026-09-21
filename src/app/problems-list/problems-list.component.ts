import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Problem } from './problem';
import { ProblemsService } from './problems.service';
import { Chunkify } from '../utils/chunkify';

import { ProblemCardComponent } from './problem-card/problem-card.component';
import { FirstIdPipe, LastIdPipe } from './problem-id.pipe';

@Component({
  selector: 'euler-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.less'],
  imports: [
    ProblemCardComponent,
    FirstIdPipe,
    LastIdPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemsListComponent {
  readonly problems: Signal<Problem[][]>;
  private readonly problemsService = inject(ProblemsService);

  constructor() {
    this.problems = toSignal(
      this.problemsService.getProblems().pipe(
        map(problems => Chunkify(problems, 10)),
      ),
      { initialValue: [] },
    );
  }

  solve(problems: Problem[]): void {
    problems.forEach(p => {
      this.problemsService.solve(p).subscribe(solution => {
        p.solution = solution;
      });
    });
  }
}
