import { Component, OnInit, HostListener } from '@angular/core';
import { PortfolioService } from '../../_services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  isActive: boolean = false;
  showLoadMore: boolean = true;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getList();
    console.log(this.portfolioService.getList());
  }

  loadMore() {

    if(this.portfolioService.pagination.pages === this.portfolioService.pagination.next) {
      this.showLoadMore = false;
    }

    this.portfolioService.portfolioPageSetting.page = this.portfolioService.pagination.next;
    this.portfolioService.getList();
  }

}
