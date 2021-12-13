import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutGroupInitPage } from './checkout-group-init.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutGroupInitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutGroupInitPageRoutingModule {}
