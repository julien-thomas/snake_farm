import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.css'
})
export class UserContainerComponent implements OnInit {

  users: User[] = []

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data
    })
}
}
