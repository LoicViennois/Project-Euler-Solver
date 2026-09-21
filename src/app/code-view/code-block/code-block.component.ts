import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProblemsService } from '../../problems-list/problems.service';
import { FormatCodePipe } from '../format-code.pipe';

@Component({
  selector: 'euler-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
  imports: [FormatCodePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent {
  readonly source: Signal<string>;

  constructor() {
    const route = inject(ActivatedRoute);
    const problemsService = inject(ProblemsService);

    this.source = toSignal(
      route.params.pipe(
        switchMap(params => problemsService.getCode(+params['id'])),
      ),
      { initialValue: '' },
    );
  }
}
