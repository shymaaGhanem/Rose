import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { LoginData, LoginResponse } from '../interface/loginData';
import { ForgetPassword } from '../interface/forget-password';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdaptorService implements Adaptor {

  constructor() { }

  adapt(data:LoginData) : LoginResponse{
    return{
      message:data.message,
      token:data.token,
      userEmail:data.user.email
    }
  }


  adaptPassword(data:any):any{
    return{
     ...data
    }
  }

}
