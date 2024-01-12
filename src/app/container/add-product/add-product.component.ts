import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  product: Product = { id: 0, name: '', picture: '', description: '', price: 0 }
  
  name: string = ''
  picture: string = ''
  description: string = ''
  price: number = 0

  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    
}

  addProduct() {
    this._productService.addProduct(this.name, this.picture, this.description, this.price)
      .subscribe(data => {
        this.router.navigateByUrl('/products')
      })
  }
}
