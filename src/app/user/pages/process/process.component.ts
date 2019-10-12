import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../_services';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  constructor(public processService: ProcessService) { }

  ngOnInit() {
    this.processService.getList();
  }

}
