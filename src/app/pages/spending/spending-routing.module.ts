import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpendingPage } from './spending.page';

const routes: Routes = [
  {
    path: '',
    component: SpendingPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpendingPageRoutingModule {}
