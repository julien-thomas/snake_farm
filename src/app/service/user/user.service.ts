import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/User';
import { Address } from '../../model/Address';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL

  optionRequete = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }), responseType: 'text' as 'json'
  }

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo() {
    return this.http.get<User>(`${this.API_URL}/users/${localStorage.getItem('UserID')}`)
  }

  getUserInfoByID(id: number) {
    return this.http.get<User>(`${this.API_URL}/users/${id}`)
  }

  getAddress() {
    return this.http.get<Address>(`${this.API_URL}/address/${localStorage.getItem('UserID')}`)
  }

  addAddress(addr: Address) {
    return this.http.post<Address>(`${this.API_URL}/address/${localStorage.getItem('UserID')}`, addr)
  }

  /* getAddressById(id: number) {
    return this.http.get<Address>(`${this.API_URL}/address/${id}`)
  } */

  editAddress(addr: Address) {
    return this.http.put<Address>(`${this.API_URL}/address/${localStorage.getItem('UserID')}`, addr)
  }

  deleteAddress() {
    return this.http.delete(`${this.API_URL}/address/${localStorage.getItem('UserID')}`, this.optionRequete)
  }

  editUser(user: User) {
    return this.http.put<User>(`${this.API_URL}/users/${localStorage.getItem('UserID')}`, user)
  }

  editUserByID(user: User, id: number) {
    return this.http.put<User>(`${this.API_URL}/users/${id}`, user)
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.API_URL}/users`)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.API_URL}/users/${id}`, this.optionRequete)
  }
}
