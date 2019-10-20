import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'faq',
        loadChildren: () =>
          import('./admin/modules/faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./admin/modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'inquiry',
        loadChildren: () =>
          import('./admin/modules/inquiry/inquiry.module').then(m => m.InquiryModule)
      },
      {
        path: 'process',
        loadChildren: () =>
          import('./admin/modules/process/process.module').then(m => m.ProcessModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./admin/modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'service',
        loadChildren: () =>
          import('./admin/modules/service/service.module').then(m => m.ServiceModule)
      }
    ]
  },
  {
    path: 'cms-login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
