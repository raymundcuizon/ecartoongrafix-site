import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../_services'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService : AboutService) { }

  ngOnInit() {
    this.aboutService.getList();
  }

}
