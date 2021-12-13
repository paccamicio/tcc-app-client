import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonBookingOptionsPage } from './lesson-booking-options.page';

const routes: Routes = [
  {
    path: '',
    component: LessonBookingOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonBookingOptionsPageRoutingModule {}
