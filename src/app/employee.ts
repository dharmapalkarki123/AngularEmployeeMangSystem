import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  constructor(private http: HttpClient) {
  }

  onLogin(obj: any){
    return this.http.post("https://dummyjson.com/auth/login", obj)
  }

}
