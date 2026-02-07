import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginModel} from '../../model/Employee.model';

import {Router} from '@angular/router';
import {Employee} from '../../employee';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: LoginModel= new LoginModel();

  employeeService=inject(Employee)

  router = inject(Router)
  onLogin(res:any){
return this.employeeService.onLogin(this.loginObj).subscribe({
  next:(result:any)=>{
    if(result.status){
      alert("Login Success");
      localStorage.setItem('leaveUser', JSON.stringify(result.jwt));
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
