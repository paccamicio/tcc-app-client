import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPlayersPageRoutingModule } from './search-players-routing.module';

import { SearchPlayersPage } from './search-players.page';
import { ModalHeaderComponent } from 'src/app/components/layout/modal-header/modal-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPlayersPageRoutingModule
  ],
  declarations: [
    SearchPlayersPage,
    ModalHeaderComponent
  ]
})
export class SearchPlayersPageModule {}
