import { Component } from '@angular/core';

import pkg from '../../../package.json';


@Component({
  selector: 'euler-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  standalone: false,
})
export class AboutComponent {
  readonly version: string = pkg.version;

  constructor() {
  }

}

