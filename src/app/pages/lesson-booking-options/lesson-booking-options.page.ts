import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SchedulingHourModalPage } from '../modal/scheduling-hour-modal/scheduling-hour-modal.page';
import { SchedulingModalPage } from '../modal/scheduling-modal/scheduling-modal.page';

@Component({
  selector: 'app-lesson-booking-options',
  templateUrl: './lesson-booking-options.page.html',
  styleUrls: ['./lesson-booking-options.page.scss'],
})
export class LessonBookingOptionsPage implements OnInit {

  public placeholderItem: any = {
    title: 'Quadra Beach Tennis',
    date:  '',
    hour: '',
    place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
  };

  public dayDismissed = false;
  public hourDismissed = false;
  // checkout data
  // public bookingType // hard-coded
  public lessonType // 'one', 'two', or 'four'
  public court; // from storage
  public humanizedLessonType;

  constructor(
    public mc: ModalController,
    public nc: NavController,
    public ac: AlertController,
    public s: Storage
  ) {
    this.s.get('court')
      .then(court => this.court = court);

    this.s.get('lessonType')
      .then(type => {
        if (type === 'one') { this.humanizedLessonType = 'Individual' }
        else if (type === 'two') { this.humanizedLessonType = 'em Dupla' }
        else if (type === 'four') { this.humanizedLessonType = 'com Quatro Pessoas' }
        // console.log(type);
        // console.log(this.humanizedLessonType);
      })
  }

  ngOnInit() {}

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

    this.s.set('bookingTime', this.placeholderItem.hour)
    this.s.set('bookingDate', this.placeholderItem.date)

    this.nc.navigateForward('checkout-init');
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
