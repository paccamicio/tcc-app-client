import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingBookingsPage } from './upcoming-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingBookingsPageRoutingModule {}
