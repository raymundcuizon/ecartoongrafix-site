import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio.routing';
import { ArtworkComponent } from './artwork/artwork.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PortfolioComponent, ArtworkComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule
  ]
})
export class PortfolioModule { }
