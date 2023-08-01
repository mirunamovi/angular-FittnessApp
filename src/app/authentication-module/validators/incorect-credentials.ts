import { AuthService } from "src/app/shared-module/authentication/auth.service";
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import {Observable, of, map, take} from 'rxjs'

export const IncorectCredentials = (userAuth: AuthService) => (control: AbstractControl): Observable<ValidationErrors | null> => {

        const {user, password} = control.value;
        console.log(user)
        console.log(password)
        return of(null)
        // return of(userAuth.checkUserOrPasswordValidity(user, password)).pipe(
        //     map((res) => {
        //         res ? {notExist: true} : null; 
        //     }),
        // )
        
        
    
}
