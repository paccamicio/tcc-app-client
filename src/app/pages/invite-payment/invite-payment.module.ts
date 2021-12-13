import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitePaymentPageRoutingModule } from './invite-payment-routing.module';

import { InvitePaymentPage } from './invite-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitePaymentPageRoutingModule
  ],
  declarations: [InvitePaymentPage]
})
export class InvitePaymentPageModule {}
