import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


const routes: Routes = [
  {path:'',
  redirectTo:'breadcrumb',
  pathMatch:'full',},

  {path: 'breadcrumb',
  component:BreadcrumbComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
