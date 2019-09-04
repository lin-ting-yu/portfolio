import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkCComponent } from './work-c.component';


const routes: Routes = [
  {
    path: '',
    component: WorkCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkCRoutingModule { }
