import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessRoutingModule } from './process.routing';



@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
