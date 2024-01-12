import { Component, OnInit } from '@angular/core';
import { Address } from '../../../../model/Address';
import { UserService } from '../../../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit {
  addr: Address = {id: 0, road: '', postalCode: '', city: '', country: ''}
  constructor(
    private _userService: UserService,
    private router: Router
    /* private route: ActivatedRoute */
  ) { }

  ngOnInit(): void {
    /* this.route.queryParams
      .subscribe(params => { */
        /* this._userService.getAddressById(params['id']).subscribe(data => { */
        this._userService.getAddress().subscribe(data => {
          this.addr = data
        })
      /* }) */
  }

  edit() {
    this._userService.editAddress(this.addr).subscribe(() => {
      this.router.navigate(['/profile'])
    })
  }
}
