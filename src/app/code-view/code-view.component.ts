import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { ProblemsService } from '../problems-list/problems.service';
import { Problem } from '../problems-list/problem';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'euler-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.less'],
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeViewComponent {
  readonly problems: Signal<Problem[]>;

  constructor() {
    const problemsService = inject(ProblemsService);

    this.problems = toSignal(
      problemsService.getProblems().pipe(
        map(problems => problems.filter(p => p.isAvailable)),
      ),
      { initialValue: [] },
    );
  }
}
