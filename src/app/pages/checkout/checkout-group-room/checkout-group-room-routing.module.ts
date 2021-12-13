import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutGroupRoomPage } from './checkout-group-room.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutGroupRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutGroupRoomPageRoutingModule {}
