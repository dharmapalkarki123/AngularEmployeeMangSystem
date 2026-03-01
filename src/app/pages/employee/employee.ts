import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../employee-service';
import {AddEmployee, ApiResponseModel, EmployeeList} from '../../model/Employee.model';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

  employeeService = inject(EmployeeService);

  @ViewChild("newmodal") newModel!: ElementRef;

  deptList$:Observable<any[]>=new Observable<any[]>

  roleList$:Observable<any[]>=new Observable<any[]>

  employeeList: EmployeeList[] = [];

  employee: AddEmployee=new AddEmployee();

  ngOnInit() {

    this.getEmployee();
    this.deptList$=this.employeeService.getDept()
    this.roleList$=this.employeeService.getRole()

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

  // onSaveEmployee(){
  //
  //
  //   this.employeeService.onSaveNewEmp(this.employee).subscribe({
  //     next:(res:any)=>{
  //       if(res.result){
  //         this.getEmployee();
  //         alert("Employee created sucessfully")
  //       }else{
  //
  //         alert(res.message)
  //
  //       }
  //     },
  //     error:()=>{
  //
  //     }
  //
  //   })
  //
  //
  // }

  onSaveEmployee(){
    this.employeeService.onSaveNewEmp(this.employee).subscribe({
      next:(res:any)=>{
        console.log("Saved:", res);
        this.getEmployee();
        alert("Employee created successfully");
      },
      error:(err)=>{
        console.error(err);
        alert("Employee save failed");
      }
    });
  }

}
