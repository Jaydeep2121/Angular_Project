import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users:string[];
  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.users=this.userservice.inactiveusers
  }
  onSettoActive(id:number){
    this.userservice.setToActive(id);
  }

}
