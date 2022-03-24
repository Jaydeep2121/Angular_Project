import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private authSer:AuthService,private router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            return this.authSer.user.pipe(
                take(1),
                map( usr => {
                const isAuth = !!usr;
                if(isAuth){
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
                console.log(usr);
            })
        );
    }
}