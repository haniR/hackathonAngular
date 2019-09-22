import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ChartsComponent } from './components/admin-panel/charts/charts.component';
import { DonateComponent } from './components/donate/donate.component';
import { UsersComponent } from './components/users/users.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"contact-us",component:ContactUsComponent },
  { path:"register",component:RegisterationComponent },
  { path:"user-home",component:UserHomeComponent },
  { path:"charts",component:ChartsComponent },
  { path:"users",component:UsersComponent },
  { path:"allHospitals",component:HospitalsComponent },

  
  { path:"donate",component:DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
