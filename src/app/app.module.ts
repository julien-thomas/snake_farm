import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { NavBarComponent } from './container/nav-bar/nav-bar.component';
import { RegisterComponent } from './container/register/register.component';
import { ProductComponent } from './container/product/product.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProfileComponent } from './container/profile/profile.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { AddFormComponent } from './container/profile/address-form/add-form/add-form.component';
import { EditFormComponent } from './container/profile/address-form/edit-form/edit-form.component';
import { EditUserFormComponent } from './container/profile/user-form/edit-user-form/edit-user-form.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { AdminComponent } from './container/admin/admin/admin.component';
import { UserContainerComponent } from './container/user-container/user-container.component';
import { UserComponent } from './container/user/user.component';
import { EditProductComponent } from './container/edit-product/edit-product.component';
import { AddProductComponent } from './container/add-product/add-product.component';
import { ErrorInterceptor } from './common/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    ProductComponent,
    ProductContainerComponent,
    ProfileComponent,
    AddFormComponent,
    EditFormComponent,
    EditUserFormComponent,
    ProductDetailComponent,
    AdminComponent,
    UserContainerComponent,
    UserComponent,
    EditProductComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }//,
  //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
