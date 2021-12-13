import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingSelectorPage } from './booking-type-selector.page';

const routes: Routes = [
  {
    path: '',
    component: BookingSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingSelectorPageRoutingModule {}
