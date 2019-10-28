import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './../materials.module';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent, PortfolioItemsComponent } from './pages';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent, PortfolioItemsComponent],
  imports: [
    NgbModule,
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MDBBootstrapModule.forRoot(),

    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    MaterialsModule
  ]
})
export class UserModule { }
