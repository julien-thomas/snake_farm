import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../service/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../service/auth/auth.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  isAdmin: boolean = false

  product: Product = { id: 0, name: '', picture: '', description: '', price: 0 }

  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit(): void {

    this._userService.getUserInfo().subscribe(data => {
      if (data.role === 'admin') 
        this.isAdmin = true
      console.log(this.isAdmin)
    })
    this.route.queryParams
      .subscribe(params => {
        this._productService.getProductById(params['id']).subscribe(data => {
          this.product = data
        })
      })
  }

  editProduct(product: Product) {
    this.router.navigate(['/editProduct'], { queryParams: { id: product.id }})
  }

  deleteProduct() {
    console.log(this.product.id)
    this._productService.deleteProduct(this.product.id).subscribe()
    this.router.navigate(['/products'])
  }
}
