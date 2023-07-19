import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  abc: any;
  public getproduct: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private registerservice: RegisterService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.registerservice.getAllProduct().subscribe((data:any)=>{
      console.log(data)
      this.getproduct=data;
    })
  }

  goToProduct(pid:any){
    this.router.navigate(["detail/" + pid]);
  }

}
