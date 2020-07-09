import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component'

const routes: Routes = [
  { path:'Home', component: HomeComponent },
  { path:'Customer', component: CustomerComponent },
  { path:'Supplier', component: SupplierComponent },
  { path:'', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
