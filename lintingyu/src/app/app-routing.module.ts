import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { pathData } from './data/app-data-path.const';



const routes: Routes = [
  {
    path: pathData.home,
    loadChildren: './home/home.module#HomeModule',
    data: {animation: 'home'}
  },
  {
    path: pathData.about,
    loadChildren: './about/about.module#AboutModule',
    data: {animation: 'about'}
  },
  {
    path: pathData.contact,
    loadChildren: './contact/contact.module#ContactModule',
    data: {animation: 'contact'}
  },
  {
    path: pathData.works,
    loadChildren: './works/works.module#WorksModule',
    data: {animation: 'works'}
  },
  {
    path: pathData.work,
    loadChildren: './work/work.module#WorkModule',
    data: {animation: 'work'}
  },
  // {
  //   path: pathData.workA,
  //   loadChildren: './work/work-a/work-a.module#WorkAModule',
  //   data: {animation: 'workA'}
  // },
  // {
  //   path: pathData.workB,
  //   loadChildren: './work/work-b/work-b.module#WorkBModule',
  //   data: {animation: 'workB'}
  // },
  // {
  //   path: pathData.workC,
  //   loadChildren: './work/work-c/work-c.module#WorkCModule',
  //   data: {animation: 'workC'}
  // },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
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
