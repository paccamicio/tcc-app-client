import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/** Declarations */
import ptBr from '@angular/common/locales/pt';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { NgxStripeModule } from 'ngx-stripe';
registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51Ju9f5FIsMgyo5cPvfGFXlVQEaggt880nEyJezTBmWA2cirgfN8oEDsXw5NZ1DmsBHIfFQpgi0qZ7VDUcH76ExL600xyORSxn8')
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
