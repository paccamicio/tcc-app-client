import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingCourtDetailsPage } from './booking-court-details.page';

const routes: Routes = [
  {
    path: '',
    component: BookingCourtDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingCourtDetailsPageRoutingModule {}
