import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public auth: any;
  public userName: any;

  constructor(
    private as: AuthService,
    private m: MenuController,
  ) {
    this.getUserInfo();
  }

  ngOnInit() {}

  async getUserInfo() {
    this.as
      .get('auth')
      .then((val) => {
        if (val != null) {
          this.auth = val;
          this.userName = this.auth.user.name;
        }
      });
  }

  openMenu(): void {
    this.m.enable(true, 'mainMenu');
    this.m.open();
  }
}
