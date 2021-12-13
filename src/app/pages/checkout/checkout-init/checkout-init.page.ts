import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout-init',
  templateUrl: './checkout-init.page.html',
  styleUrls: ['./checkout-init.page.scss'],
})
export class CheckoutInitPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    public nc: NavController,
    public s: Storage,
    public http: HttpClient
  ) {
    // shows all keys in the storage
    // to help sending relevant data to the database
    this.s.keys().then(console.log)
  }

  ngOnInit() {
    this.http.post(environment.api + 'user-intent', {
      progress: 3
    }).subscribe(data => {
      console.log(data);
    });
  }

  public goTo(path: string) {
    this.nc.navigateForward(path);
  }
}
