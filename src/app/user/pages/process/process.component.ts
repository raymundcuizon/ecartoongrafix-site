import { Component, OnInit,  AfterContentInit } from '@angular/core';
import { ProcessService } from '../../_services';
import $ from "jquery";
import { Process } from 'src/app/admin/data/schema';
import { Step } from '../../data/schema';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit,  AfterContentInit {

  activeIndex = 0;
  list: Process[];
  steps: Step[];
  constructor(public processService: ProcessService) { }

  ngOnInit() {

    this.processService.getList().subscribe((res) => {
      const d: any = res;
      this.list = d.datalist as Process[];
        this.list.forEach((val, index, array) => {
          let id = "#processPanel_"+index;
          let bgImg = val.img_url;
          $(document).ready(function() {
            $(id +" > div > .panel-heading").css('background-image', 'url('+bgImg+')');
          });        
        });
    })
  }
  doSomethingOnOpen(data) {
    // this.processService.get(data.id).subscribe(res => {
    //   const d: any = res;
    //   this.steps = d.steps as Step[];
    // })
  }
  ngAfterContentInit(): void {

   
  }
}
