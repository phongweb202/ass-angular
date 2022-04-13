import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private route:Router) { }
  ele = 1
  ngOnInit(): void {
  }
  pageDashboard(){
    this.ele = 1
    this.route.navigate(['admin/dashboard']);
  }
  pageProduct(){
    this.ele = 2
    this.route.navigate(['admin/phones']);
  }
  pageCategory(){
    this.ele = 3;
    this.route.navigate(['admin/category']);
  }
}
