import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { LandingComponent } from './landing/landing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  { path: 'registration', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'register', component:RegisterProductComponent},
  { path: '', component: LandingComponent },
  {
    path: 'detail/:id', 
    component: ProductDetailsComponent
  },

    

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
