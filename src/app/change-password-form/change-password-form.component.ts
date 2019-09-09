import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: ['', Validators.required, ChangePasswordValidators.invalidOldPassword],
      newPasswordGroup: fb.group({
        newpassword: ['', Validators.required],
        confirmnewpassword: ['', Validators.required]
      })
    
    }, {
      validator: ChangePasswordValidators.passwordsMatch
    });
  }

  get oldpassword(){
    return this.form.get('oldpassword');
  }
  get newpassword(){
    return this.form.get('newPasswordGroup.newpassword');
  }

  get confirmnewpassword(){
    return this.form.get('newPasswordGroup.confirmnewpassword');
  }

  login(){
    console.log("Deu certo");
  }

}
