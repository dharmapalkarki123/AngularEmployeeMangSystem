import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginModel} from '../../model/Employee.model';

import {Router} from '@angular/router';

import {EmployeeService} from '../../employee-service';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: LoginModel= new LoginModel();

  employeeService1=inject(EmployeeService)

  router = inject(Router)

  onLogin(){
    debugger
return this.employeeService1.onLogin(this.loginObj).subscribe({
  next:(result:any)=>{
    if(result.result){
      alert("Login Success");
      localStorage.setItem('leaveUser', JSON.stringify(result.data));
      this.router.navigateByUrl("/dashboard")
    }else{
      alert(result.message)
    }
  },
  error:()=>{

    alert('API ERROR')

  }
})
  }



}
