import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.page.html',
  styleUrls: ['./generic.page.scss'],
})
export class GenericPage implements OnInit {

  public comments;

  constructor(
    public nc: NavController
  ) {
    this.comments = [
      {
        thumb: 'https://jpimg.com.br/uploads/2021/10/joshua-cavallo.jpg',
        name: 'Israell Paccamicio',
        when: 'há 2 horas',
        comment: 'Eu gostei muito, foi uma experiência marcante'
      },
      {
        thumb: 'https://s2.glbimg.com/cWAhH1RK4LP6_SlOXHEy3Ml03yc=/e.glbimg.com/og/ed/f/original/2021/04/13/sarah-andrade-exbbb21.jpg',
        name: 'Sarah Santos',
        when: 'há 18 horas',
        comment: 'Foi incrível!'
      },
      {
        thumb: 'https://jpimg.com.br/uploads/2021/10/joshua-cavallo.jpg',
        name: 'Luiz Fernando',
        when: 'há 11 semanas',
        comment: 'Caramba, voltarei sempre.'
      }
    ];
  }

  ngOnInit() {
  }

  public continueBooking() {
    this.nc.navigateForward('booking-options');
  }
}
