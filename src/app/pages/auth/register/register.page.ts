import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { TermsPage } from '../../modal/terms/terms.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user = this.fb.group({
    name: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  public modal: any;
  public errors: string;
  public terms: boolean;
  public spinner;

  constructor(
    public mc: ModalController,
    public nc: NavController,
    public lc: LoadingController,
    public ac: AlertController,
    public fb: FormBuilder,
    public as: AuthService
  ) {
    this.terms = false;
  }

  ngOnInit() {}

  async register() {

    if (!this.terms) {
      return this.checkTerms();
    }

    this.spinner = await this.lc.create({
      message: 'Por favor aguarde...',
    });

    this.spinner.present();

    (await this.as
      .register(this.user.value))
      .pipe(finalize(() => this.lc.dismiss()))
      .subscribe(data => {
        this.as.store('auth', data);
        this.nc.navigateRoot('home');
      }, (err) => {
        this.errors = '';
        this.handleApiErrors(err.error.errors);
      });
  }

  public async handleApiErrors(errors: any) {

    Object.keys(errors).forEach(error => {
      this.errors += errors[error] + ' ' + '\t';
    });

    this.showAlert(
      'Você precisa corrigir os seguintes dados:',
      this.errors,
      ['Entendi']
    );

    // Future
    // this.errors = Object.keys(errors);
    // console.log(typeof this.errors.email);
  }

  /**
   * Show an basic alert.
   * @param header string
   * @param message string
   * @param buttons array
   */
  public async showAlert(header: string, message: string, buttons): Promise<void> {
    const alert = this.ac.create({ header, message, buttons });
    (await alert).present();
  }

  public isNotValid(field): boolean {
    if (
      (this.user.get(field).invalid && (this.user.get(field).dirty) || this.user.get(field).touched)
    ) {
      return true;
    }

    return false;
  }

  async checkTerms() {
    const alert = await this.ac.create({
      header: 'Atenção!',
      subHeader: '',
      message: 'Você precisa aceitar os termos de uso.',
      buttons: ['Entendi']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  public async openTerms() {
    this.modal = await this.mc.create({
      component: TermsPage,
      swipeToClose: true
    });

    return await this.modal.present();
  }
}
