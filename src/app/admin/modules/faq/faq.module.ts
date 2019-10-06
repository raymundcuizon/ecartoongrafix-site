import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing';
import { FormModalComponent } from './form-modal/form-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FaqComponent, FormModalComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FaqModule { }
