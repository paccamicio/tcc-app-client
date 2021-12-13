import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() notification: any;
  // Format: (?)
  // {
  //   buttonText: ""
  //   message: ""
  //   timestamp: Date
  //   action: function
  //   cancelAction: function
  //   image: ""
  // },

  constructor() { }

  ngOnInit() {}

}
