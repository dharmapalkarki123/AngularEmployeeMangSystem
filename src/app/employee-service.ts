import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
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

  getDept(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments").pipe(map((res:any)=>res.data))
  }

  getRole(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").pipe(map((res:any)=>res.data))
  }



  onSaveNewEmp(obj: any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee", obj)
  }

}
