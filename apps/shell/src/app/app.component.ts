import { AuthServiceService } from '@airport/msal-auth';
import { Component } from '@angular/core';

@Component({
  selector: 'airport-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(private _authService: AuthServiceService) {}

  ngOnInit() {
    this._authService.checkLogin();
    this._authService.isLoggedIn();
    this.login();
  }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
