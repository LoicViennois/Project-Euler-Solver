import { Component, OnInit } from '@angular/core';
import { Problem } from '../problems-list/problem';
import { ProblemsService } from '../problems-list/problems.service';

@Component({
  selector: 'euler-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.less']
})
export class CodeViewComponent implements OnInit {
  problems: Problem[];

  constructor(private problemsService: ProblemsService) {
  }

  ngOnInit(): void {
    this.problemsService.getProblems().subscribe(problems => {
      this.problems = problems.filter(p => p.isAvailable);
    });
  }

}
