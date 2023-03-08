import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Router, RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing-module';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
      RouterModule
  ],
  exports:[ BreadcrumbComponent],
})
export class SharedModule { }
