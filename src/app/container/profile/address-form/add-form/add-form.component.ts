import { Component, OnInit } from '@angular/core';
import { Address } from '../../../../model/Address';
import { UserService } from '../../../../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit {
  addr: Address = {id: 0, road: '', postalCode: '', city: '', country: ''}
  constructor(
    private _userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  add() {
    this._userService.addAddress(this.addr).subscribe(() => {
      this.router.navigate(['/profile'])
    })
  }

}
