import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../_services';

import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  id: number;
  showLoadMore: boolean = true;

  constructor(private router: Router,
                private route: ActivatedRoute,
                  private portfolioService: PortfolioService) {
    this.id = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this.portfolioService.getArtworkList(this.id);
  }
  loadMore() {

    if(this.portfolioService.paginationArtwork.pages === this.portfolioService.paginationArtwork.next) {
      this.showLoadMore = false;
    }

    this.portfolioService.portfolioPageSettingArtwork.page = this.portfolioService.paginationArtwork.next;
    this.portfolioService.getArtworkList(this.id);
  }
  smoothScroll(){
    $('body,html').animate({
      scrollTop: 848 - 144
    }, 750);
  }
}
