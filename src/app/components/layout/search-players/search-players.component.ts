import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPlayersPage } from 'src/app/pages/modal/search-players/search-players.page';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.scss'],
})
export class SearchPlayersComponent implements OnInit {

  public modal :any;

  constructor(
    public mc: ModalController
  ) { }

  ngOnInit() { }

  public async openSearchModal() {
    this.modal = await this.mc.create({
      component: SearchPlayersPage,
      swipeToClose: true
    });

    return await this.modal.present();
  }
}
