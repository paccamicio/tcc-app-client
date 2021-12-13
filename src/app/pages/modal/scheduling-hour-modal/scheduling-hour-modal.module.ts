import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulingHourModalPageRoutingModule } from './scheduling-hour-modal-routing.module';

import { SchedulingHourModalPage } from './scheduling-hour-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulingHourModalPageRoutingModule
  ],
  declarations: [SchedulingHourModalPage]
})
export class SchedulingHourModalPageModule {}
