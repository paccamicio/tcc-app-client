import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingGymSelectorPageRoutingModule } from './booking-gym-selector-routing.module';

import { BookingGymSelectorPage } from './booking-gym-selector.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';
import { UnderConstructionComponent } from 'src/app/components/layout/under-construction/under-construction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingGymSelectorPageRoutingModule
  ],
  declarations: [
    BookingGymSelectorPage,
    SmallNavbarComponent,
    UnderConstructionComponent
  ]
})
export class BookingGymSelectorPageModule {}
