import { Component } from "@angular/core"

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    serverId:number = 10;
    serverStatus:String = "offline";
    getstatus(){
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green':'red';
    }
}