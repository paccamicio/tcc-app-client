import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingGymSelectorPage } from './booking-gym-selector.page';

const routes: Routes = [
  {
    path: '',
    component: BookingGymSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingGymSelectorPageRoutingModule {}
