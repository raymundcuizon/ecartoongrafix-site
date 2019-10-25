import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  id: number;
  constructor(private router: Router,
                private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
