import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { WorksComponent } from './works/works.component';
// import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'works',
    loadChildren: './works/works.module#WorksModule'
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules,
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
