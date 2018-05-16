import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }   from './landing/landing.component';

import { SearchComponent }      from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent},

  /*{ path: '',component: LandingComponent, pathMatch: 'full' },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'tweets', component: SearchComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
