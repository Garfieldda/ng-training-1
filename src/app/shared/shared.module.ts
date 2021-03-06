import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  NotFoundComponent,
  ModalLoginComponent,
  NavigationComponent,
  BroadcasterService,
  ApiService,
  ApiRequestStorageService,
  AuthService,
  AuthGuard
} from './shared.barrel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule
  ],
  exports: [
    ModalLoginComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  declarations: [
    ModalLoginComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  providers: [
    BroadcasterService,
    ApiService,
    ApiRequestStorageService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
