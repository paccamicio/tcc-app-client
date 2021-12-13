import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtBookingPage } from './court-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CourtBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtBookingPageRoutingModule {}
