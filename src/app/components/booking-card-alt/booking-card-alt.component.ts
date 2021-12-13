import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card-alt',
  templateUrl: './booking-card-alt.component.html',
  styleUrls: ['./booking-card-alt.component.scss'],
})
export class BookingCardAltComponent implements OnInit {
  @Input() booking;

  constructor() { }

  ngOnInit() {}

}
