import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../service/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product = { id: 0, name: '', picture: '', description: '', price: 0 }
  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* this._productService.getProductById(9).subscribe((data) => {
      this.product = data
    }) */
    this.route.queryParams //
      .subscribe(params => { //
        this._productService.getProductById(params['id']).subscribe(data => { //
          this.product = data //
        }) //
      }) //

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
