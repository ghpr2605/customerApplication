import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './CustomerApp-routing.module';
import { MainComponent } from './CustomerApp.component';
import { CustomerComponent } from './customer/customer.component';

import { BaseLogger, ConsoleLogger, DBLogger } from './utility/customerApp.logger';

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
  },{
    provide: "1",
    useClass: ConsoleLogger
  },{
    provide: "2",
    useClass: DBLogger
  }],
  bootstrap: [MainComponent]
})
export class CustomerAppModule { }
