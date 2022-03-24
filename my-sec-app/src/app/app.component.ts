import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*
    loadedFeature='recipe';
    
    onNavigate(feature:string){
      this.loadedFeature = feature;
    }
  */
 constructor(private authSer:AuthService){}
  ngOnInit(): void {
      this.authSer.autologin();
  }
}
