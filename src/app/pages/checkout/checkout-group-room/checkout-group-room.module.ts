import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutGroupRoomPageRoutingModule } from './checkout-group-room-routing.module';

import { CheckoutGroupRoomPage } from './checkout-group-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutGroupRoomPageRoutingModule
  ],
  declarations: [CheckoutGroupRoomPage]
})
export class CheckoutGroupRoomPageModule {}
