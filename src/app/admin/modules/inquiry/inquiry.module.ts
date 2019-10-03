import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryComponent } from './inquiry.component';
import { InquiryRoutingModule } from './inquiry.routing';



@NgModule({
  declarations: [InquiryComponent],
  imports: [
    CommonModule,
    InquiryRoutingModule
  ]
})
export class InquiryModule { }
