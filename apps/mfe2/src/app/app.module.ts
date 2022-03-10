import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeMfe2Component } from './home-mfe2/home-mfe2.component';

const ROUTES:Routes = [
  {path: '' ,component: HomeMfe2Component},
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeMfe2Component],
  imports: [
    BrowserModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
