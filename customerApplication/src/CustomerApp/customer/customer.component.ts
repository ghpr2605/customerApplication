import { Component, OnInit, Injector } from '@angular/core';
import { Customer } from './customer.model';
import { BaseLogger } from '../utility/customerApp.logger';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'customerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  log:  BaseLogger = null;

  constructor(_injector:Injector){
    this.log = _injector.get("2");
    this.log.Log();
  }

  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }

  hasError(typeOfValidator: string, controlName: string): boolean {
    return this.customerModel.formGroup.controls[controlName].hasError(typeOfValidator);
  }
}
