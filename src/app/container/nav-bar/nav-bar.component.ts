import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isLog: boolean = false
  isAdmin: boolean = false

  constructor(
    private _authService: AuthService,
    private _userService: UserService
  ) {

  }

  ngOnInit(): void {
    /* throw new Error('Method not implemented.'); */
    this._authService.user.subscribe(data => {
      this.isLog = data ? true : false
    })
    this._userService.getUserInfo().subscribe(data => {
      if (data.role === 'admin') 
        this.isAdmin = true
    })
  }

  logout() {
    this._authService.logout()
  }

}
