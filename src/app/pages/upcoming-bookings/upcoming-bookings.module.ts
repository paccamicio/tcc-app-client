import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingBookingsPageRoutingModule } from './upcoming-bookings-routing.module';

import { UpcomingBookingsPage } from './upcoming-bookings.page';
import { BookingCardComponent } from 'src/app/components/booking-card/booking-card.component';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingBookingsPageRoutingModule
  ],
  declarations: [
    UpcomingBookingsPage,
    BookingCardComponent,
    SmallNavbarComponent
  ]
})
export class UpcomingBookingsPageModule {}
