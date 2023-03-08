import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:  ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  constructor(  private router: Router,) { }

  headerSticky : boolean = false;
  searchBar : boolean = false;
  showSidebar : boolean = false;

  showCoursesDropdown : boolean = false;

  showPagesDropdown : boolean = false;



  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }
  ngOnInit(): void {

  }

  handleSearch () {
    if(!this.searchBar){
      this.searchBar = true;
    }
    else{
      this.searchBar = true;
    }
  }
  handleSearchClose () {
    this.searchBar = false;
  }

    // handleSidebar
    handleSidebar () {
      this.showSidebar = true;
    }
    handleSidebarClose () {
      this.showSidebar = false;
    }

    // coursesDropdown
    coursesDropdown () {
      this.showCoursesDropdown = !this.showCoursesDropdown
    }


    // pagesDropDown
    pagesDropDown () {
      this.showPagesDropdown = !this.showPagesDropdown
    }





}
