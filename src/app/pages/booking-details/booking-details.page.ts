import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  public item: any =
  {
    title: 'Quadra',
    date: '10/11/21',
    hour: '09h',
    place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
    price: 300,
  };

  constructor(
    public nc: NavController,
    public ac: AlertController
  ) { }

  ngOnInit() {}

  public goTo(path: string) {
    this.nc.navigateForward('booking-details');
  }

  public async cancelBooking() {
    const alert = await this.ac.create({
      header: 'Cancelamento de reserva',
      message: `Você tem certeza que deseja cancelar o agendamento? (Se faltar menos de 24 horas para a data do seu agendamento você não poderá reagendar).`,
      buttons: ['Voltar', 'Tenho certeza! Cancele.']
    });

    return alert.present();
  }

}
