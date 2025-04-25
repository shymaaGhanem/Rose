import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { genders } from '../../../../constant/enum/gender.const';
import { DropdownModule } from 'primeng/dropdown';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-register',
  imports: [DialogModule,DropdownModule,ButtonModule,MessageModule,NgIf,ReactiveFormsModule,FormsModule,PasswordModule, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  errMsg: string = '';
  isLoading: boolean = false;
  genders=genders;

  constructor(private ref: DynamicDialogRef,private _authApiService:AuthApiService) {}
  
  close() {
    this.ref.close();
  }

  send() {
    this.ref.close();
  }


  registerForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(\+20)1[0125][0-9]{8}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
    },
    { validators: this.confirmPassword }
  );

  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }

  submitForm() {
    this.isLoading = true;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.isLoading = false;
      return;
    }

    this._authApiService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.message === 'success') {
          this.close()
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errMsg = err.error.message;
      },
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get gender() { return this.registerForm.get('gender'); }
}
