
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import { ClientComponent } from './client/client.component';

import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/layout/admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './admin/layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/layout/admin-footer/admin-footer.component';
import { LoginComponent } from './admin/login/login.component';

import { AppConfigModule } from './app-config.module';

import { JwtInterceptor, ErrorInterceptor } from './core/interceptor';
import { AuthenticationService} from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavComponent,
    AdminComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
