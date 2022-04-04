import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  id :number;
  constructor(private route: Router, private activeRoute: ActivatedRoute, private ps: ProductService, private toastr: ToastrService) {
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
      ])
    })
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.product = data;
        this.content = "UPDATE PRODUCT";
        this.formProduct.setValue({ name: data.name, price: data.price, desc: data.desc, img: '', status: data.status });
      });
    }

  }
  cancel() {
    this.route.navigate(['/admin/phones']);
  }
  onFileChanged(event: any) {
    this.duongDanAnh = event.target.files[0];
  }
  onSubmit(duLieu: any) {
    if (this.id) {
      this.toastr.success('Cập nhật sản phẩm thành công.Chuyển trang sau ít phút!', 'Thông báo!',{
        timeOut:3000
      });
      if (duLieu.img) {
        this.ps.uploadImg(this.duongDanAnh).subscribe(data => {
          this.ps.updateProduct(this.id, { ...duLieu, img: data.url, status: +duLieu.status }).subscribe(data => {
           
            this.route.navigate(['admin/phones']);
          })
        });
      }
      else {
        this.ps.updateProduct(this.id, { ...duLieu, img: this.product.img, status: +duLieu.status }).subscribe(data => {
          this.route.navigate(['admin/phones']);
        });
      }

    } else {
      this.toastr.success('Thêm sản phẩm thành công.Chuyển trang sau ít phút!', 'Thông báo!',{
        timeOut:3000
      });
      this.ps.uploadImg(this.duongDanAnh).subscribe(data => {
        this.ps.createProduct({ ...duLieu, img: data.url, status: +duLieu.status }).subscribe(data => {
          this.route.navigate(['admin/phones']);
        })
      });
    }

  }
}
