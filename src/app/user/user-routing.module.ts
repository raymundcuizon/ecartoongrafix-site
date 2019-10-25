import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent, PortfolioComponent, PortfolioItemsComponent } from './pages';

const routes: Routes = [
    {   path: '', component: UserComponent,
        children :[
            { path: '', component: LandingPageComponent},
            { path: 'services', component: ServicesComponent},
            { path: 'process', component: ProcessComponent},
            { path: 'store', component: StoreComponent},
            { path: 'faq', component: FaqComponent},
            { path: 'about', component: AboutComponent},
            { path: 'contact', component: ContactComponent},
            { path: 'portfolio', component: PortfolioComponent},
            { path: 'portfolio/:id', component: PortfolioItemsComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
