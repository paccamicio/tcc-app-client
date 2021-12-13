import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingOptionsPageRoutingModule } from './booking-options-routing.module';
import { CalendarComponent, CalendarModule } from 'ion2-calendar';

import { BookingOptionsPage } from './booking-options.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';
import { ModalComponent } from 'src/app/components/layout/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingOptionsPageRoutingModule,
    CalendarModule
  ],
  declarations: [
    BookingOptionsPage,
    SmallNavbarComponent,
    ModalComponent
  ]
})
export class BookingOptionsPageModule {}
