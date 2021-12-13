import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public form = this.fb.group({
    email: ['', [ Validators.email, Validators.required ]],
  });

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() { }

  public submitRequest() {
    console.log(this.form.value);
  }

}
