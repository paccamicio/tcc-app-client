import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { from } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public as: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
		return from(this.handle(req, next));
	}

	async handle(req: HttpRequest<any>, next: HttpHandler) {
    	let token = await this.token();
		let authReq = req.clone();

		if (!(token == 'undefined')) {
			authReq = req.clone({
				setHeaders: {
					'Content-Type' : 'application/json; charset=utf-8',
					'Accept'       : 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			});
		}

    return next.handle(authReq).toPromise()
  }

	async token() {
		return await this.as.get('auth').then((res :any) => {
			return res.token;
		});
	}
}
