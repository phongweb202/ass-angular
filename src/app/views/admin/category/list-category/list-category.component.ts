import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { removeAccentsTV } from 'src/app/components/xoaDau';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  title = 'Category'
  action = 'Create Category';
  categories: any;
  formCate: FormGroup;
  idCanXoa: any;
  arr: any;
  constructor(private cs: CategoryService, private toast: ToastrService) {
    this.formCate = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      id: new FormControl('')
    })
  }
  onGetList() {
    this.cs.getCategories().subscribe(data => {
      this.categories = data;
      this.arr = data;
    });
  }
  ngOnInit(): void {
    this.onGetList();
  }
  selectAll() {

  }
  removeSelectAll() {

  }
  search(event: any) {
    this.categories = this.arr.filter((item: any) => {
      const searchValue = event.target.value;
      let nameCategory = removeAccentsTV(item.name).toLowerCase().trim();
      let nameNow = removeAccentsTV(searchValue).toLowerCase().trim();
      return nameCategory.includes(nameNow);
    });
  }
  onSumit(data: any) {
    if (this.formCate.value.id) {
      this.cs.updateCategory(this.formCate.value.id, { name: data.name }).subscribe(result => {
        this.toast.success("Cập nhật danh mục thành công", "Thông báo");
        this.onGetList();
        this.formCate.setValue({ id: 0, name: '' });
      })
    } else {
      this.cs.createCategory(data).subscribe(response => {
        this.toast.success("Thêm danh mục thành công", "Thông báo");
        this.onGetList();
      })
    }

  };
  onEdit(id: number | string) {
    this.action = "Update Category";

    this.cs.getCategory(id).subscribe(response => {
      this.formCate.setValue({ ...response });
    })
  };
  setID(id: number | string) {
    this.idCanXoa = id;
  }
  remove(id: number | string) {
    this.cs.removeCategory(id).subscribe(response => {
      this.toast.success("Xóa danh mục thành công", "Thông báo");
      this.onGetList();
    })
  }
}
