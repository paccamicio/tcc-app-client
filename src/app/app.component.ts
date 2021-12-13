import { Component, OnInit } from '@angular/core';
// import { Stripe, PaymentSheetEventsEnum } from '@capacitor-community/stripe';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from './services/auth/auth.service';
// import { NgxStripeModule } from 'ngx-stripe';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // processSheet: 'willReady' | 'Ready' = 'willReady';
  // processFlow: 'willReady' | 'Ready' | 'canConfirm' = 'willReady';
  // processApplePay: 'willReady' | 'Ready' = 'willReady';
  // processGooglePay: 'willReady' | 'Ready' = 'willReady';
  // isApplePayAvailable = false;
  // isGooglePayAvailable = false;

  public spinner: any;
  public user: any;

  constructor(
    public as: AuthService,
    public lc: LoadingController,
    public nc: NavController,
    public mc: MenuController
  ) {
    this.init();
    // Stripe.initialize({
    //   publishableKey: 'pk_test_51Ju9f5FIsMgyo5cPvfGFXlVQEaggt880nEyJezTBmWA2cirgfN8oEDsXw5NZ1DmsBHIfFQpgi0qZ7VDUcH76ExL600xyORSxn8',
    // });
  }

  public async init() {
    await this.as.get('auth').then((val: any) => {
      this.user = val.user;
    });
  }

  /**
   * Creates the page spinner. (not used).
   * @returns Promise<HTMLIonLoadingElement>
   */
  public async initSpinner(): Promise<HTMLIonLoadingElement> {
    return this.lc.create({ message: 'Decolando!' });
  }

  public goTo(path: string) {
    this.mc.close().then(() => {
      this.nc.navigateForward(path);
    });
  }

  /**
   * Handle the pages event emmiter.
   * @param user any
   */
  // public addItem(user: any) {
  //   console.log('addItem');
  //   console.log(user);
  //   this.user = user;
  // }

  /**
   * Verify if has an authenticated user.
   * Then return the user stored data.
   * @returns any
   */
  public async isAuthenticated() {
    await this
      .as
      .get('auth').then((val) => {
        console.log(val);
        if (val === false) {
          return val;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return false;
  }

  public async logout() {
    this
      .mc
      .close()
      .then(() => {
        this
          .as
          .clear()
          .then(() => {
            this
              .as.get('auth').then((val) => {
              if (!val) {
                this.nc.navigateRoot('login');
              }
            });
          });
      });
  }
}
