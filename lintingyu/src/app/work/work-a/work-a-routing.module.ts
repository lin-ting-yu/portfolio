import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkAComponent } from './work-a.component';


const routes: Routes = [
  {
    path: '',
    component: WorkAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkARoutingModule { }
