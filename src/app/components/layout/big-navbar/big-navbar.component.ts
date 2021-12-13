import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-big-navbar',
  templateUrl: './big-navbar.component.html',
  styleUrls: ['./big-navbar.component.scss'],
})
export class BigNavbarComponent implements OnInit {

  constructor(
    public nc: NavController
  ) { }

  ngOnInit() {}

  public back() {
    this.nc.back();
  }

}
