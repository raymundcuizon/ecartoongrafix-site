import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from '../../_services';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ModalProtfolioComponent } from './modal-protfolio/modal-protfolio.component';
import { PortfolioDatalist } from '../../data/schema';

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


  pageSetting = {
      page : 1,
      paginate : 12
  }

  pagination = {
      pages: 0,
      total: 0,
      before: 0,
      next: 0,
  }

  portfolioDataList: PortfolioDatalist[];

  constructor(public portfolioService: PortfolioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.portfolioService.getList(this.pageSetting)
     .toPromise().then(res => {
          const d:any = res;
          if(this.pageSetting.page > 1){
              this.portfolioDataList = this.portfolioDataList.concat(d.data_list as PortfolioDatalist[])
          } else {
              this.portfolioDataList = d.data_list as PortfolioDatalist[];
          }

          this.pagination = d.pagination;
          
          if(this.pagination.pages === this.pageSetting.page) {
            this.showLoadMore = false;
          }

      })
  }

  loadMore() {

    if(this.pagination.pages === this.pageSetting.page) {
      this.showLoadMore = false;
    }

    this.pageSetting.page = this.pagination.next;
    this.getList();
  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalProtfolioComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'add',
          details: null 
        },
        disableClose: true
      });

    dialogRef.afterClosed().subscribe(result => {
      this.reset();
    });
  
  }

  onUpdate(data){
    const dialogRef = this.dialog.open(ModalProtfolioComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'update',
          details: data 
        },
        disableClose: true
      });

    dialogRef.afterClosed().subscribe(result => {
      this.reset();
    }); 
  }

  onVisibility(id: number) {
    this.portfolioService.visibility(id).subscribe(res => {
      this.getList();
    })
  }

  reset(){
    this.pageSetting.page = 1;
    this.pageSetting.paginate = 12;
    this.getList();
  }
}
