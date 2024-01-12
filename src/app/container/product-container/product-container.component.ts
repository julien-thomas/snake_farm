import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product-service.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent implements OnInit {

  products: Product[] = []

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  
}
