import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../_services'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getList();
  }

  onUpdate(id: number){
    console.log(id)
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
