import { Component,ContentChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { user } from 'src/user';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:user = new user();
  visible:boolean = true;
  changetype:boolean =true;
  result: any;
  model: any = {};

  
  public inputType:string="password";
  

  public seePassword(event:any):void{
    if(event.target.checked)
    {
     this.inputType='string';
    }
    else{
      this.inputType='password';
    }

  }
  constructor(private router: Router, private registerservice: RegisterService){}

 loginForm =new FormGroup({
  username : new FormControl('', [Validators.required, Validators.pattern('[a-zA-z ]+')]),
  psw:new FormControl('',[Validators.required])

 });
  loginUser() {
   
     
  this.registerservice.getUserData(this.userData).subscribe((data)=>console.log(data));
        
  this.router.navigateByUrl('home');
 
  }
  


 get UserName():FormControl{
  return this.loginForm.get('username')as FormControl;

 }
 get Psw():FormControl{
  return this.loginForm.get('psw')as FormControl;
 }
 
}
