import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AdminComponent, AdminNavComponent, AdminHeaderComponent, AdminFooterComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
