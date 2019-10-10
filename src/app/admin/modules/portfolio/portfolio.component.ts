import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from '../../_services';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  @ViewChild('frame', { static: true }) frame;
  @ViewChild('file', { static: false }) file;
  strUrl: any[] = [];
  public files: Set<File> = new Set();
  validatingForm: FormGroup;
  formFlg = 'add';
  isActive: boolean = false;
  showLoadMore: boolean = true;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getList();
    this.createForm();
  }

  loadMore(){

    if(this.portfolioService.pagination.pages === this.portfolioService.pagination.next) {
      this.showLoadMore = false;
    }

    this.portfolioService.portfolioPageSetting.page = this.portfolioService.pagination.next;
    this.portfolioService.getList();
  }

  // Modal part
  createForm(){
    this.validatingForm = new FormGroup({
      formName: new FormControl('', Validators.required),
      formDescription: new FormControl('', Validators.required)
    });
  }

  get f() { return this.validatingForm.controls; }

  myModalClose(){
    this.formFlg = 'add';
    this.frame.hide();
    this.createForm();
  }

  myModalShow(){
    this.createForm();
    this.frame.show();
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
  }

  onUpdate(data){

    this.frame.show();

    this.validatingForm = new FormGroup({
      id: new FormControl(data.id),
      formName: new FormControl(data.name, Validators.required),
      formDescription: new FormControl(data.description, Validators.required)
    });
  }

  formSubmit(){
    if (this.validatingForm.invalid) { return; }

    const data = {
      name: this.f.formName.value,
      description: this.f.formDescription.value
    }

    if(this.formFlg === 'add'){
      this.portfolioService.create(data, this.files)
      .pipe(first())
      .subscribe(
        data => {
          this.modalClose();
        }
      );
    } else {
      this.portfolioService.update(this.f.id.value, data)
      .pipe(first())
      .subscribe(data => {
        this.modalClose();
        }
      );
    }

  }

  modalClose(){
    this.formFlg = 'add';
    this.frame.hide();
    this.portfolioService.portfolioPageSetting.page = 1;
    this.portfolioService.portfolioPageSetting.paginate = 10;

    this.portfolioService.getList();
    this.createForm();
  }

}