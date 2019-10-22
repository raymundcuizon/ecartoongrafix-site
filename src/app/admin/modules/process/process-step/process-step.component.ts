import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProcessService } from 'src/app/admin/_services';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.scss']
})
export class ProcessStepComponent implements OnInit {
  id: number;
  steps: any[];
  constructor(public processService: ProcessService, private router: Router
    , private route: ActivatedRoute 
    , public dialog: MatDialog) { 
    this.id = this.route.snapshot.params['id'];

  }
  ngOnInit() {

    this.processService.get(this.id)
    .subscribe(res => {
      const d:any = res;
      this.steps = d.steps
      console.log(this.steps);
    })

  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);

    let newSeq = [];

    this.steps.forEach( (val, index, array ) => {
      newSeq.push({
        id : val.id,
        sequence : index + 1
      })
    })

    this.processService.setepSequence(this.id, newSeq)
    .pipe(first())
    .subscribe(res => {
      console.log(res);
    })

  }
  
}
