import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scheduling-hour-modal',
  templateUrl: './scheduling-hour-modal.page.html',
  styleUrls: ['./scheduling-hour-modal.page.scss'],
})
export class SchedulingHourModalPage implements OnInit {

  public userChoice = '';

  public hours = [
    [
      { value: '06:00', selected: false, enabled: true, text: '06:00 às 06:55' },
      { value: '07:00', selected: false, enabled: true, text: '07:00 às 07:55' },
      { value: '08:00', selected: false, enabled: true, text: '08:00 às 08:55' },
      { value: '09:00', selected: false, enabled: true, text: '09:00 às 09:55' },
    ],
    [
      { value: '10:00', selected: false, enabled: true, text: '10:00 às 10:55' },
      { value: '11:00', selected: false, enabled: true, text: '11:00 às 11:55' },
      { value: '12:00', selected: false, enabled: true, text: '12:00 às 12:55' },
      { value: '13:00', selected: false, enabled: true, text: '13:00 às 13:55' },
    ],
    [
      { value: '14:00', selected: false, enabled: true, text: '14:00 às 14:55' },
      { value: '15:00', selected: false, enabled: true, text: '15:00 às 15:55' },
      { value: '16:00', selected: false, enabled: false, text: '16:00 às 16:55' },
      { value: '17:00', selected: false, enabled: true, text: '17:00 às 17:55' },
    ],
    [
      { value: '18:00', selected: false, enabled: true, text: '18:00 às 18:55' },
      { value: '19:00', selected: false, enabled: false, text: '19:00 às 19:55' },
      { value: '20:00', selected: false, enabled: false, text: '20:00 às 20:55' },
      { value: '21:00', selected: false, enabled: true, text: '21:00 às 21:55' }
    ]
  ];

  constructor(
    public mc: ModalController
  ) { }

  ngOnInit() { }

  selectHour(row, col, hour: any) {

    if (this.userChoice !== '') {
      this.userChoice = '';
      this.hours.forEach((r, i) => {
        r.forEach((c, j) => {
          this.hours[i][j].selected = false;
        });
      });
    }

    this.userChoice = hour.text;
    this.hours[row][col].selected = true;
  }

  public dismiss() {
    return this.mc.dismiss(this.userChoice);
  }
}
