import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimulatorRes } from './../simulator/response';

@Component({
  selector: 'app-page-confirme',
  templateUrl: './page-confirme.component.html',
  styleUrls: ['./page-confirme.component.scss']
})
export class PageConfirmeComponent {
  response: SimulatorRes | any;

  constructor(private router:Router) {
    this.response = this.router.getCurrentNavigation()?.extras.state ?? {valueInstallments: 0, numberInstallments: 0, totalWithInterest: 0};
  }

}
