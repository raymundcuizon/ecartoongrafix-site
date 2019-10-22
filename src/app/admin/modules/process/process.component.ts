import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessService } from '../../_services';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDatalist, Process } from '../../data/schema';
import { ProcessModalComponent } from './process-modal/process-modal.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  isActive: boolean = false;
  showLoadMore: boolean = true;

  inVisible: Process[];
  visible: Process[];

  
  constructor(public processService: ProcessService, public dialog: MatDialog) { }

  ngOnInit() {
    this.processService.getList().subscribe(res => {
      const d:any = res;
      this.visible = d.visible as Process[];
      this.inVisible = d.inVisible as Process[];
    }); 
  }

  openDialog() {

    const dialogRef = this.dialog.open(ProcessModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'add',
          details: null 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.processService.getList(); 
    });
  
  }

  onUpdate(data){
    const dialogRef = this.dialog.open(ProcessModalComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'update',
          details: data 
        },
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.processService.getList(); 

    }); 
  }

  onVisibility(id: number) {
    this.processService.visibility(id).subscribe(res => {
      this.processService.getList(); 
    })
  }


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  // 
//   id
// status
// slug
// name
// description
// img_url

  drop(event: CdkDragDrop<{
    id: number,
    status: number,
    slug: string,
    name: string
    description: string
    img_url: string
  }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log(event.container.data);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log(event.container.data);
    }
  }

}
