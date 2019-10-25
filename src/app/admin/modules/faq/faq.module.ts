import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing';
import { FormModalComponent } from './form-modal/form-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDialogModule } from '@angular/material';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';


@NgModule({
  declarations: [FaqComponent, FormModalComponent],
  imports: [
    CKEditorModule,
    CommonModule,
    FaqRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  entryComponents: [
    FormModalComponent
  ]
})
export class FaqModule { }
