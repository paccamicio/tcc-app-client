import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingDetailsPageRoutingModule } from './booking-details-routing.module';

import { BookingDetailsPage } from './booking-details.page';
import { BookingCardAltComponent } from 'src/app/components/booking-card-alt/booking-card-alt.component';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingDetailsPageRoutingModule
  ],
  declarations: [
    BookingDetailsPage,
    BookingCardAltComponent,
    SmallNavbarComponent
  ]
})
export class BookingDetailsPageModule {}
