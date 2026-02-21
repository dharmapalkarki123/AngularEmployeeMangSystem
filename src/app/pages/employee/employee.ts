import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../employee-service';
import {ApiResponseModel, EmployeeList} from '../../model/Employee.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

  employeeService = inject(EmployeeService);

  @ViewChild("newmodal") newModel!: ElementRef;

  employeeList: EmployeeList[] = [];

  employee = {
    employeeId: 0,
    employeeName: '',
    contactNo: '',
    emailId: '',
    deptId: 0,
    password: '',
    gender: '',
    role: ''
  };

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getAllEmployee().subscribe({
      next: (response: ApiResponseModel) => {
        this.employeeList = response.data;
      }
    });
  }

  openModel() {
    this.newModel.nativeElement.style.display = 'block';
  }

  closeModel() {
    this.newModel.nativeElement.style.display = 'none';
  }

  addEmployee() {
    console.log('Employee Data:', this.employee);
    this.closeModel();
  }

}
