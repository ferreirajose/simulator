import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { SimulatorRes } from './../../simulator/response';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title?: string;
  response!: SimulatorRes;

  constructor(public bsModalRef: BsModalRef, private router: Router) {
    this.response = {
      valueInstallments: 0,
      numberInstallments: 0,
      totalWithInterest: 0
    }
  }

  confirme() {
    this.bsModalRef.hide();
    setTimeout(() => {
      this.router.navigate(['page-confirme'], {state: this.response})
    })
  }

  cancel() {
    this.bsModalRef.hide();
  }

}
