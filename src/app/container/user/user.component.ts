import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  
  @Input() element: User = {id: 0, firstname: '', lastname:'', email: '', password: '', token: '', role: 'user'}
  user: User = {id: 0, firstname: '', lastname:'', email: '', password: '', token: '', role: 'user'}
  constructor(
    private _userService: UserService, //
    private route: ActivatedRoute, //
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  goToProfile(id: number) {
    console.log(id)
    this.router.navigate(['/editUser'], { queryParams: { id: id }})
    
    /* this._userService.getUserInfoByID(id).subscribe((data) => {
      this.user = data
      this.router.navigate(['profile'])
    }) */
  }
}
