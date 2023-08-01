import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  verifyUser(value:string): Promise<boolean>{
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        const getUser = JSON.parse(localStorage.getItem('users')!);
        let checkedUser = getUser.find((user:any) => user.name == value)
        let notExistent = false;
        if(!checkedUser){
          notExistent = true;
          resolve(notExistent)
        }
        resolve(notExistent);
      }, 1000);
     }) 
      
  }

  checkUserOrPasswordValidity(value:string, password: string): Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const getUser = JSON.parse(localStorage.getItem('users')!);
        let checkedUser = getUser.find((user:any) => user.name == value)
        let credentialsError = false;
        
        if(checkedUser?.name !== value || checkedUser?.password !== password){
          credentialsError = true;
          resolve(credentialsError);
        }
        resolve(credentialsError);
      }, 1000);
    }) 
  }

  validForm(areCredentialsInvalid:boolean, notExistentUser: boolean): Promise<boolean>{
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(areCredentialsInvalid === false && notExistentUser === false){

          resolve(true);
  
        }
        resolve(false);
      }, 1000);
    })
  }

}
