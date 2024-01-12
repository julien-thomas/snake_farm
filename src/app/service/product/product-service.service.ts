import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment.development';
import { Product } from '../../model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = environment.API_URL

  optionRequete = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }), responseType: 'text' as 'json'
  }

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.API_URL}/products`/* , this.optionRequete */)
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.API_URL}/products/${id}`) //
  }

  addProduct(name: string, picture: string, description: string, price: number) {
    return this.http.post(`${this.API_URL}/products`, {name: name, picture: picture, description: description, price: price})
  }

  editProduct(product: Product, id: number) {
    return this.http.put<Product>(`${this.API_URL}/products/${id}`, product)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.API_URL}/products/${id}`, this.optionRequete)
  }
}
