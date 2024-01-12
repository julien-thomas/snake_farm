import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../model/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  users: User[] = []
  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  getAllUsers() {
    this._userService.getAllUsers().subscribe(data => {
      console.log(data)
      this.users = data
      this.router.navigateByUrl('/users')
    })
  }

  addProduct() {
    this.router.navigate(['/addProduct'])
  }
}
