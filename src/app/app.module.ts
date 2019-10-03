
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { ClientComponent } from './client/client.component';

import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/layout/admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './admin/layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/layout/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
