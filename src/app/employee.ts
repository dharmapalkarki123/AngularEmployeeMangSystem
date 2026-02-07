import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  constructor(private http: HttpClient) {
  }

  onLogin(obj: any){
    return this.http.post("http://localhost:8080/auth/signup", obj)
  }

}
