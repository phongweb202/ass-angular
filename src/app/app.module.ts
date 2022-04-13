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
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './views/login/login/login.component';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './views/login/register/register.component';
import { ListCategoryComponent } from './views/admin/category/list-category/list-category.component';
import { FormCategoryComponent } from './views/admin/category/form-category/form-category.component';
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
    RegisterComponent,
    LoginComponent,
    ListCategoryComponent,
    FormCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
