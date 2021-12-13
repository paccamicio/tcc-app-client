import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scheduling-modal',
  templateUrl: './scheduling-modal.page.html',
  styleUrls: ['./scheduling-modal.page.scss'],
})
export class SchedulingModalPage implements OnInit {

  @Input() backPath: string;

  public date = '';

  constructor(
    public mc: ModalController
  ) { }

  ngOnInit() { }

  onChange($event) {
    this.date = $event;
  }

  public dismiss() {
    return this.mc.dismiss(this.date);
  }
}
