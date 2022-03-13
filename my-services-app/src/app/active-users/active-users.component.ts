import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[];
  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.users=this.userservice.activeusers;
  }
  onSettoActive(id:number){
    this.userservice.setToInActive(id);
  }

}
