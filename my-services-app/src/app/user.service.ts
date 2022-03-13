import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService{
    activeusers = ['max','ana'];
    inactiveusers = ['chris','manu'];

    constructor(private counterser:CounterService){}

    setToActive(id:number){
        this.activeusers.push(this.inactiveusers[id]);
        this.inactiveusers.splice(id,1);
        this.counterser.incrementActiveCounter();
    }
    setToInActive(id:number){
        this.inactiveusers.push(this.activeusers[id]);
        this.activeusers.splice(id,1);
        this.counterser.incrementInActiveCounter();
    }
}