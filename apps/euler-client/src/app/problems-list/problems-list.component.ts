import { Component, inject, OnInit } from '@angular/core';
import { Problem } from './problem';
import { ProblemsService } from './problems.service';
import { Chunkify } from '../utils/chunkify';
import { NgFor, NgIf } from '@angular/common';
import { ProblemCardComponent } from './problem-card/problem-card.component';
import { FirstIdPipe, LastIdPipe } from './problem-id.pipe';

@Component({
  selector: 'euler-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.less'],
  imports: [
    NgIf,
    NgFor,
    ProblemCardComponent,
    FirstIdPipe,
    LastIdPipe,
  ],
})
export class ProblemsListComponent implements OnInit {
  problems: Problem[][] = [];
  private problemsService = inject(ProblemsService);


  ngOnInit(): void {
    this.problemsService.getProblems().subscribe((problems: Problem[]) => {
      this.problems = Chunkify(problems, 10);
    });
  }

  solve(problems: Problem[]): void {
    problems.forEach(p => {
      this.problemsService.solve(p).subscribe(solution => {
        p.solution = solution;
      });
    });
  }

}
