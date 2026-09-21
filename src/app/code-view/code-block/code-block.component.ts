import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from '../../problems-list/problems.service';
import { FormatCodePipe } from '../format-code.pipe';

@Component({
  selector: 'euler-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
  imports: [FormatCodePipe],
})
export class CodeBlockComponent implements OnInit {
  source = '';
  private route = inject(ActivatedRoute);
  private problemsService = inject(ProblemsService);


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.problemsService.getCode(+params.id).subscribe((source: string) => {
        this.source = source;
      });
    });
  }

}
