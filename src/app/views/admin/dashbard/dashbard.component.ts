import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent implements OnInit {
  title = 'DASHBOARD';
  constructor() { }

  ngOnInit(): void {
  }

}
