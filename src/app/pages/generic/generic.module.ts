import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericPageRoutingModule } from './generic-routing.module';

import { GenericPage } from './generic.page';
import { SmallNavbarComponent } from 'src/app/components/layout/small-navbar/small-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericPageRoutingModule
  ],
  declarations: [
    GenericPage,
    SmallNavbarComponent
  ]
})
export class GenericPageModule {}
