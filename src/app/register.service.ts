import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/user';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8082/user";
  baseProductUrl="http://localhost:8081";

  constructor(private http:HttpClient) { }

  getUser()
  {
    return this.http.get(this.baseUrl+"/getAllUsers")
  }
  addUser(us : user){
    return this.http.post(this.baseUrl+"/register",us,{
      responseType:'text' as 'json',
    });
   
  }
  getUserData(usrCust:user){
    return this.http.post(this.baseUrl+"/login",usrCust,{
      responseType:'text' as 'json',
    });
    
  }
  public addProduct1(productObject: any) {
    return this.http.post<Product>(this.baseProductUrl + "/add", productObject);
  }
  public getAllProduct(){
    return this.http.get<Product[]>(this.baseUrl + "/all")
  }


  public getProductById(pid:any){
    return this.http.get<Product>(this.baseUrl + "/get/by/pid/"+ pid)
  }
}
