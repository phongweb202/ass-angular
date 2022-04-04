import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/admin/header/header.component';
import { AsideComponent } from './layouts/admin/aside/aside.component';
import { LayoutComponent } from './layouts/admin/layout/layout.component';
import { DashbardComponent } from './views/admin/dashbard/dashbard.component';
import { ProductListComponent } from './views/admin/product/product-list/product-list.component';
import { ProductFormComponent } from './views/admin/product/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './views/admin/product/product-detail/product-detail.component';
import { ProductStatusComponent } from './components/product-status/product-status.component';
import { LayoutClientComponent } from './layouts/client/layout-client/layout-client.component';
import { HeaderClientComponent } from './layouts/client/header-client/header-client.component';
import { FooterClientComponent } from './layouts/client/footer-client/footer-client.component';
import { HomePageComponent } from './views/client/home-page/home-page.component';
import { MenuComponent } from './layouts/client/menu/menu.component';
import { ProductPageComponent } from './views/client/product-page/product-page.component';
import { ViewProductComponent } from './views/client/view-product/view-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhuKienComponent } from './views/client/phu-kien/phu-kien.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterAdminComponent } from './layouts/admin/footer-admin/footer-admin.component';
import { LoginComponent } from './layouts/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    LayoutComponent,
    DashbardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent,
    ProductStatusComponent,
    LayoutClientComponent,
    HeaderClientComponent,
    FooterClientComponent,
    HomePageComponent,
    MenuComponent,
    ProductPageComponent,
    ViewProductComponent,
    PhuKienComponent,
    ShowValidateComponent,
    FooterAdminComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
