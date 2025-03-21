import { Component, inject, OnInit } from '@angular/core';
import { Problem } from '../problems-list/problem';
import { ProblemsService } from '../problems-list/problems.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'euler-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.less'],
  imports: [
    RouterLink,
    NgFor,
    RouterLinkActive,
    NgIf,
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
