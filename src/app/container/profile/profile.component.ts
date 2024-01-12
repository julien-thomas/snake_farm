import { Component, OnInit } from '@angular/core';
import { User, UserRole } from '../../model/User';
import { UserService } from '../../service/user/user.service';
import { Address } from '../../model/Address';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: User = {id: 0, firstname: '', lastname:'', email: '', password: '', token: '', role: 'user'}
  /* address: Address[] = [] */
  addr: Address = {id: 0, road: '', postalCode: '', city: '', country: ''}
  /* iterableAddress: any = [] */
  
  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._userService.getUserInfo().subscribe(data => {
      this.user = data
      console.log(data)
      if (data.role === UserRole.ROLE_ADMIN)
        this.user.role = 'admin'
      else
        this.user.role = 'user'
    })
    this._userService.getAddress().subscribe(data => {
      this.addr = data
    })

  }

  goToAddingAddress() {
    this.router.navigate(['/address'])
  }

  edit(addr: Address) {
    this.router.navigate(['/editAddress']/* , { queryParams: { id: addr.id }} */)
  }

  delete(addr: Address) {
    this._userService.deleteAddress().subscribe()
    this.addr = {id: 0, road: '', postalCode: '', city: '', country: ''}
  }

  editUser() {
    this._userService.editUser(this.user).subscribe(() => {
      /* this._authService.logout() */
      this.router.navigate(['/editUser'], { queryParams: { id: this.user.id }})
    })
  }
}
