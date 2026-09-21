import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'euler-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  badgeUrl = 'https://projecteuler.net/profile/LoicViennois.png';
}
