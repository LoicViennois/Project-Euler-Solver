import { Component, Input, OnInit } from '@angular/core'
import { ProblemsService } from '../problems.service'
import { Problem } from '../problem'


@Component({
  selector: 'euler-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.less']
})
export class ProblemCardComponent implements OnInit {
  @Input() problem: Problem

  url: string

  private baseUrl = 'https://projecteuler.net/problem='

  constructor (private problemsService: ProblemsService) {
  }

  ngOnInit () {
    this.url = `${this.baseUrl}${this.problem.id}`
  }

  solve () {
    this.problemsService.solve(this.problem).subscribe((solution) => {
      this.problem.solution = solution
    })
  }

}
