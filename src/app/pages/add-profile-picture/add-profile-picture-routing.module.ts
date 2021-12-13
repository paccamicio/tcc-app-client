import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfilePicturePage } from './add-profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: AddProfilePicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfilePicturePageRoutingModule {}
