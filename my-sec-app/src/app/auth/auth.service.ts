import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>();
    constructor(private http: HttpClient) {}
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApNnmk3ZP7ssJjIQrkL9cwFNyfggi6QsU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.HandleError),
            tap(resData=>{
                this.HandleAuthenticate(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            })
        );
    }
    login(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApNnmk3ZP7ssJjIQrkL9cwFNyfggi6QsU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.HandleError),
            tap(resData=>{
                this.HandleAuthenticate(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            })
        );
    }
    
    private HandleAuthenticate(email:string,userId:string,token:string,expiresIn:number){
        const expirationDate = new Date(
            new Date().getTime() + expiresIn*1000
        );
        const user = new User(email,userId,token,expirationDate);
        this.user.next(user);
    }
    private HandleError(errorRes:HttpErrorResponse){
        let errorMsg = 'an error occured';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMsg);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMsg = 'This email is already exist';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMsg = 'Email not exist !'
                break;
            case 'INVALID_PASSWORD':
                errorMsg = 'UserName or Password invalid'
                break;
            case 'USER_DISABLED':
                errorMsg = 'account has been disabled by an administrator';
                break;
        }
        return throwError(errorMsg);
    }
}

