import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {

  public myHistory: any = [
    {
      title: 'Beach Tennis',
      date: '10/11/21',
      hour: '09h',
      place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
      imageUrl: '/assets/image/beach.jpg',
    },
    {
      title: 'Pickeball',
      date: '16/12/21',
      hour: '19h',
      place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
      imageUrl: '/assets/image/pickle.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
