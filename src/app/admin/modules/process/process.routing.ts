import { ProcessComponent } from './process.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
