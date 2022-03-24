import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { dataStorageService } from '../shared/data-strorage.service';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  private userSub:Subscription;
  isAuthenticated = false;
  /*
      @Output() featureSelected = new EventEmitter<string>();

      onSelect(feature:string){
        this.featureSelected.emit(feature);
      }
  */
  
  constructor(private dataSer:dataStorageService,private authSer:AuthService) { }
  ngOnInit(): void {
      this.userSub=this.authSer.user.subscribe(user=>{
          // this.isAuthenticated = !user ? false:true;
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
      });
  }
  saveData(){
    this.dataSer.storeRecipes();
  }
  logOut(){
    this.authSer.logout();
  }
  fetchData(){
    this.dataSer.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
}
