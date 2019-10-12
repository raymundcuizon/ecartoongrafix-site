import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent } from './pages';


@NgModule({
  declarations: [UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
