import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  public authenticatedUser;

  public quickMenuItems: any[] = [
    {
      title: 'Beach Tennis',
      url: '../../../assets/image/beach.jpg',
      path: 'booking-type-selector',
      params: 'beach-tennis',
    },
    {
      title: 'Pickleball',
      url: '../../../assets/image/pickle.jpg',
      path: 'booking-type-selector',
      params: 'pickle-ball',
    },
    {
      title: 'Academia',
      url: '../../../assets/image/gym.jpeg',
      path: 'booking-gym-selector',
      params: 'beach',
    },
    {
      title: 'Clinicas',
      url: '../../../assets/image/clinic.jpeg',
      path: 'booking-gym-selector',
      params: 'beach',
    },
    {
      title: 'Eventos',
      url: '../../../assets/image/events.jpg',
      path: 'events',
      params: 'events',
    }
  ];

  public upcomingBookings: any = [
    // {
    //   title: 'Beach Tennis',
    //   date: '10/11/21',
    //   hour: '09h',
    //   url: 'https://www.acmp.org.br/fmanager/acmp/noticias/imagem746_1.jpg',
    //   place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000'
    // },
    // {
    //   title: 'Pickeball',
    //   date: '16/12/21',
    //   hour: '19h',
    //   url: '../../../assets/image/pickle.jpeg',
    //   place: 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000'
    // },
  ];

  constructor(
    public as: AuthService,
    public nc: NavController,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.as.get('auth').then((val) => {
      if (!val) {
        this.nc.navigateRoot('login');
      }

      this.authenticatedUser = val;
      // this.newItemEvent.emit(this.authenticatedUser);

      this.http.get(environment.api + 'reservation/index').subscribe(data => {
        this.upcomingBookings = [];
        console.log(data['data']);
        data['data'].forEach(element => {
          this.upcomingBookings.push(
            {
              'imageUrl': element.court.type == 'beach-tennis' ? '/assets/image/beach.jpg' : '/assets/image/pickle.jpg',
              'title': element.court.type == 'beach-tennis' ? 'Beach Tennis' : 'Pickle Ball',
              'date': new Date(element.day).toString(),
              // 'hour': Number(element.hour).toString()+':00',
              'hour': element.hour,
              // 'place': element.court.name,
              'place': 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
            }
          )
        });
        // this.upcomingBookings = data['data'];
        console.log(this.upcomingBookings);
      });
    });
  }

  ngAfterViewInit() {
    this.http.get(environment.api + 'reservation/index').subscribe(data => {
      this.upcomingBookings = [];
      console.log(data['data']);
      data['data'].forEach(element => {
        this.upcomingBookings.push(
          {
            'imageUrl': element.court.type == 'beach-tennis' ? '/assets/image/beach.jpg' : '/assets/image/pickle.jpg',
            'title': element.court.type == 'beach-tennis' ? 'Beach Tennis' : 'Pickle Ball',
            'date': new Date(element.day).toString(),
            // 'hour': Number(element.hour).toString()+':00',
            'hour': element.hour,
            // 'place': element.court.name,
            'place': 'R. Escobar Otiz 718, São Paulo/SP CEP 09551-000',
          }
        )
      });
      // this.upcomingBookings = data['data'];
      console.log(this.upcomingBookings);
    });
  }

  goTo(path: string, params: string = '') {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        // type: JSON.stringify(params)
        type: params
      }
  };

    this.nc.navigateForward(path, navigationExtras);
  }
}
