import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessRoutingModule } from './process.routing';
import { ProcessModalComponent } from './process-modal/process-modal.component';
import { ProcessStepComponent } from './process-step/process-step.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { MatDialogModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [ProcessComponent, ProcessModalComponent, ProcessStepComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ProcessRoutingModule,
    MatDialogModule,
    DragDropModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  entryComponents: [
    ProcessComponent, ProcessModalComponent, ProcessStepComponent
  ]
})
export class ProcessModule { }
