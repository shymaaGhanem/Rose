import { inject} from '@angular/core';
import {
    HttpInterceptorFn
} from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

export const globalLoaderInterceptor: HttpInterceptorFn = (req, next) => {
    const ngxSpinner = inject(NgxSpinnerService);
    ngxSpinner.show();
    return next(req).pipe(
        finalize(() => ngxSpinner.hide())
    );
};