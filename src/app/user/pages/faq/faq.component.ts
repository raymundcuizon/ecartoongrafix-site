import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../_services'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(public faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getList();

  }

}
