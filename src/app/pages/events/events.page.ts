import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
