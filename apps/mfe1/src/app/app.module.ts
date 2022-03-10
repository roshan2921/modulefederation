import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeMfe1Component } from './home-mfe1/home-mfe1.component';

const ROUTES:Routes = [
  {path: '', pathMatch:'full',component: HomeMfe1Component}
]

@NgModule({
  declarations: [AppComponent, HomeMfe1Component ],
  imports: [
    BrowserModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
