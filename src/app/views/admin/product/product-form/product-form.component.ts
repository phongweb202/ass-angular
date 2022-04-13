import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent implements OnInit {
  formProduct: FormGroup;
  product: any;
  content = 'ADD PRODUCT';
  duongDanAnh: any;
  arr: any;
  id: number;
  categories: any;
  constructor(private route: Router, private activeRoute: ActivatedRoute, private ps: ProductService, private toastr: ToastrService, private categoryService: CategoryService) {
    this.id = 0;
    this.formProduct = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(1)
      ]),
      desc: new FormControl(null, [
      ]),
      img: new FormControl(null,),
      status: new FormControl(0, [
        Validators.required
      ]),
      categoryId: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.product = data;
        this.content = "UPDATE PRODUCT";
        this.formProduct.setValue({ name: data.name, price: data.price, desc: data.desc, img: '', status: data.status, categoryId: data.categoryId });
      });
    }
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  cancel() {
    this.route.navigate(['/admin/phones']);
  }
  onFileChanged(event: any) {
    this.duongDanAnh = event.target.files[0];
  }
  onSubmit(duLieu: any) {
    if (this.id) {
      this.toastr.success('Cập nhật sản phẩm thành công.Chuyển trang sau ít phút!', 'Thông báo!', {
        timeOut: 1000
      });
      if (duLieu.img) {
        this.ps.uploadImg(this.duongDanAnh).subscribe(data => {
          this.ps.updateProduct(this.id, { ...duLieu, img: data.url, status: +duLieu.status, categoryId: +duLieu.categoryId }).subscribe(data => {

            this.route.navigate(['admin/phones']);
          })
        });
      }
      else {
        this.ps.updateProduct(this.id, { ...duLieu, img: this.product.img, status: +duLieu.status, categoryId: +duLieu.categoryId }).subscribe(data => {
          this.route.navigate(['admin/phones']);
        });
      }

    } else {
      this.toastr.success('Thêm sản phẩm thành công.Chuyển trang sau ít phút!', 'Thông báo!', {
        timeOut: 1000
      });
      this.ps.uploadImg(this.duongDanAnh).subscribe(data => {
        this.ps.createProduct({ ...duLieu, img: data.url, status: +duLieu.status, categoryId: +duLieu.categoryId }).subscribe(data => {
          this.route.navigate(['admin/phones']);
        })
      });
    }

  }
}
