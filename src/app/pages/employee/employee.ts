import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from '../../employee-service';
import {ApiResponseModel, EmployeeList} from '../../model/Employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

  employeeService=inject(EmployeeService)

  employeeList: EmployeeList[]=[]

  ngOnInit() {

    this.getEmployee()
  }

 getEmployee(){
    this.employeeService.getAllEmployee().subscribe({
      next:(response:ApiResponseModel)=>{

        this.employeeList=response.data

      },
      error:()=>{

      }
    })
 }

}
