import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageConfirmeRoutingModule } from './page-confirme-routing.module';
import { PageConfirmeComponent } from './page-confirme.component';


@NgModule({
  declarations: [
    PageConfirmeComponent
  ],
  imports: [
    CommonModule,
    PageConfirmeRoutingModule
  ]
})
export class PageConfirmeModule { }
