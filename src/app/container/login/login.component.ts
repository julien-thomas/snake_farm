import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  user: User = {id: 0, firstname:'', lastname: '', email: '', password:'', token: '', role: 'user'}  //
  token: string = ''
  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

    ngOnInit(): void {
        
    }

  login() {
    this._authService.login(this.email, this.password)
    .subscribe((data) => {
      //this.user = data
      localStorage.setItem('UserToken', data.token.toString())
      this._authService.userSubject.next(data.toString())
      localStorage.setItem('UserID', data.id.toString())
      this.router.navigateByUrl('/products')
    })
  }

}
