import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCourtDetailsPageRoutingModule } from './booking-court-details-routing.module';

import { BookingCourtDetailsPage } from './booking-court-details.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingCourtDetailsPageRoutingModule
  ],
  declarations: [
    BookingCourtDetailsPage,
    SmallNavbarComponent
  ]
})
export class BookingCourtDetailsPageModule {}
