import { Component, OnInit, ViewChild } from '@angular/core';
import { FaqService } from '../../_services'
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  validatingForm: FormGroup;
  formFlg = 'add';

  @ViewChild('frame', { static: true }) frame;

  constructor(private faqService: FaqService) { }
  ngOnInit() {

    this.faqService.getList();
    this.createForm();

  }

  createForm(){
    this.validatingForm = new FormGroup({
      formTitle: new FormControl('', Validators.required),
      formQuestion: new FormControl('', Validators.required),
      formAnswer: new FormControl('', Validators.required)
    });
  }

  get f() { return this.validatingForm.controls; }

  formFaqSubmit(){
    if (this.validatingForm.invalid) { return; }

    const data = {
      title: this.f.formTitle.value,
      question: this.f.formQuestion.value,
      answer: this.f.formAnswer.value
    }

    if(this.formFlg == 'add') {
      this.faqService.create(data).subscribe(res => {
        this.faqService.getList();
        this.faqModalClose();
      })
    } else {  
      this.faqService.update(this.f.id.value, data).subscribe(res => {
        this.faqService.getList();
        this.faqModalClose();
      })
    }
  }

  faqModalClose(){
    this.formFlg = 'add';
    this.frame.hide();
    this.createForm();
  }

  faqModalShow(){
    this.frame.show();
  }

  onUpdate(data){

    this.frame.show();

    this.validatingForm = new FormGroup({
      id: new FormControl(data.id),
      formTitle: new FormControl(data.title, Validators.required),
      formQuestion: new FormControl(data.question, Validators.required),
      formAnswer: new FormControl(data.answer, Validators.required)
    });

  }

  onDelete(id: number){
    this.faqService.delete(id).subscribe(res => {
      this.faqService.getList();
    })
  }

  onVisibility(id: number){

    this.faqService.visibility(id).subscribe(res => {
      this.faqService.getList();
    })
  }
}
