import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtBookingPageRoutingModule } from './court-booking-routing.module';

import { CourtBookingPage } from './court-booking.page';
import { BookingCardAltComponent } from 'src/app/components/booking-card-alt/booking-card-alt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtBookingPageRoutingModule,
  ],
  declarations: [CourtBookingPage, BookingCardAltComponent],
})
export class CourtBookingPageModule {}
