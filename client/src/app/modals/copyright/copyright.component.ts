import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { version } from '../../../../package.json'


@Component({
  selector: 'euler-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.less']
})
export class CopyrightComponent {
  readonly version: string = version

  constructor (public activeModal: NgbActiveModal) {
  }

}

