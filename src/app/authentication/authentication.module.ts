import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SuccesPageComponent } from './succes-page/succes-page.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
    SuccesPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoginComponentComponent,
    SuccesPageComponent
  ]
})
export class AuthenticationModule { }
