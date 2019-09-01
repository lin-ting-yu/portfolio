import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
