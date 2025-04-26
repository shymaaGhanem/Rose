import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogedUserService } from '../../../../core/services/logedUser/loged-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [DialogModule,ButtonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  steps:number=1;

  constructor(private ref: DynamicDialogRef, private authService: AuthApiService,private router:Router,private  _logedUserService:LogedUserService) {}

  close() {
    this.ref.close();
  }




  emailForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })

  codeForm:FormGroup = new FormGroup({
    resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)])
  })
  resetForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required])
  })

  

  emailSubmit(){
    this.authService.sendEmail(this.emailForm.value).subscribe({
      next:(res)=>{
         if(res.message == 'success'){
          this.steps=2;
         }
      }
    })
  }

  codeSubmit(){
    this.authService.verifyCode(this.codeForm.value).subscribe({
      next:(res)=>{
        if(res.status == 'Success'){
          this.steps =3;
        }
      }
    })
  }

  passwordSubmit(){
    this.authService.resetPassword(this.resetForm.value).subscribe({
      next:(res)=>{
        localStorage.setItem('userToken',res.token)
        this.close();
        this._logedUserService.currentUser();
        window.location.reload();
      }
    })
  }
  
}
