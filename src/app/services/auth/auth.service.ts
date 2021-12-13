import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private s: Storage
  ) {
    this.s.create();
  }

  public async login(user: User) {
    return await this.httpClient
      .post(`${environment.api}auth/login`, user);
  }

  public async register(user: User) {
    return this.httpClient
      .post(`${environment.api}auth/register`, user);
  }

  public async store(key: any, value: any) {
    return await this.s.set(key, value);
  }

  async get(key: any) {
    return new Promise(resolve => {
      this.s.get(key).then((value) => {
        if (value == null) {
          resolve(false);
        } else {
          resolve(value);
        }
      });
    });
  }

  async clear() {
    return await this.s.clear();
  }
}
