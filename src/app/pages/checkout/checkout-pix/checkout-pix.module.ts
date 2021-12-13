import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPixPageRoutingModule } from './checkout-pix-routing.module';

import { CheckoutPixPage } from './checkout-pix.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';
import { UnderConstructionComponent } from 'src/app/components/layout/under-construction/under-construction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPixPageRoutingModule
  ],
  declarations: [
    CheckoutPixPage,
    SmallNavbarComponent,
    UnderConstructionComponent
  ]
})
export class CheckoutPixPageModule {}
