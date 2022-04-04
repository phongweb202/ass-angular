import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id: any;
  constructor(private activeRoute: ActivatedRoute, private ps: ProductService) { }
  product: any;

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.product = data;
      });

    }
  }

}
