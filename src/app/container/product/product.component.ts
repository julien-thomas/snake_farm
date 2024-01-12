import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() item: Product = { id: 0, name: '', picture: '', description: '', price: 0 }
  product: Product = { id: 0, name: '', picture: '', description: '', price: 0 }

  constructor(
    private _productService: ProductService, //
    private route: ActivatedRoute, //
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  getProduct(id: number) {
    
        /* this._productService.getProductById(9).subscribe(() => { */
          this.router.navigate(['/product'], { queryParams: { id: id }})
      /*   }) */
      
  }

}


