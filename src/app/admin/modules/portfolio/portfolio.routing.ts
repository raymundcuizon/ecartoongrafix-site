import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ArtworkComponent } from './artwork/artwork.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: PortfolioComponent
  },
  {
    path: 'artwork',
    // redirectTo: '',
    // pathMatch: 'full',
    component: ArtworkComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
