import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  
 let  platfrom = inject(PLATFORM_ID)

 if(isPlatformBrowser(platfrom)){

  const localToken = localStorage.getItem('userToken');
  if (localToken) {
    req =req.clone({
      setHeaders:{
        Authorization:`Bearer ${localToken}`
      }
    })
  }
 }

  return next(req);

};