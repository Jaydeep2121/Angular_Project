import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUp:NgForm;
  defaultVal:string = 'pet';
  answer = '';
  genders = ['male','female'];
  user = {
    username:'',
    email:'',
    secret:'',
    questionAnswr:'',
    gender:''
  };
  submitted = false;
  
  onSubmit(){
    this.submitted =true;
    this.user.username = this.signUp.value.userData.username;
    this.user.email = this.signUp.value.userData.email;
    this.user.secret = this.signUp.value.secret;
    this.user.questionAnswr = this.signUp.value.questionAnswr;
    this.user.gender = this.signUp.value.gender;

    this.signUp.reset();
  }
  suggestUserName(){
    const suggestedUser = 'SuperUser';
    // this.signUp.setValue({
    //   userData:{
    //     username:suggestedUser,
    //     email:''
    //   },
    //   secret : 'teacher',
    //   questionAnswr:'',
    //   gender : 'male'
    // });
    this.signUp.form.patchValue({
        userData:{
          username:suggestedUser
        }
    });
  }
}
