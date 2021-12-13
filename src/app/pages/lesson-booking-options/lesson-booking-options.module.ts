import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonBookingOptionsPageRoutingModule } from './lesson-booking-options-routing.module';
import { CalendarComponent, CalendarModule } from 'ion2-calendar';

import { LessonBookingOptionsPage } from './lesson-booking-options.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';
import { ModalComponent } from 'src/app/components/layout/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonBookingOptionsPageRoutingModule,
    CalendarModule,
  ],
  declarations: [
    LessonBookingOptionsPage,
    SmallNavbarComponent,
    ModalComponent,
  ]
})
export class LessonBookingOptionsPageModule {}
