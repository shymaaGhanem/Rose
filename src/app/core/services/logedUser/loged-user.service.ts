import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LogedUserService {

  userData:WritableSignal<any> = signal(null);
  
  constructor(private _http:HttpClient,@Inject(PLATFORM_ID) Id:object) {
    if(isPlatformBrowser(Id)){
      if(localStorage.getItem('userToken') !== null){
        this.currentUser()
      }
    }  
   }


   currentUser(){
    const token = localStorage.getItem('userToken') || '';
    const decoded = jwtDecode(token);
    this.userData.set(decoded);
  }

  logout(){
    localStorage.removeItem('userToken')
    this.userData.set(null)
    window.location.reload();
  }

}
