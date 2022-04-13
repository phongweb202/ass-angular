import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: any;
  constructor(private route: Router, private ps: ProductService, private cs: CategoryService,private toast:ToastrService) { }
  categories: any;
  arrProducts:any;
  ngOnInit(): void {
    this.onGetList();
    this.cs.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      this.arrProducts = data;
    });
  }
  filterCate(id: number | string) {
    this.products = this.arrProducts.filter((item:any) => item.categoryId === id);
  }
}
