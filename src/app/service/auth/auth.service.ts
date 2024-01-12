import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL

  optionRequete = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })/* , responseType: 'text' as 'json' */
  }

  public user: Observable<string>
  public userSubject: BehaviorSubject<string>

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') || '')
    this.user = this.userSubject.asObservable();
  }

  login(email: string, password: string) { 
    return this.http.post<User>(`${this.API_URL}/login`, {email: email, password: password}, this.optionRequete) //
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    return this.http.post(`${this.API_URL}/users`, {firstname: firstname, lastname: lastname, email: email, password: password}, this.optionRequete)
  }

  logout() {
    localStorage.removeItem('UserToken')
    localStorage.removeItem('UserID')
    this.userSubject.next('')
    this.router.navigate(['login'])
  }
}
