import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  constructor(private activeRoute: ActivatedRoute, private ps: ProductService, private route: Router, private cs: CategoryService) { }
  product: any;
  category: any;
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.product = data;
        this.cs.getCategory(data.categoryId).subscribe(result => {
          this.category = result;
        })
      });
    }
  };
  cancel() {
    this.route.navigate(['admin/phones']);
  };
  goToEdit() {
    this.route.navigate([`admin/phones/${this.id}/edit`]);
  }

}
