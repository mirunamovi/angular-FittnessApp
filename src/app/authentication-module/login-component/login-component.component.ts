import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared-module/authentication/auth.service';
import { IncorectCredentials } from '../validators/incorect-credentials';
import { Router } from '@angular/router';
import { ExistUser } from '../validators/exist-user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  
  notExistentUser!:boolean;
  emailOrPasswordError!:boolean;
  onSucces = true;
  notCompleted = false;
  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  }, null, [IncorectCredentials(this.auth), ExistUser(this.auth)])

  constructor(private auth: AuthService, private route: Router){
      this.auth.loading.subscribe((res) => {
        this.onSucces = res;
        console.log(this.onSucces)
      })
      this.auth.userDoesNotExist.subscribe((res) => {
        this.notExistentUser = res;
        console.log(this.notExistentUser)
      })
      this.auth.userOrPasswordIncorect.subscribe((res) => {
        this.emailOrPasswordError = res;
        console.log(this.emailOrPasswordError)
      })
  }
  

  onSubmit(): void{
    
    if(this.loginForm.controls.user.valid && this.loginForm.controls.password.valid){
      
        this.notCompleted = false;     
        this.auth.validForm(this.loginForm.hasError('emailOrPasswordError'), this.loginForm.hasError('userNotExistent'));

    }else{

        this.notCompleted = true;

    }
    
  }
  
  ngOnInit(): void {
    
  }
  
}
