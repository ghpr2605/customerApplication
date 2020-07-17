import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './CustomerApp-routing.module';
import { MainComponent } from './CustomerApp.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    MainComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class CustomerAppModule { }
