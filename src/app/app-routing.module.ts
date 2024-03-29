import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { pathData } from './data/app-data-path.const';



const routes: Routes = [
  {
    path: pathData.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {animation: 'home'}
  },
  {
    path: pathData.about,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: {animation: 'about'}
  },
  {
    path: pathData.contact,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: {animation: 'contact'}
  },
  {
    path: pathData.works,
    loadChildren: () => import('./works/works.module').then(m => m.WorksModule),
    data: {animation: 'works'}
  },
  {
    path: pathData.work,
    loadChildren: () => import('./work/work.module').then(m => m.WorkModule),
    data: {animation: 'work'}
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {animation: 'fadeInOut'}
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
