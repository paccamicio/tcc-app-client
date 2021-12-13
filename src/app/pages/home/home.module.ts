import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { BookingCardComponent } from 'src/app/components/booking-card/booking-card.component';
import { SearchPlayersComponent } from 'src/app/components/layout/search-players/search-players.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    FooterComponent,
    SearchPlayersComponent,
    BookingCardComponent
  ]
})
export class HomePageModule {}
