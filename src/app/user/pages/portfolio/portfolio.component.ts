import { Component, OnInit, HostListener } from '@angular/core';
import { PortfolioService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  isActive: boolean = false;
  showLoadMore: boolean = true;
  // windowScrolled: boolean;

  constructor(public portfolioService: PortfolioService,
                private router: Router,
                  private route: ActivatedRoute) { }

  ngOnInit() {
    // ginamit ko lang pang debug ng viewport height
    // var elem = document.querySelector('#content')
    // if(elem){
    //   this.checkElementPosition(elem);
    // }
    ///////////////////////////////////////////////

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
  smoothScroll(){
    $('body,html').animate({
			scrollTop: 848 - 50
		}, 750);
  }
  redirectPortfolioitems(id){
    this.router.navigate(['/portfolio/'+id]);
  }
  // ginamit ko lang pang debug ng viewport height
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
  //       var elem = document.querySelector('#content')
  //
  //       if(elem){
  //         this.checkElementPosition(elem);
  //       }
  //       this.windowScrolled = true;
  //       // console.log("ViewportTop: ", viewportTop)
  //       // console.log("viewportHeight: ", document.documentElement.clientHeight)
  //       // console.log("viewportBottom: ", viewportBottom)
  //       // console.log("bounding: ", bounding)
  //       // console.log("elementTop: ", elementTop)
  //       // console.log("elementHeight: ", bounding.height)
  //       // console.log("elementClientHeight: ", btn.clientHeight)
  //       // console.log("elementOffsetHeight: ", btn.offsetHeight)
  //       // console.log("elementBottom: ", elementBottom)
  //       // console.log(`${elementBottom} > ${viewportTop} && ${elementTop} < ${viewportBottom}`)
  //       // console.log(elementBottom > viewportTop && elementTop < viewportBottom)
  //   }
  //   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
  //       this.windowScrolled = false;
  //   }
  // }
  // checkElementPosition(elem){
  //   // var isInViewport = function (elem) {
  //   // }
  //   if (this.getElementPosition(elem)) {
  //     console.log('In the viewport!!!!!!');
  //   }
  //   else{
  //     console.log('In NOT the viewport!!!!!!');
  //   }
  // }
  //
  // getElementPosition(elem){
  //   var viewportHeight = document.documentElement.clientHeight
  //   // Get it's position in the viewport
  //   var bounding = elem.getBoundingClientRect();
  //
  //   var elementTop = bounding.top + window.scrollY;
  //   var elementBottom = elementTop + bounding.height - 50;
  //
  //   var viewportTop = document.documentElement.scrollTop;
  //   var viewportBottom = viewportTop + viewportHeight;
  //
  //   console.log("ViewportTop: ", viewportTop)
  //   console.log("viewportHeight: ", document.documentElement.clientHeight)
  //   console.log("viewportBottom: ", viewportBottom)
  //   console.log("bounding: ", bounding)
  //   console.log("elementTop: ", elementTop)
  //   console.log("elementHeight: ", bounding.height)
  //   console.log("elementClientHeight: ", elem.clientHeight)
  //   console.log("elementOffsetHeight: ", elem.offsetHeight)
  //   console.log("elementBottom: ", elementBottom)
  //   console.log(`${elementBottom} > ${viewportTop} && ${elementTop} < ${viewportBottom}`)
  //   console.log(elementBottom > viewportTop && elementTop < viewportBottom)
  //
  //   return elementBottom > viewportTop && elementTop < viewportBottom
  // }
}
