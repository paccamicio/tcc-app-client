import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPixPage } from './checkout-pix.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutPixPageRoutingModule {}
