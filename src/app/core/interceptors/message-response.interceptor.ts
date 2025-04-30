import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap, throwError } from 'rxjs';

export const responseMessageInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
 
  const url = req.url;
  
  return next(req).pipe(
    catchError((err) => {
      const isNullJson = url.includes('null.json'); // Check if the URL contains 'null.json'
      console.log(err.error.error)
      if (!isNullJson && (!err?.error?.isSuccess === false)) {
        toastr.error(err.error?.message || err.error.error || 'يوجد خطأ في ارسال البيانات', 'خطأ', {
          toastClass: 'custom-toast',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000,
          closeButton: true,
        });
      }
      // Show error message only when there is an error response
      return throwError(() => err);
    })
  );
}  
