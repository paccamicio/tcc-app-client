import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.page.html',
  styleUrls: ['./upcoming-bookings.page.scss'],
})
export class UpcomingBookingsPage implements OnInit {

  public events: any = [
    {
      title: 'Beach Tennis',
      date: '10/11/21',
      hour: '09h',
      place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000'
    },
    {
      title: 'Pickeball',
      date: '16/12/21',
      hour: '19h',
      place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000'
    },
  ];

  constructor(
    public nc: NavController
  ) { }

  ngOnInit() {

  }

  public goTo(path: string) {
    this.nc.navigateForward('booking-details');
  }

}
