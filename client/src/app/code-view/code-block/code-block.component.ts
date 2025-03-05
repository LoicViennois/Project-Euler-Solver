import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from '../../problems-list/problems.service';

@Component({
  selector: 'euler-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
})
export class CodeBlockComponent implements OnInit {
  source = '';

  constructor(private route: ActivatedRoute,
              private problemsService: ProblemsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.problemsService.getCode(+params.id).subscribe((source: string) => {
        this.source = source;
      });
    });
  }

}
