import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CreaterestComponent} from './createrest/createrest.component';
import {RestmocksComponent} from './restmocks/restmocks.component';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'createrest',
    component: CreaterestComponent
  },
  {
    path: 'restmocks',
    component: RestmocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, NgxPaginationModule],
})
export class AppRoutingModule {
}
