import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../_services';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isActive: boolean = false;
  showLoadMore: boolean = true;
  
  constructor(public portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getList();

  }

  loadMore() {

    if(this.portfolioService.pagination.pages === this.portfolioService.pagination.next) {
      this.showLoadMore = false;
    }

    this.portfolioService.portfolioPageSetting.page = this.portfolioService.pagination.next;
    this.portfolioService.getList();
  }

}
