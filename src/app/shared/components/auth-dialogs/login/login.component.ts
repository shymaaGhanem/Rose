import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'; 
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [DialogModule, ButtonModule,ReactiveFormsModule,NgIf ,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [DialogService] 
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errMsg = '';
  loginVisible: boolean = false;

  forgetPasswordRef: DynamicDialogRef | null = null;
  registerRef: DynamicDialogRef | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthApiService,
    private dialogService: DialogService,
    private toastr:ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errMsg = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.message === 'success') {
          localStorage.setItem('userToken', res.token);
          this.toastr.success('login successfully!');
          window.location.reload();
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err.error.error)
        this.errMsg = err.error?.error || 'Login failed';
        this.toastr.error('login failed!');
      }
    });
  }

  showForgotPasswordDialog() {
    this.loginVisible = false;
    this.forgetPasswordRef = this.dialogService.open(ForgetPasswordComponent, {
      header: 'Reset Password',
      width: '500px',
      closable: true
    });
  }

  showCreateAccountDialog() {
  this.loginVisible = false;

    this.registerRef = this.dialogService.open(RegisterComponent, {
      header: 'Create Account',
      width: '600px',
      closable: true
    });
  }

showDialog() {
  this.loginVisible = true;
}
  

}
