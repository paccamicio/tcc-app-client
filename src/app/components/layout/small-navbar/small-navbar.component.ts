import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-small-navbar',
  templateUrl: './small-navbar.component.html',
  styleUrls: ['./small-navbar.component.scss'],
})
export class SmallNavbarComponent implements OnInit {

  constructor(
    public nc: NavController
  ) { }

  ngOnInit() { }

  public back() {
    this.nc.back();
  }
}
