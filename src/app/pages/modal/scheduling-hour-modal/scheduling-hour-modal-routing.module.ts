import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingHourModalPage } from './scheduling-hour-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulingHourModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulingHourModalPageRoutingModule {}
