import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApNnmk3ZP7ssJjIQrkL9cwFNyfggi6QsU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.HandleError),
        tap((resData) => {
          this.HandleAuthenticate(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  autologin() {
    const userdata: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('UserData')); //str to obj
    if (!userdata) {
      return;
    }
    const loadedUser = new User(
      userdata.email,
      userdata.id,
      userdata._token,
      new Date(userdata._tokenExpirationDate)
    );
    if (loadedUser.token) {
      const expire =
        new Date(userdata._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autologout(expire);
    }
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('UserData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autologout(expireDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expireDuration);
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApNnmk3ZP7ssJjIQrkL9cwFNyfggi6QsU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.HandleError),
        tap((resData) => {
          this.HandleAuthenticate(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private HandleAuthenticate(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autologout(expiresIn * 1000);
    localStorage.setItem('UserData', JSON.stringify(user));
  }
  private HandleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'an error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email is already exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not exist !';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'UserName or Password invalid';
        break;
      case 'USER_DISABLED':
        errorMsg = 'account has been disabled by an administrator';
        break;
    }
    return throwError(errorMsg);
  }
}
