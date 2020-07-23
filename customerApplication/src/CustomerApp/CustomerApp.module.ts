import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './CustomerApp-routing.module';
import { MainComponent } from './CustomerApp.component';
import { CustomerComponent } from './customer/customer.component';

import { BaseLogger, ConsoleLogger } from './utility/customerApp.logger';

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
  providers: [{
    provide: BaseLogger,
    useClass: ConsoleLogger
  }],
  bootstrap: [MainComponent]
})
export class CustomerAppModule { }
