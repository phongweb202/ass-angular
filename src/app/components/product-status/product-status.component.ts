import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.css']
})
export class ProductStatusComponent implements OnInit {
  @Input('status') status: any;
  @Output() changeStatus: EventEmitter<number>;
  constructor() {
    this.changeStatus = new EventEmitter();
  }
  ngOnInit(): void {
  }
  onChangeStatus(newStatus: number) {
    this.changeStatus.emit(newStatus);
  }
}
