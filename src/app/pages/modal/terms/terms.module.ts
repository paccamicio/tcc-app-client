import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsPageRoutingModule } from './terms-routing.module';

import { TermsPage } from './terms.page';
import { DefaultWrapperComponent } from 'src/app/components/default-wrapper/default-wrapper.component';
import { BtnComponent } from 'src/app/components/layout/btn/btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsPageRoutingModule
  ],
  declarations: [
    TermsPage,
    BtnComponent,
    DefaultWrapperComponent
  ]
})
export class TermsPageModule {}
