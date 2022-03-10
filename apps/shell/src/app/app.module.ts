import { AuthGuardGuard, MsalAuthModule } from '@airport/msal-auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then((m) => m.AppModule),
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then((m) => m.AppModule),canActivate:[AuthGuardGuard]
  },
]


@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule,  RouterModule.forRoot(ROUTES, { initialNavigation: 'enabledBlocking' }), MsalAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
