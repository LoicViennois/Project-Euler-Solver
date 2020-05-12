import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProblemsService } from '../../problems-list/problems.service'

@Component({
  selector: 'euler-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent implements OnInit {
  source = ''

  constructor (private route: ActivatedRoute,
               private problemsService: ProblemsService) {
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      const name: string = params['name']
      this.problemsService.getCode(name).subscribe((source: string) => {
        this.source = source
      })
    })
  }

}
