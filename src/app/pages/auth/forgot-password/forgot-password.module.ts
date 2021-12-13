import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { SemiNavbarComponent } from 'src/app/components/layout/semi-navbar/semi-navbar.component';
import { BrandHeaderComponent } from 'src/app/components/brand-header/brand-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule
  ],
  declarations: [
    ForgotPasswordPage,
    BrandHeaderComponent,
    SemiNavbarComponent
  ]
})
export class ForgotPasswordPageModule {}
