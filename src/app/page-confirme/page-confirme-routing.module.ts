import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConfirmeComponent } from './page-confirme.component';

const routes: Routes = [{ path: '', component: PageConfirmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageConfirmeRoutingModule { }
