import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authSer: AuthService) {}

  ngOnInit(): void {}
  loginMode = true;
  loading = false;
  error: string = null;
  forSubscribe: Observable<AuthResponseData>;

  SwitchMode() {
    this.loginMode = !this.loginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const passw = form.value.password;
    this.loading = true;
    if (this.loginMode) {
      this.forSubscribe = this.authSer.login(email, passw);
    } else {
      this.forSubscribe = this.authSer.signUp(email, passw);
    }

    this.forSubscribe.subscribe(
      (resData) => {
        this.loading = false;
        console.log(resData);
      },
      (errorMessage) => {
        this.loading = false;
        this.error = errorMessage;
        console.log(errorMessage);
      }
    );
    form.reset();
  }
}
