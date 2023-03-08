import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private _router:Router){}
  ngOnInit(): void {

  }

  @Input () title : string | undefined;
  @Input () subtitle : string | undefined;
}
