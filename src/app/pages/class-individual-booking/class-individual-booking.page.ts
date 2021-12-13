import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-class-individual-booking',
  templateUrl: './class-individual-booking.page.html',
  styleUrls: ['./class-individual-booking.page.scss'],
})
export class ClassIndividualBookingPage implements OnInit {
  public comments;
  public bookingType: string; // regular, lesson
  public lessonType; // 'one', 'two', or 'four'
  public court = null;
  public humanizedLessonType;

  constructor(
    public bs: BookingService,
    public nc: NavController,
    public ar: ActivatedRoute,
    public s: Storage,
  ) {
    this.comments = [];
    this.initializeCourt();
    this.bookingType = 'lesson';
  }

  ngOnInit() {
  }

  // gets first available court
  public initializeCourt() {
    this.ar.queryParams.subscribe(params => {
      this.lessonType = params.lessonType;
      this.s.set('courtType', params.type)
      this.s.set('lessonType', this.lessonType)

      this.bs.courts(params.type).subscribe(courts => {
        this.court = courts['data'].shift();
        this.s.set('court', this.court)
      })

      if (this.lessonType === 'one') { this.humanizedLessonType = 'individual' }
      else if (this.lessonType === 'two') { this.humanizedLessonType = 'com dois jogadores' }
      else if (this.lessonType === 'four') { this.humanizedLessonType = 'com quatro jogadores' }
    })
  }

  public navigateFoward(path, params = {}) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        ...params,
      }
    }

    this.nc.navigateForward(path, navigationExtras);
  }

  public continueBooking() {
    this.s.set('bookingType', this.bookingType)
    this.s.set('lessonType', this.lessonType)
    this.s.set('court', this.court)

    this.nc.navigateForward('lesson-booking-options');
  }
}
