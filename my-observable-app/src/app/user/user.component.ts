import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id:number;
  constructor(private ActRout:ActivatedRoute,private userserv:UserService) { }

  ngOnInit(): void {
    this.ActRout.params.subscribe(
      (parm:Params)=>{
        this.id=+parm['id'];  
      }
    );
  }
  onActivate(){
    // this.userserv.activatEmitter.emit(true);
    this.userserv.activatEmitter.next(true);
  }
}
