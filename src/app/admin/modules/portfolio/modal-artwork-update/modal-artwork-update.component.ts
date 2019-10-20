import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PortfolioService } from 'src/app/admin/_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-artwork-update',
  templateUrl: './modal-artwork-update.component.html',
  styleUrls: ['./modal-artwork-update.component.scss']
})
export class ModalArtworkUpdateComponent implements OnInit {
  
  formGroup: FormGroup;
  formFlg: string;
  details: any;

  constructor(
    public dialogRef: MatDialogRef<ModalArtworkUpdateComponent>,
    public portfolioService: PortfolioService, @Inject(MAT_DIALOG_DATA) data) { 
    this.formFlg = data.action;
    this.details = data.details;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      title: new FormControl( this.details ? this.details.title : '', [
        Validators.required,
      ]),
      description: new FormControl( this.details ? this.details.description : '' , [
        Validators.required,
        Validators.minLength(20)
      ])
    });
  }
  get f() { return this.formGroup.controls; }

  onSubmit(){
    if (this.formGroup.invalid) { return; }

    const data = {
      title: this.f.title.value,
      description: this.f.description.value
    }

      this.portfolioService.updateArtwork(this.details.image_id, data)
      .pipe(first())
      .subscribe(data => {
        this.dialogRef.close();
        }
      );

  }

}
