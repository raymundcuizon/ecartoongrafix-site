import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../_services'


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getList();
  }

}
