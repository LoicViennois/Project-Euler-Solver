import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'euler-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly commitSha = environment.commitSha;
  readonly shortSha = environment.shortSha;
  readonly commitUrl = this.commitSha && this.commitSha !== 'dev'
    ? `https://github.com/LoicViennois/Project-Euler-Solver/commit/${this.commitSha}`
    : 'https://github.com/LoicViennois/Project-Euler-Solver';
}
