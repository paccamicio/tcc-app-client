import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court-booking',
  templateUrl: './court-booking.page.html',
  styleUrls: ['./court-booking.page.scss'],
})
export class CourtBookingPage implements OnInit {

  public item: any =
  {
    title: 'Quadra',
    date: '10/11/21',
    hour: '09h',
    place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
    price: 300.0,
  };

  constructor() { }

  ngOnInit() {
  }

}
