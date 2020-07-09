import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.MasterPageView.html',
  styleUrls: ['./CustomerApp.component.css']
})
export class CustomerComponent {
  title = 'customerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }
}
