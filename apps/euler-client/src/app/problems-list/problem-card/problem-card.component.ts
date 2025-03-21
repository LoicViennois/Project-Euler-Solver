import { Component, inject, Input, OnInit } from '@angular/core';
import { ProblemsService } from '../problems.service';
import { Problem } from '../problem';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'euler-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.less'],
  imports: [RouterLink, NgIf],
})
export class ProblemCardComponent implements OnInit {
  @Input() problem: Problem;
  url: string;
  private problemsService = inject(ProblemsService);
  private baseUrl = 'https://projecteuler.net/problem=';

  ngOnInit(): void {
    this.url = `${this.baseUrl}${this.problem.id}`;
  }

  solve(): void {
    this.problemsService.solve(this.problem).subscribe((solution) => {
      this.problem.solution = solution;
    });
  }

}
