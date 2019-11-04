import { Component, OnInit } from '@angular/core'
import { Problem } from './problem'
import { ProblemsService } from './problems.service'
import { Chunkify } from '../utils/chunkify'

@Component({
  selector: 'euler-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.less']
})
export class ProblemsListComponent implements OnInit {
  problems: Problem[][] = [] // By chunks of 10

  constructor (private problemsService: ProblemsService) {
  }

  ngOnInit () {
    this.problemsService.getProblems().subscribe((problems: Problem[]) => {
      this.problems = Chunkify(problems, 10)
    })
  }

  solve (problems: Problem[]) {
    problems.forEach(p => {
      this.problemsService.solve(p).subscribe(solution => {
        p.solution = solution
      })
    })
  }

}
