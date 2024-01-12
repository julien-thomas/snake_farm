import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../service/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  product: Product = { id: 0, name: '', picture: '', description: '', price: 0 }
  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this._productService.getProductById(params['id']).subscribe(data => {
          this.product = data
        })
      })
    
    
  }

  /* editProduct(id: number) {
    this.route.queryParams //
      .subscribe(params => { //
        this._productService.editProduct(this.product, params['id']).subscribe(data => { //
          this.product = data //
        }) //
      }) //
      this.router.navigate(['/products'])
  } */

  editProduct(id: number) {
    
        this._productService.editProduct(this.product, this.product.id).subscribe(data => {
          this.product = data
          this.router.navigate(['/products'])
        })
      
      
  }
}
