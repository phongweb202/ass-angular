import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/admin/layout/layout.component';
import { LayoutClientComponent } from './layouts/client/layout-client/layout-client.component';
import { ListCategoryComponent } from './views/admin/category/list-category/list-category.component';
import { DashbardComponent } from './views/admin/dashbard/dashbard.component';
import { ProductDetailComponent } from './views/admin/product/product-detail/product-detail.component';
import { ProductFormComponent } from './views/admin/product/product-form/product-form.component';
import { ProductListComponent } from './views/admin/product/product-list/product-list.component';
import { HomePageComponent } from './views/client/home-page/home-page.component';
import { ProductPageComponent } from './views/client/product-page/product-page.component';
import { ViewProductComponent } from './views/client/view-product/view-product.component';
import { LoginComponent } from './views/login/login/login.component';
import { RegisterComponent } from './views/login/register/register.component';
const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      },
      {
        path: 'phones',
        component: ProductPageComponent
      },
      {
        path: 'phones/:id',
        component: ViewProductComponent
      }
    ]
  }
  ,
  {
    path: 'admin', component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashbardComponent
      }
      , {
        path: 'phones',
        component: ProductListComponent
      },
      {
        path: 'phones/create',
        component: ProductFormComponent
      },
      {
        path: 'phones/:id/edit',
        component: ProductFormComponent
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent
      },
      {
        path: 'category',
        component: ListCategoryComponent
      }
    ]

  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'sign-up',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
