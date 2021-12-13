import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassIndividualBookingPageRoutingModule } from './class-individual-booking-routing.module';

import { ClassIndividualBookingPage } from './class-individual-booking.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassIndividualBookingPageRoutingModule
  ],
  declarations: [
    ClassIndividualBookingPage,
    SmallNavbarComponent,
  ]
})
export class ClassIndividualBookingPageModule {}
