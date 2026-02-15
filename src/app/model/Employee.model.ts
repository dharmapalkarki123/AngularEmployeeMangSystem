export class LoginModel{


  emailId:string;
  password:string;



  constructor() {

    this.emailId='';
    this.password='';

  }


}

export interface ApiResponseModel{

  message:string,
  result:boolean,
  data:any



}

export  interface EmployeeList{
  empName: string,
  "empId": number,
  "empCode": number,
  "empEmailId": string,
  "empDesignation": string,
  "role": string,
  "mobile": string

}
