import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

declare var Stripe;

@Component({
  selector: 'app-checkout-credit-card',
  templateUrl: './checkout-credit-card.page.html',
  styleUrls: ['./checkout-credit-card.page.scss'],
})
export class CheckoutCreditCardPage implements OnInit, AfterViewInit {
  public creditCard = this.fb.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required]
  });

  public loading;
  public intent;
  public stripe;
  public elements;
  public cardElement;

  constructor(
    public fb: FormBuilder,
    public lc: LoadingController,
    public ac: AlertController,
    public nc: NavController,
    public as: AuthService,
    private http: HttpClient,
    public s: Storage
  ) { }

  ngOnInit() {
    this.handleStripe();
    this.getPaymentIntention();

    console.log(this.s.get('bookingDate'));
    console.log(this.s.get('bookingTime'));
    console.log(this.s.get('bookingType'));
    console.log(this.s.get('bookingCourt'));

    this.http.post(environment.api + 'user-intent', {
      progress: 4
    }).subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewInit() {

  }

  handleStripe() {
    this.stripe = Stripe(
      'pk_test_51Ju9f5FIsMgyo5cPvfGFXlVQEaggt880nEyJezTBmWA2cirgfN8oEDsXw5NZ1DmsBHIfFQpgi0qZ7VDUcH76ExL600xyORSxn8',
      { locale: 'pt-BR' }
    );

    this.elements = this.stripe.elements();
    this.cardElement = this.elements.create('card');
    this.cardElement.mount('#card-element');
  }

  presentPaymentSheet() {
    // Stripe.presentPaymentSheet();
  }

  public async getPaymentIntention() {
    this.http.post(environment.api + 'stripe-checkout-intent', {}).subscribe((data :any) => {
      this.intent = data.client_secret;
    });
  }

  async loader() {
    this.loading = await this.lc.create({
      message: 'Efetivando pagamento...',
    });

    this.loading.present();
  }

  public async checkout() {
    const cardHolderName = this.creditCard.get('name');
    const { paymentMethod, error } = await this.stripe.createPaymentMethod(
      'card',
      this.cardElement,
      { billing_details: { name: cardHolderName.value } }
    );

    if (error) {
      console.error(error);
    }

    await this.s.get('bookingDate').then(date => {

      this.loader();

      this.s.get('bookingTime').then(time => {
        this.s.get('bookingType').then(type => {
          this.http.post(
            environment.api + 'stripe-checkout-charge',
            {
              paymentMethodId: paymentMethod.id,
              day: date,
              hour: time,
              type: type,
              court_id: 1,
            }
          ).subscribe(data => {
            this.loading.dismiss();
            this.nc.navigateRoot('home');
          }, error => {
            console.log(error);
          });
        });
      });
    });
  }
}
