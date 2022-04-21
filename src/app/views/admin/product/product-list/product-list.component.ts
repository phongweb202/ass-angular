import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { removeAccentsTV } from 'src/app/components/xoaDau';
import { ProductService } from 'src/app/services/product.service';
type product = {
  id: number | string
  name: string,
  price: number,
  desc: string,
  img: string,
  status: number
};
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title = 'PRODUCTS';
  products: product[] = [];
  check = false;
  arrProduct = new Array();
  class = 'fa-solid fa-circle text-success';
  page = 0;
  idChoXoa: any;
  hidden = true;
  bamNut = false;
  arr: any = [];
  yeuCau: any;
  valueFilter = '';
  constructor(private ps: ProductService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.onGetList();
  }
  pagination(duLieu: any) {
    this.arrProduct = [];
    let thuong = duLieu.length / 5;
    let temp = 0;
    for (let index = 0; index < thuong; index++) {
      let data: any = [];
      for (let i = temp; i < temp + 5; i++) {
        if (!duLieu[i]) {
          break;
        }
        data.push(duLieu[i]);

      }
      temp = temp + 5;
      this.arrProduct[index] = data;
    };
  }
  onGetList(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      this.arr = data;
      if (this.products) {
        let duLieu = this.products.sort(function (s1: any, s2: any) {
          return s2.id - s1.id
        })
        this.pagination(duLieu);
      }
    });

  };
  nextPage() {
    this.page = this.page + 1;
    if (this.page >= this.arrProduct.length) {
      this.page = 0;
      return;
    }
  }
  lastPage() {
    this.page = this.page - 1;
    if (this.page < 0) {
      this.page = this.arrProduct.length - 1;
      return;
    }
  };

  setPage(value: number) {
    this.page = value;
  }
  setID(id: number) {
    this.idChoXoa = id;
    this.hidden = false;
  }
  remove(id: number) {
    this.toastr.success("Xóa sản phẩm thành công", "Thông báo");
    this.ps.removeProduct(id).subscribe(data => {
      this.onGetList();
    })
  };
  parentChangeStatus(value: any, id: number) {
    this.toastr.success("Cập nhật trạng thái sản phẩm thành công", "Thông báo");
    this.ps.updateStatus(id, { status: value }).subscribe(data => {
      this.onGetList();
    });
  }
  filter(duLieu: any) {
    this.yeuCau = duLieu.target.value;
    let data = this.arr;
    if (!this.valueFilter) {
      data = this.products;
    }
    if (this.yeuCau == 1) {

      this.arr = data.sort(function (s1: any, s2: any) {
        return s2.price - s1.price
      });

    } else if (this.yeuCau == 2) {
      this.arr = data.sort(function (s1: any, s2: any) {
        return s1.price - s2.price
      });
    }
    else if (this.yeuCau == 3) {
      this.arr = data.filter((item: any) => item.status == 0);
    }
    else if (this.yeuCau == 4) {
      this.arr = data.filter((item: any) => item.status == 1);
    }
    else {
      this.ngOnInit();
      return;
    }
    console.log('this.arr:' + this.arr);
    if (this.arr.length === 0) {
      this.toastr.warning("Không có sản phẩm nào khớp với từ khóa bạn nhập", "Cảnh báo", {
        timeOut: 3000
      });
      this.arr = this.products;
    }
    this.page = 0;
    this.pagination(this.arr);
  };
  searchProduct(event: any) {
    this.valueFilter = event.target.value;
    let data = this.arr.filter((item: any) => {
      let nameProduct = removeAccentsTV(item.name).toLowerCase().trim();
      let nameNow = removeAccentsTV(this.valueFilter).toLowerCase().trim();
      return nameProduct.includes(nameNow);
    });
    this.page = 0;
    if (!this.valueFilter) {
      data = this.products;
    }
    if (data.length === 0) {
      this.toastr.warning("Không có sản phẩm nào khớp với từ khóa bạn nhập", "Cảnh báo", {
        timeOut: 3000
      });
      data = this.products;
    }
    this.pagination(data);
    this.arr = data;
  }
}
