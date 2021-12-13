import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { SchedulingHourModalPage } from '../modal/scheduling-hour-modal/scheduling-hour-modal.page';
import { SchedulingModalPage } from '../modal/scheduling-modal/scheduling-modal.page';

@Component({
  selector: 'app-booking-options',
  templateUrl: './booking-options.page.html',
  styleUrls: ['./booking-options.page.scss'],
})
export class BookingOptionsPage implements OnInit {

  public placeholderItem: any = {
    title: 'Quadra Beach Tennis',
    date:  '',
    hour: '',
    place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
  };

  public dayDismissed = false;
  public hourDismissed = false;

  // checkout data
  public court; // from storage

  constructor(
    public mc: ModalController,
    public nc: NavController,
    public ac: AlertController,
    public s: Storage,
    public http: HttpClient,
  ) {
    this.s.get('court')
      .then(court => this.court = court);
  }

  ngOnInit() {
    this.http.post(environment.api + 'user-intent', {
      progress: 2
    }).subscribe(data => {
      console.log(data);
    });
  }

  public async presentDayModal() {
    const modal = await this.mc.create({
      component: SchedulingModalPage,
      swipeToClose: true,
    });

    modal.onDidDismiss().then((modalRes) => {
      this.dayDismissed = true;
      this.placeholderItem.date = modalRes.data;
    });

    return await modal.present();
  }

  public async presentHourModal() {
    const modal = await this.mc.create({
      component: SchedulingHourModalPage,
      swipeToClose: true,
    });

    modal.onDidDismiss().then((modalRes) => {
      this.hourDismissed = true;
      this.placeholderItem.hour = modalRes.data;
    });

    return await modal.present();
  }

  public async checkout() {

    if (this.placeholderItem.date === '' || this.placeholderItem.hour === '') {
      return await this.presentLoginError();
    }

    this.s.set('bookingTime', this.placeholderItem.hour);
    this.s.set('bookingDate', this.placeholderItem.date);

    this.nc.navigateForward('checkout-init', );
  }

  public async presentLoginError() {
    const alert = await this.ac.create({
      header: 'Ação proíbida!',
      message: 'Você precisa selecionar o dia e a hora primeiro.',
      buttons: ['Tentar novamente']
    });

    return alert.present();
  }
}
