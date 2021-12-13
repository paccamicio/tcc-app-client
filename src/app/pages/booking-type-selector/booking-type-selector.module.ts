import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingSelectorPageRoutingModule } from './booking-type-selector-routing.module';

import { BookingSelectorPage } from './booking-type-selector.page';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingSelectorPageRoutingModule,
  ],
  declarations: [
    BookingSelectorPage,
    SmallNavbarComponent,
  ]
})
export class BookingSelectorPageModule {}
