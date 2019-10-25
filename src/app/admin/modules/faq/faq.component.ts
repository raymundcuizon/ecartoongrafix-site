import { Component, OnInit, ViewChild } from '@angular/core';
import { FaqService } from '../../_services'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  validatingForm: FormGroup;
  formFlg = 'add';
  public Editor = ClassicEditor;

  @ViewChild('frame', { static: true }) frame;

  constructor(public faqService: FaqService, public dialog: MatDialog) { }
  ngOnInit() {
    this.faqService.getList();
  }

 

  openDialog() {

    const dialogRef = this.dialog.open(FormModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'add',
          details: null 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.faqService.getList();
    });
  
  }

  onUpdate(data){
    const dialogRef = this.dialog.open(FormModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'update',
          details: data 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.faqService.getList();
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
