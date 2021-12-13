import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingHistoryPageRoutingModule } from './booking-history-routing.module';

import { BookingHistoryPage } from './booking-history.page';
import { BookingCardComponent } from 'src/app/components/booking-card/booking-card.component';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingHistoryPageRoutingModule
  ],
  declarations: [
    BookingHistoryPage,
    BookingCardComponent,
    SmallNavbarComponent
  ]
})
export class BookingHistoryPageModule {}
