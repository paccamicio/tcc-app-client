import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutGroupInitPageRoutingModule } from './checkout-group-init-routing.module';

import { CheckoutGroupInitPage } from './checkout-group-init.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutGroupInitPageRoutingModule
  ],
  declarations: [CheckoutGroupInitPage]
})
export class CheckoutGroupInitPageModule {}
