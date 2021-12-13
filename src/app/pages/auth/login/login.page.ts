import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentials = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  public authUser: any;
  public loading: any;

  constructor(
    public nc: NavController,
    public router: Router,
    public lc: LoadingController,
    public ac: AlertController,
    public fb: FormBuilder,
    public as: AuthService,
    public mc: MenuController
  ) { }

  ngOnInit() {
    this.as.get('auth').then((val) => {
      if (val) {
        this.nc.navigateRoot('home');
      }
    });
  }

  /**
   * Go to register page.
   * @returns Promisse<boolean>
   */
  public showRegisterForm(): Promise<boolean> {
    return this.router.navigate(['/register']);
  }

  /**
   * Go to forgot password page.
   * @returns Promise<boolean>
   */
  public forgotPassword(): Promise<boolean> {
    return this.nc.navigateForward('forgot-password');
  }

  async attemptLogin() {

    this.loading = await this.lc.create({
      message: 'Efetivando acesso...',
    });

    this.loading.present();

    (await this.as
      .login(this.credentials.value))
      .pipe(finalize(() => this.loading.dismiss()))
      .subscribe(data => {
        this.as.store('auth', data);
        this.authUser = data;

        if (this.authUser.user.photo == null) {
          // this.nc.navigateRoot('add-profile-picture');
          this.nc.navigateRoot('home');
        } else {
          this.nc.navigateRoot('home');
        }
      }, (err) => {
        this.presentLoginError();
      });
  }

  public async presentLoginError() {
    const alert = await this.ac.create({
      header: 'Erro!',
      message: 'Email ou senha incorretos.',
      buttons: ['Tentar novamente']
    });

    return alert.present();
  }

  public isNotValid(field): boolean {
    if (this.credentials.get(field).invalid && (this.credentials.get(field).dirty || this.credentials.get(field).touched)) {
      return true;
    }

    return false;
  }
}
