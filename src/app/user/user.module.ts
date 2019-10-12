import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user.component';

import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent } from './pages';


@NgModule({
  declarations: [UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
