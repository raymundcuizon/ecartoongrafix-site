import { Component, OnInit, HostListener, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  windowScrolled: boolean;
  windowScrolled_rev: boolean;
  isNavOpen = false;

  constructor() { } // @Inject(DOCUMENT) private document: Document
  @HostListener( 'window:scroll' , [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
        this.windowScrolled_rev = false;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
        this.windowScrolled_rev = true;
    }
  }


  ngOnInit() {
    this.onWindowScroll();
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
