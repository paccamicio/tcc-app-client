import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacySettingsPageRoutingModule } from './privacy-settings-routing.module';

import { PrivacySettingsPage } from './privacy-settings.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacySettingsPageRoutingModule
  ],
  declarations: [
    PrivacySettingsPage,
    SmallNavbarComponent
  ]
})
export class PrivacySettingsPageModule {}
