import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
      //selector:'[app-servers]', //by using attribute
      // selector:'.app-servers', //by using classname
  templateUrl: './servers.component.html', // for include html files
  // template:
  // `<app-server></app-server>
  //  <app-server></app-server>`, // by usign selector also
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allow=false;
  serverstatus='server not created';
  serverName='LocalServer';
  serverCreated=false;
  UserName='';
  servers = ['Server1','Server2'];
  constructor() { 
    setTimeout(() => {
      this.allow=true
    }, 2000);
  }

  ngOnInit(): void {
  }

  funcServCret(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverstatus = 'server created! Name is '+this.serverName;
  }

  MyEvent(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
