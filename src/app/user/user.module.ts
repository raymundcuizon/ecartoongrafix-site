import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent } from './pages';


@NgModule({
  declarations: [UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent],
  imports: [
    NgbModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
