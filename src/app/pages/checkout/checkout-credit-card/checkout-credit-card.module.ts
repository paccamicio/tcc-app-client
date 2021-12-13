import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutCreditCardPageRoutingModule } from './checkout-credit-card-routing.module';

import { CheckoutCreditCardPage } from './checkout-credit-card.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';
import { BrMaskerModule } from 'br-mask';
import { BtnComponent } from 'src/app/components/layout/btn/btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CheckoutCreditCardPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [
    CheckoutCreditCardPage,
    SmallNavbarComponent,
    BtnComponent,
  ]
})
export class CheckoutCreditCardPageModule {}
