import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public httpClient: HttpClient) { }
  
  get(apiPath: string): Observable<any> {
    return this.httpClient.get<any>(`${apiPath}`);
  }

  delete(apiPath: string): Observable<any> {
    return this.httpClient.delete<any>(`${apiPath}`);
  }
 
  put(apiPath: string,model: any): Observable<any> {
    return this.httpClient.put<any>(`${apiPath}`,model);
  }

  post(apiPath: string, model: any): Observable<any> {
    return this.httpClient.post<any>(`${apiPath}`, model);
  }
  
}
