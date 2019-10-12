import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../_services'

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {


  public Editor = ClassicEditor;
  description: string;
  
  constructor(public serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.get().subscribe(res => {
      const d:any = res;
      this.description = d.description;
    });

  }

  onSubmit(){
    this.serviceService.update({
      description: this.description
    }).subscribe(res => {
      console.log(res)
    })
    
  }
}
