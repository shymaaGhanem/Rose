import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthApi';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoints } from './enums/AuthAPI.endpoint';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { LoginData, LoginResponse } from './interface/loginData';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService  implements AuthAPI{
// this is the main service
  constructor(private _httpClient:HttpClient,private _authApiAdaptorService:AuthApiAdaptorService) {}


  login(data:LoginData):Observable<LoginResponse>{
    return this._httpClient.post(AuthEndpoints.LOGIN,data).pipe(
      map((res:any)=>this._authApiAdaptorService.adapt(res)),
      catchError((res)=> of(res))
    )
  }

  register(data:LoginData):Observable<LoginResponse>{
    return this._httpClient.post(AuthEndpoints.REGISTER,data).pipe(
      map((res:any)=>this._authApiAdaptorService.adapt(res)),
      catchError((res)=> of(res))
    )
  }

}
