import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  @ViewChild('f') signUp:NgForm;
  defaultVal:string = 'pet';
  answer = '';
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
  }*/
  mySignup:FormGroup;
  forbiddenUserName = ['Ramesh','Anna'];
  genders = ['male','female'];
  constructor() { }

  ngOnInit(): void {
    this.mySignup = new FormGroup({
      'userData': new FormGroup({
          'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
          'email': new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies':new FormArray([])
    });

    // this.mySignup.valueChanges.subscribe(
    //   (value)=>console.log(value)
    // );

    // this.mySignup.statusChanges.subscribe(
    //   (status)=>console.log(status)
    // );

    this.mySignup.setValue({
      'userData':{
        'username':'max',
        'email':'max2@gm.com'
      },
      'gender':'female',
      'hobbies':[]
    });

    this.mySignup.patchValue({
      'userData':{
        'username':'Anna'
      },
    });
  }
  onSubmit(){
    console.log(this.mySignup);
  }
  getcontrols(){
    return (this.mySignup.get('hobbies') as FormArray).controls;
  }
  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.mySignup.get('hobbies')).push(control);
  }
  forbiddenNames(control:FormControl): { [s:string]:boolean } {
      if(this.forbiddenUserName.indexOf(control.value) !== -1){ 
        return {'nameIsForbidden':true}
      }
      return null;
  }
  forbiddenEmail(control:FormControl):Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve)=>{
      setTimeout(() => {
        if(control.value==='test@test.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  } 
}
