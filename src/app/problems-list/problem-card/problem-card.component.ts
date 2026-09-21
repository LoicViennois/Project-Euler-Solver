import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProblemsService } from '../problems.service';
import { Problem } from '../problem';

@Component({
  selector: 'euler-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.less'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemCardComponent {
  readonly problem = input.required<Problem>();
  readonly url = computed(() => `https://projecteuler.net/problem=${this.problem().id}`);
  private problemsService = inject(ProblemsService);

  solve(): void {
    this.problemsService.solve(this.problem()).subscribe((solution) => {
      this.problem().solution = solution;
    });
  }
}
