import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { version } from '../../../../package.json';


@Component({
  selector: 'euler-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  readonly version: string = version;

  constructor(public activeModal: NgbActiveModal) {
  }

}

