import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isLog: boolean = false

  constructor(
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    /* throw new Error('Method not implemented.'); */
    this._authService.user.subscribe(data => {
      this.isLog = data ? true : false
    })
  }

  logout() {
    this._authService.logout()
  }

}
