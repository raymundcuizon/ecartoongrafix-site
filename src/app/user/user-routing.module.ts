import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent, LandingPageComponent, ServicesComponent, ProcessComponent, StoreComponent, FaqComponent, AboutComponent, ContactComponent } from './pages';

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
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
