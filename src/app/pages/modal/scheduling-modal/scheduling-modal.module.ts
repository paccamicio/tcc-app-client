import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulingModalPageRoutingModule } from './scheduling-modal-routing.module';
import { CalendarModule } from 'ion2-calendar';

import { SchedulingModalPage } from './scheduling-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulingModalPageRoutingModule,
    CalendarModule
  ],
  declarations: [
    SchedulingModalPage,
  ]
})
export class SchedulingModalPageModule {}
