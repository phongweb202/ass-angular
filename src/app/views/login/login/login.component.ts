
import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formDangNhap: FormGroup;
  class = [
    "form-group tw-bg-gray-100 tw-flex tw-rounded-2xl mt-3 tw-shadow-lg tw-border-2 tw-border-gray-200",
    "form-group tw-bg-gray-100 tw-flex tw-rounded-2xl mt-3 tw-shadow-lg tw-border-2 tw-border-red-500"
  ]
  constructor(private socialAuthService: SocialAuthService, private authService: AuthService, public route: Router, private toastr: ToastrService, private us: UserService) {
    this.formDangNhap = new FormGroup({
      email: new FormControl('',
        [Validators.required,
        Validators.email]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  ngOnInit(): void {
  }
  loginGoogle() {
    this.socialAuthService.
      signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(authData => {
        localStorage.setItem('infoCreate', JSON.stringify(authData));
        this.authService.checkExitUser(authData.email, authData.id)
          .subscribe(response => {
            if (response) {
              this.toastr.error("Tài khoản đã tồn tại", "Cảnh báo", {
                timeOut: 3000
              });
            } else {
              this.route.navigate(['sign-up']);
            }
          })
      });
  }
  onSubmit(data: any) {
    localStorage.removeItem('infoCreate');
    this.us.signIn(data).subscribe(response => {
      this.us.logginUser.next(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.toastr.success("Đăng nhập thành công", "Thông báo");
      setTimeout(() => {
        this.route.navigate(['/']);
      }, 1000)
    }, (error: any) => {
      this.us.logginUser.next({});
      this.toastr.warning("Tài khoản hoặc mật khẩu không chính xác", "Cảnh báo");
    });

  }
}
