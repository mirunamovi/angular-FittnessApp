import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared-module/authentication/auth.service';
import { IncorectCredentials } from '../validators/incorect-credentials';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  
  userNotExistent = false;
  emailOrPasswordError = false;
  submited = false;
  onSucces = true;
  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  }, null, [IncorectCredentials(this.auth)])

  constructor(private auth: AuthService, private route: Router){}
  

  async onSubmit():Promise<void>{
    
    if(this.loginForm.controls.user.valid && this.loginForm.controls.password.valid){
      
      this.submited = true;

      try{
        
        this.userNotExistent = await this.auth.verifyUser(this.loginForm.controls.user.value!);
        this.emailOrPasswordError = await this.auth.checkUserOrPasswordValidity(this.loginForm.controls.user.value!,this.loginForm.controls.password.value!)
        await this.auth.validForm(this.userNotExistent, this.emailOrPasswordError).then((res) => res ? this.route.navigate(['scheduler']) : false)

      }catch(e){
        console.log(e)
      }
      
    }else{
      this.onSucces = false;
    }

    setTimeout(() => {
      this.userNotExistent = false;
      this.emailOrPasswordError = false;
      this.onSucces = true;
    }, 1500);
    
  }
  
  ngOnInit(): void {
    
  }
  
}
