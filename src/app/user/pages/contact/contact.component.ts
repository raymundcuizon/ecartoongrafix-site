import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InquiryService } from '../../_services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('file', { static: false }) file;
  strUrl: any[] = [];
  public files: Set<File> = new Set();
  submitted = false;
  showFlash = false;

  formGroup: FormGroup;
  isSaving: boolean;
  hasFile: boolean;

  // others flag
  usageOtherFlg:boolean; 
  finalGraphicOtherFlg:boolean;
  deadlineOtherFlg:boolean;

  constructor(private inquiryService: InquiryService
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
      company_name: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      phone_number: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      website: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      email_address: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      project_name: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      license: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      illustration_usage: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ]),
      illustration_usage_other: new FormControl('', []),
      client_type: new FormControl('', [
        Validators.required
      ]),
      final_graphic_print: new FormControl(false, []),
      final_graphic_web: new FormControl(false, []),
      final_graphic_apparel: new FormControl(false, []),
      final_graphic_other: new FormControl(false, []),
      final_graphic_other_details: new FormControl(''),
      deadline: new FormControl( '' , [
        Validators.required,
      ]),
      deadline_other: new FormControl(''),
      project_about: new FormControl('', [
        Validators.required,
      ]),
      cps_background: new FormControl('', [
        Validators.required,
      ]),
      budget: new FormControl(''),
      project_usage: new FormControl(''),
      target_audience: new FormControl(''),
      colors: new FormControl(''),
      look_feel: new FormControl(''),
      positioning: new FormControl(''),
      font_lettering: new FormControl(''),
      etc: new FormControl( ''),
    });
  }
  get f() { return this.formGroup.controls; }

  onSubmit(){
    if (this.formGroup.invalid) { return; }

    this.submitted = true;
    const data = {
      contact_name: this.f.contact_name.value
      , company_name: this.f.company_name.value
      , phone_number: this.f.phone_number.value
      , website: this.f.website.value
      , email_address: this.f.email_address.value
      , project_name: this.f.project_usage.value
      , license: this.f.license.value
      , illustration_usage: this.f.illustration_usage.value
      , illustration_usage_other: this.f.illustration_usage_other.value
      , client_type: this.f.client_type.value
      , final_graphic_print: this.f.final_graphic_print.value
      , final_graphic_web: this.f.final_graphic_web.value
      , final_graphic_apparel: this.f.final_graphic_apparel.value
      , final_graphic_other: this.f.final_graphic_other.value
      , final_graphic_other_details: this.f.final_graphic_other_details.value
      , deadline: this.f.deadline.value
      , deadline_other: this.f.deadline_other.value
      , budget: this.f.budget.value
      , project_about: this.f.project_about.value
      , cps_background: this.f.cps_background.value
      , project_usage: this.f.project_usage.value
      , target_audience: this.f.target_audience.value
      , colors: this.f.colors.value
      , look_feel: this.f.look_feel.value
      , positioning: this.f.positioning.value
      , font_lettering: this.f.font_lettering.value
      , etc: this.f.etc.value
    }

    this.inquiryService.create(data, this.files).subscribe(res => {
      this.submitted = false;
      this.createForm();
      this.strUrl = [];
      this.files.clear();
      this.showFlash = true;
      this.usageOtherFlg = false; 
      this.finalGraphicOtherFlg = false;
      this.deadlineOtherFlg = false;
        setTimeout(() => {
          this.showFlash = false;
        }, 5000);

    }, error => {
      this.submitted = false;
    })
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    if(this.file.nativeElement.files.length > 3) {
      alert("You can only upload a maximum of 3 files");
      return;
    }
    const files: { [key: string]: File } = this.file.nativeElement.files;
   
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        const fsizeMB = Math.round(( files[key].size / 1024)); 
        if(fsizeMB <= 2048) {
          this.files.add(files[key]);
          let reader = new FileReader();
          reader.onload = (event: any) => {
            this.hasFile = true;
            this.strUrl.push(event.target.result);
          };
          reader.readAsDataURL(files[key]);          
        }
      }
    }
  }

  removeaddesImg(i) {
    this.files.delete(i);
    this.strUrl.splice(i, 1);
  }

  usageChange() {
    this.usageOtherFlg = this.f.illustration_usage.value === 'other' ? true : false 
  }

  finalGraphicOther(){
    this.finalGraphicOtherFlg = !this.f.final_graphic_other.value;
  }

  changingDeadline() {
    this.deadlineOtherFlg = (this.f.deadline.value === 'other') ? true : false;
  }
}