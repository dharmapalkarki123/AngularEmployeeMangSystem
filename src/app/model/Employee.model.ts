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

export class AddEmployee{
  employeeId: number
  employeeName: string
  contactNo: string
  emailId: string
  deptId: number
  password: string
  gender: string
  role: string

  constructor() {

    this.employeeId=0;
    this.employeeName='';
    this.contactNo='';
    this.emailId='';
    this.deptId=0;
    this.password='';
    this.gender='';
    this.role='';

  }

}
