import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  loginMode = false;
  SwitchMode() {
    this.loginMode = !this.loginMode;
  }
  onSubmit(f:NgForm){
    console.log(f.value);
  }
}
