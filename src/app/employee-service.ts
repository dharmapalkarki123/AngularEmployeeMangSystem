import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseModel} from './model/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  onLogin(obj: any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login", obj)
  }

  getAllEmployee():Observable<ApiResponseModel>{

    return this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllEmployee")
  }

}
