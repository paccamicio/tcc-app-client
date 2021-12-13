import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public activatedRoute: string;

  constructor(
    public nc: NavController,
    public ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute = document.URL.split('/').pop();
  }

  goTo(path: string, params: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        type: JSON.stringify(params)
      }
    };
    this.nc.navigateForward(path, navigationExtras);
  }
}
