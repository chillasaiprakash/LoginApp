import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { user } from 'src/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public inputType:string="password";

  us:user = new user();

  repeatPass: string = 'none';
  
  users:any;

  public showPassword(event:any):void{
    if(event.target.checked)
    {
     this.inputType='string';
    }
    else{
      this.inputType='password';
    }

  }

  constructor(private rs:RegisterService,private router: Router,) {
   
  }

  ngOnInit(): void {
    
      this.rs.getUser().subscribe((data)=>{
      this.users=data;
      console.log(data);
    })
  }

  registerForm = new FormGroup({

    firstname : new FormControl('', [Validators.required, Validators.pattern('[a-zA-z ]+')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[1-9].[0-9]{8}$')]),
    username : new FormControl('', [Validators.required, Validators.pattern('[a-zA-z0-9]+')]),
    gender: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    rpwd: new FormControl('')

  });

  registerSubmitted(){
   // console.log(this.userForm.value);
    
    if(this.Pwd.value == this.Rpwd.value){
     // console.log('submitted');
      this.repeatPass = 'none';
      this.rs.addUser(this.us).subscribe((data)=>console.log(data));
      Swal.fire("ThankYou...",'Registration Successful','success')
      this.registerForm.reset();
      
    }else{
      this.repeatPass = 'inline'
    }
    this.router.navigateByUrl('login');
  }
 

  get FirstName(): FormControl{
    return this.registerForm.get('firstname')as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get('lastname')as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get('email')as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get('mobile')as FormControl;
  }
  get UserName(): FormControl{
    return this.registerForm.get('firstname')as FormControl;
  }
  get Gender(): FormControl{
    return this.registerForm.get('gender')as FormControl;
  }
  get Pwd(): FormControl{
    return this.registerForm.get('pwd')as FormControl;
  }
  get Rpwd(): FormControl{
    return this.registerForm.get('rpwd')as FormControl;
  }

}
