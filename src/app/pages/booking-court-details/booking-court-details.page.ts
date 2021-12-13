import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BookingService } from 'src/app/services/booking.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking-court-details',
  templateUrl: './booking-court-details.page.html',
  styleUrls: ['./booking-court-details.page.scss'],
})
export class BookingCourtDetailsPage implements OnInit {
  public comments;

  public bookingType: string; // regular, lesson
  public court = null;

  constructor(
    public bs: BookingService,
    public nc: NavController,
    public ar: ActivatedRoute,
    public s: Storage,
    public http: HttpClient,
  ) {
    this.comments = [];
    this.initializeCourt();
    this.bookingType = 'regular';
  }

  ngOnInit() {
    this.http.post(environment.api + 'user-intent', {
      progress: 1
    }).subscribe(data => {
      console.log(data);
    });
  }

  // gets first available court
  public initializeCourt() {
    this.ar.queryParams.subscribe(params => {
      this.s.set('courtType', params.type)

      this.bs.courts(params.type).subscribe(courts => {
        this.court = courts['data'].shift();
        this.s.set('court', this.court)
        console.log(this.court);
      })
    })
  }

  public continueBooking() {
    this.s.set('bookingType', this.bookingType)
    this.s.set('court', this.court)

    this.nc.navigateForward('booking-options');
  }
}
