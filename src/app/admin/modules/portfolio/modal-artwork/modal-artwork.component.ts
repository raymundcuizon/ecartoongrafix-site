import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PortfolioService } from 'src/app/admin/_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-artwork',
  templateUrl: './modal-artwork.component.html',
  styleUrls: ['./modal-artwork.component.scss']
})
export class ModalArtworkComponent implements OnInit {

  @ViewChild('file', { static: false }) file;
  strUrl: any[] = [];
  public files: Set<File> = new Set();
  description: any[] = [];
  id: number;

  formGroup: FormGroup;
  formFlg: string;
  details: any;
  hasFile: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalArtworkComponent>,
    public portfolioService: PortfolioService, @Inject(MAT_DIALOG_DATA) data
    , private router: Router
    , private route: ActivatedRoute ) { 
    this.formFlg = data.action;
    this.id = data.details;

  }

  ngOnInit(){

  }

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
          console.log(event.target.result);
          this.strUrl.push(event.target.result);
        };
        reader.readAsDataURL(files[key]);
      }
    }
  }

  removeaddesImg(i) {
    console.log(`Removed Image: ${i}`);
    this.files.delete(i);
    this.strUrl.splice(i, 1);
    this.description.splice(i, 1)
  }

  public onSubmit(){

    this.portfolioService.createArtwork(this.description, this.id, this.files)
      .pipe(first())
      .subscribe(
        data => {
          // this.isSubmit = false;
          this.dialogRef.close();
          console.log(data);
        },
        error => {
          return console.log(error)
        }
      );

  }
}
