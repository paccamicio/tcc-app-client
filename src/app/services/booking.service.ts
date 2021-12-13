import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient, private s: Storage) {
    this.s.create();
  }

  public courts(type = '') {
    let endurl = type ? `/${type}` : '';
    endurl = `${environment.api}courts${endurl}`;

    return this.http.get<Array<Object>>(endurl);
  }
}
