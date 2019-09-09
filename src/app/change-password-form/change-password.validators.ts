import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';

export class ChangePasswordValidators {
    static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(control.value != '1234')
                    resolve({ invalidOldPassword : true})
                else resolve(null);
            }, 500);
        });
    }

    static passwordsMatch(control: AbstractControl){
        let newPassword = control.get('newPasswordGroup.newpassword');
        let confirmPassword = control.get('newPasswordGroup.confirmnewpassword');
        if(newPassword.value != confirmPassword.value )
            return{ passwordsMatch: true };
        return null;
    }
  
}