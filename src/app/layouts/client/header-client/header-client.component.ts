import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  isLoggedIn: boolean = false;
  logginInUser: any = null;
  constructor(public router: Router, private us: UserService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.us.logginUser.subscribe(user => {
      if (user.email != undefined && user.googleId != undefined) {
        this.isLoggedIn = true;
        this.logginInUser = user;
      }
    })
  }
  showMesseage(){
    this.toast.success("Bạn đang đang nhập tài khoản "+this.logginInUser.email);
  }
  logout(){
    this.toast.success("Đăng xuất thành công","Thông báo");
    localStorage.removeItem("user");
    this.us.logginUser.next({});
    this.isLoggedIn = false;
    this.logginInUser = null;
  }
}
