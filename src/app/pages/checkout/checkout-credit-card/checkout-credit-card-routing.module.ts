import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutCreditCardPage } from './checkout-credit-card.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutCreditCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutCreditCardPageRoutingModule {}
