import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

import { DefaultWrapperComponent } from 'src/app/components/default-wrapper/default-wrapper.component';
import { BrandHeaderComponent } from 'src/app/components/brand-header/brand-header.component';
import { SemiNavbarComponent } from 'src/app/components/layout/semi-navbar/semi-navbar.component';
import { TermsPage } from '../../modal/terms/terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ],
  declarations: [
    RegisterPage,
    DefaultWrapperComponent,
    SemiNavbarComponent,
    BrandHeaderComponent
  ]
})
export class RegisterPageModule {}
