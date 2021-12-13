import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutInitPage } from './checkout-init.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutInitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutInitPageRoutingModule {}
