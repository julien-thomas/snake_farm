import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProfileComponent } from './container/profile/profile.component';
import { AddFormComponent } from './container/profile/address-form/add-form/add-form.component';
import { EditFormComponent } from './container/profile/address-form/edit-form/edit-form.component';
import { AuthGuard } from './common/auth.guard';
import { EditUserFormComponent } from './container/profile/user-form/edit-user-form/edit-user-form.component';
import { ProductComponent } from './container/product/product.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { AdminComponent } from './container/admin/admin/admin.component';
import { UserContainerComponent } from './container/user-container/user-container.component';
import { EditProductComponent } from './container/edit-product/edit-product.component';
import { AddProductComponent } from './container/add-product/add-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductContainerComponent},
  {path: 'product', component: ProductDetailComponent}, //
  {path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {path: 'address', 
    component: AddFormComponent,
    canActivate: [AuthGuard]
  },
  {path: 'editAddress', 
    component: EditFormComponent,
    canActivate: [AuthGuard]
  },
  {path: 'editUser', 
    component: EditUserFormComponent,
    canActivate: [AuthGuard]
  },
  {path: 'admin', component: AdminComponent},
  {path: 'users', component: UserContainerComponent},
  {path: 'editProduct', component: EditProductComponent},
  {path: 'addProduct', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
