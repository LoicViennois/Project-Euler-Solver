import { Component, inject, OnInit } from '@angular/core';
import { Problem } from '../problems-list/problem';
import { ProblemsService } from '../problems-list/problems.service';
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
})
export class CodeViewComponent implements OnInit {
  problems: Problem[];
  private problemsService = inject(ProblemsService);


  ngOnInit(): void {
    this.problemsService.getProblems().subscribe(problems => {
      this.problems = problems.filter(p => p.isAvailable);
    });
  }

}
