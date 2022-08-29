import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./simulator/simulator.module').then((m) => m.SimulatorModule),
  },
  {
    path: 'simulator',
    loadChildren: () =>
      import('./simulator/simulator.module').then((m) => m.SimulatorModule),
  },
  { path: '**', pathMatch: 'full',
  component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
