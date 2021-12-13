import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitePaymentPage } from './invite-payment.page';

const routes: Routes = [
  {
    path: '',
    component: InvitePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitePaymentPageRoutingModule {}
