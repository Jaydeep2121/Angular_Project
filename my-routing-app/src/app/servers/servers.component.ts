import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [ { name:"servers1" },
              { name:"servers1" }];
  constructor(private router:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onLoad(){
    // this.router.navigate(['servers'],{relativeTo:this.rout});
    
  }
}
