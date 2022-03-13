import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userActivated = false;
    private activateSub :Subscription;

    constructor(private userSer:UserService){}
    ngOnInit(){
      this.userSer.activatEmitter.subscribe(didActivate=>{
          this.userActivated=didActivate;
      });
    }
    ngOnDestroy(){
        this.activateSub.unsubscribe();      
    }    
}
