import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {
  @Input() booking;
  @Input() cancel = 'Sim';
  @Input() cancelText = 'Cancelar';
  @Input() cancelFunction = function(){return};

  constructor() {}

  ngOnInit() {}

  public goToDetail(booking: any) {}

  public showCancel(cancel: any) {
    if (!cancel || cancel == 'none' || cancel == 'off' || cancel == 'no') {
      return false;
    }
    return true;
  }
}
