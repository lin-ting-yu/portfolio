import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkBComponent } from './work-b.component';


const routes: Routes = [
  {
    path: '',
    component: WorkBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkBRoutingModule { }
