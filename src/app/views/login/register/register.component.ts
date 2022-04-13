import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formDangKy: FormGroup;
  info: any;
  isEqualPassword: boolean = true;
  class = [
    "form-group tw-bg-gray-100 tw-flex tw-rounded-2xl mt-3 tw-shadow-lg tw-border-2 tw-border-gray-200",
    "form-group tw-bg-gray-100 tw-flex tw-rounded-2xl mt-3 tw-shadow-lg tw-border-2 tw-border-red-500"
  ]
  constructor(private us: UserService, private toastr: ToastrService,private route:Router) {
    this.formDangKy = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      "re-password": new FormControl('', [
        Validators.required,
        // this.checkPassword
      ])
    });
  }
  data: any;
  ngOnInit(): void {
    if (localStorage.getItem('infoCreate')) {
      this.info = JSON.parse(localStorage.getItem('infoCreate') || "{}");
      this.data = {
        name: this.info.name,
        googleId: this.info.id,
        email: this.info.email,
        avatar: this.info.photoUrl,
        password: ""
      }
    }
  }
  check(event: any) {
    let pass = event.target.value;
    if (pass) {
      if (pass !== this.formDangKy.value.password) {
        this.isEqualPassword = false;
        return;
      }
    }
    this.isEqualPassword = true;
  }
  onSubmit(duLieu: any) {
    this.data = { ...this.data, password: duLieu.password };
    this.us.signUp(this.data).subscribe(data => {
      if (data) {
        this.toastr.success("Đăng ký thành công.Chuyển sang trang đăng nhập sau ít phút !", "Thông báo", {
          timeOut: 3000
        });
        setTimeout(() => {
          this.route.navigate(['login']);
        }, 2000);
      } else {
        this.toastr.success("Có lỗi xảy ra vui lòng thử lại sau !", "Thông báo", {
          timeOut: 3000
        });
      }
    });
  }
}
