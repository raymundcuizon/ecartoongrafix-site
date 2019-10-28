import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;
  isSaving: boolean;

  constructor(
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = new FormGroup({
      contact_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      company_name: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      phone_number: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      website: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      email_address: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      project_name: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      license: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      illustration_usage: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      client_type: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      final_graphic_print: new FormControl( '' , []),
      final_graphic_web: new FormControl( '' , []),
      final_graphic_apparel: new FormControl( '' , []),
      final_graphic_other: new FormControl( '' , []),
      deadline: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      project_about: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      cps_background: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      budget: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      project_usage: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      targe_audience: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      colors: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      look_feel: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      font_lettering: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      etc: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3)
      ]),

    });
  }
  get f() { return this.formGroup.controls; }

  onSubmit(){

  }
  // contact_name
  // company_name
  // phone_number
  // website
  // project_name
  // license
  // illustration_usage
  // client_type
  // final_graphic
  // deadline
  // project_about
  // cps_background
  // budget
  // project_usage
  // targe_audience
  // colors
  // look_feel
  // font_lettering
  // etc
}
