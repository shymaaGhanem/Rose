import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LogedUserService {

  userData: WritableSignal<any> = signal(null);
  
  constructor(private _http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userToken') !== null) {
        this.currentUser();
      }
    }
  }

  currentUser() {
    const token = localStorage.getItem('userToken');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        this.userData.set(decoded);
      } catch (error) {
        this.userData.set(null); 
      }
    } else {
      this.userData.set(null);
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.set(null);
  }
  
}
