import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PortfolioService, ProcessService } from 'src/app/admin/_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-modal',
  templateUrl: './process-modal.component.html',
  styleUrls: ['./process-modal.component.scss']
})
export class ProcessModalComponent implements OnInit {
  @ViewChild('file', { static: false }) file;
  strUrl: any[] = [];
  public files: Set<File> = new Set();
  formGroup: FormGroup;
  formFlg: string;
  details: any;
  hasFile: boolean;

  constructor(
    public dialogRef: MatDialogRef<ProcessModalComponent>,
    public processService: ProcessService, @Inject(MAT_DIALOG_DATA) data) { 
    this.formFlg = data.action;
    this.details = data.details;
  }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl( this.details ? this.details.name : '', [
        Validators.required,
      ]),
      description: new FormControl( this.details ? this.details.description : '' , [
        Validators.required,
        Validators.minLength(20)
      ])
    });
  }
  get f() { return this.formGroup.controls; }

  addFiles() {
    this.file.nativeElement.click();
  }
  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
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

  removeaddesImg(i) {
    this.hasFile = false;
    this.files.delete(i);
    this.strUrl.splice(i, 1);
  }

  onSubmit(){
    if (this.formGroup.invalid) { return; }

    const data = {
      name: this.f.name.value,
      description: this.f.description.value
    }

    if(this.formFlg === 'add'){
      this.processService.create(data, this.files)
      .pipe(first())
      .subscribe(
        data => {
          this.dialogRef.close();
        }
      );
    } else {
      this.processService.update(this.details.id, data)
      .pipe(first())
      .subscribe(data => {
        this.dialogRef.close();
        }
      );
    }

  }
}
