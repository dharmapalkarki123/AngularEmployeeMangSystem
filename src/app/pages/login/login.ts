import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginModel} from '../../model/Employee.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: LoginModel= new LoginModel();

}
