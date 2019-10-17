import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio.routing';
import { ArtworkComponent } from './artwork/artwork.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalProtfolioComponent } from './modal-protfolio/modal-protfolio.component';
import { MatDialogModule } from '@angular/material';
// import { MaterialsModule  } from '../../../materials.module';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';


@NgModule({
  declarations: [PortfolioComponent, ArtworkComponent, ModalProtfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  entryComponents: [
    ModalProtfolioComponent
  ]
})
export class PortfolioModule { }
