import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FaqService } from 'src/app/admin/_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  formGroup: FormGroup;
  formFlg: string;
  details: any;
  
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>
    , @Inject(MAT_DIALOG_DATA) data
    , public faqService: FaqService) { 
    this.formFlg = data.action;
    this.details = data.details;
    console.log(this.details)
  }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.formGroup = new FormGroup({
      title: new FormControl( this.details ? this.details.title : '', [
        Validators.required,
      ]),
      question: new FormControl( this.details ? this.details.question : '', [
        Validators.required,
      ]),
      answer: new FormControl( this.details ? this.details.answer : '' , [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit(){
    if (this.formGroup.invalid) { return; }

    const data = {
      title: this.f.title.value,
      question: this.f.question.value,
      answer: this.f.answer.value
    }

    if(this.formFlg == 'add') {
      this.faqService.create(data)
      .pipe(first())
      .subscribe(res => {
        console.log(res)
        this.dialogRef.close();

      })
    } else {  
      this.faqService.update(this.details.id, data)
      .pipe(first())
      .subscribe(res => {
        console.log(res)
        this.dialogRef.close();

      })
    }

  }


}
