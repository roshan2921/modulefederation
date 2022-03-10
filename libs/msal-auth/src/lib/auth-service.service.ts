import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {
  AuthenticationResult,
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  roleObject: any;
  role: any;
  accessToken: string = '';

  constructor(private _msalService: MsalService) {}

  checkLogin() {

    this._msalService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this._msalService.instance.setActiveAccount(res.account);
        this.accessToken = res.accessToken;
        this.roleObject = res;
        sessionStorage.setItem('role', this.roleObject.idTokenClaims.roles);
      }
    });
  }

  isLoggedIn(): boolean {
    debugger
    console.log(this._msalService.instance.getActiveAccount());
    return this._msalService.instance.getActiveAccount() != null;
  }

  login() {
    this._msalService.loginRedirect();

    // this._msalService
    //   .loginPopup()
    //   .pipe(take(1))
    //   .subscribe((response: AuthenticationResult) => {
    //     this.roleObject = response;
    //     this.role = this.roleObject.idTokenClaims.roles;
    //     sessionStorage.setItem('role', this.role);
    //     this._msalService.instance.setActiveAccount(response.account);
    //   });
  }

  logout() {
    sessionStorage.clear();
    this._msalService.logout();
  }
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      authority:
        'https://login.microsoftonline.com/TenantId/',
      clientId: 'clientId',
      redirectUri: 'http://localhost:4200',
    },
  });
}
