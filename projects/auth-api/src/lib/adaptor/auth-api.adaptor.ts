import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { LoginData, LoginResponse } from '../interface/loginData';

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
}
