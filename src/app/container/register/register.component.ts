import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  firstname: string = ''
  lastname: string = ''
  email: string = ''
  password: string = ''

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
        
  }

  register() {
    this._authService.register(this.firstname, this.lastname, this.email, this.password)
    .subscribe(data => {
      localStorage.setItem('User', data.toString())
      this.router.navigateByUrl('/products')
    })
  }
}
