import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { PortfolioService } from '../../../_services';


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  @ViewChild('file', { static: false }) file;
  strUrl: any[] = [];
  description: any[] = [];

  public files: Set<File> = new Set();
  constructor(private portfolioService: PortfolioService) { }

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

    this.portfolioService.createArtwork(this.description, this.files)
      .pipe(first())
      .subscribe(
        data => {
          // this.isSubmit = false;
          // this.dialogRef.close();
          console.log(data);
        },
        error => {
          return console.log(error)
        }
      );

  }

  ngOnInit() {
  }




}
