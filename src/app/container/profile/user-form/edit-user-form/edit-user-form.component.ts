import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/User';
import { UserService } from '../../../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css'
})
export class EditUserFormComponent implements OnInit {
  user: User = {id: 0, firstname: '', lastname:'', email: '', password: '', token: '', role: 'user'}
  firstname: string = ''
  lastname: string = ''
  email: string = ''
  password: string = ''
  constructor(
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    /* this._userService.getUserInfo().subscribe(data => {
      this.user = data
    }) */
    this.route.queryParams
      .subscribe(params => {
        this._userService.getUserInfoByID(params['id']).subscribe(data => {
          this.user = data
        })
      })
  }

  editUser() {
    /* this._userService.editUserByID(this.user, this.user.id).subscribe(() => {
      this.router.navigate(['/profile'])
    }) */
    this._userService.editUser(this.user).subscribe(() => {
      this.router.navigate(['/profile'])
    })
  }

  deleteUser() {
    this._userService.deleteUser(this.user.id).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }
}
