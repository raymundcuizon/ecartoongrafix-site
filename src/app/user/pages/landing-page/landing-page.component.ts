import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { PortfolioService } from '../../_services';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  contentHeight: number;
  windowScrolled: boolean;
  showImg_1: boolean;
  showImg_2: boolean;
  showImg_3: boolean;

  isActive: boolean = false;
  showLoadMore: boolean = true;

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [
    '/assets/images/img1.jpg',
    '/assets/images/img2.jpg',
    '/assets/images/img3.jpg'
  ]

  constructor(public portfolioService: PortfolioService, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.onWindowScroll();
    this.contentHeight = document.documentElement.clientHeight
    this.portfolioService.getList();

  }

  loadMore() {

    if(this.portfolioService.pagination.pages === this.portfolioService.pagination.next) {
      this.showLoadMore = false;
    }

    this.portfolioService.portfolioPageSetting.page = this.portfolioService.pagination.next;
    this.portfolioService.getList();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // event.target.innerWidth;
    this.contentHeight = document.documentElement.clientHeight
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        var img1 = document.querySelector('#img1')
        var img2 = document.querySelector('#img2')
        var img3 = document.querySelector('#img3')

        if(img1){
          this.image_1(img1);
        }
        if(img2){
          this.image_2(img2);
        }
        if(img3){
          this.image_3(img3);
        }
        this.windowScrolled = true;
        // console.log("ViewportTop: ", viewportTop)
        // console.log("viewportHeight: ", document.documentElement.clientHeight)
        // console.log("viewportBottom: ", viewportBottom)
        // console.log("bounding: ", bounding)
        // console.log("elementTop: ", elementTop)
        // console.log("elementHeight: ", bounding.height)
        // console.log("elementClientHeight: ", btn.clientHeight)
        // console.log("elementOffsetHeight: ", btn.offsetHeight)
        // console.log("elementBottom: ", elementBottom)
        // console.log(`${elementBottom} > ${viewportTop} && ${elementTop} < ${viewportBottom}`)
        // console.log(elementBottom > viewportTop && elementTop < viewportBottom)
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
        this.showImg_1 = false;
        this.showImg_2 = false;
        this.showImg_3 = false;
    }
  }
  image_1(img){
    // var isInViewport = function (elem) {
    // }
    if (this.isInViewport(img)) {
      console.log('In the viewport!!!!!!');
      this.showImg_1 = true;
    }
    else{
      console.log('In NOT the viewport!!!!!!');
      this.showImg_1 = false;
    }
  }

  image_2(img){
    // var isInViewport = function (elem) {
    // }
    if (this.isInViewport(img)) {
      console.log('In the viewport!!!!!!');
      this.showImg_2 = true;
    }
    else{
      console.log('In NOT the viewport!!!!!!');
      this.showImg_2 = false;
    }
  }

  image_3(img){
    // var isInViewport = function (elem) {
    // }
    if (this.isInViewport(img)) {
      console.log('In the viewport!!!!!!');
      this.showImg_3 = true;
    }
    else{
      console.log('In NOT the viewport!!!!!!');
      this.showImg_3 = false;
    }
  }

  isInViewport(elem){
    var viewportHeight = document.documentElement.clientHeight
    // Get it's position in the viewport
    var bounding = elem.getBoundingClientRect();

    var elementTop = bounding.top + window.scrollY;
    var elementBottom = elementTop + bounding.height - 50;

    var viewportTop = document.documentElement.scrollTop;
    var viewportBottom = viewportTop + viewportHeight;

    return elementBottom > viewportTop && elementTop < viewportBottom
  }

}
