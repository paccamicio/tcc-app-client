import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfilePicturePageRoutingModule } from './add-profile-picture-routing.module';

import { AddProfilePicturePage } from './add-profile-picture.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfilePicturePageRoutingModule
  ],
  declarations: [
    AddProfilePicturePage,
    SmallNavbarComponent
  ]
})
export class AddProfilePicturePageModule {}
