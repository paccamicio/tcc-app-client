import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutInitPageRoutingModule } from './checkout-init-routing.module';

import { CheckoutInitPage } from './checkout-init.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutInitPageRoutingModule
  ],
  declarations: [
    CheckoutInitPage,
    SmallNavbarComponent
  ]
})
export class CheckoutInitPageModule {}
