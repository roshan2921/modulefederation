import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MSALInstanceFactory } from './auth-service.service';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
})
export class MsalAuthModule {}
