import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-booking-type-selector',
  templateUrl: './booking-type-selector.page.html',
  styleUrls: ['./booking-type-selector.page.scss'],
})
export class BookingSelectorPage implements OnInit {

  // type: beach
  public params: any;

  constructor(
    public nc: NavController,
    public ar: ActivatedRoute,
    public s: Storage,
    private http: HttpClient,
  ) {
    this.getSelectorType();
  }

  ngOnInit() {
    this.http.post(environment.api + 'user-intent', {
      progress: 0
    }).subscribe(data => {
      console.log(data);
    });
  }

  public async getSelectorType() {
    this.ar.queryParams.subscribe(params => {
      this.params = params;
    });
  }

  public navigateFoward(path, params, lessonType) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        ...params,
        lessonType: lessonType,
      }
    }

    this.s.set('lessonType', lessonType);

    this.nc.navigateForward(path, navigationExtras);
  }

  public getScheduleType(): string {

    // if (JSON.parse(this.params.type) === 'beach-tennis') {
    if (this.params.type === 'beach-tennis') {
      return 'Beach Tennis';
    }

    // if (JSON.parse(this.params.type) === 'pickle-ball') {
    if (this.params.type === 'pickle-ball') {
      return 'Pickle Ball';
    }

    return 'Não implementado';
  }
}
