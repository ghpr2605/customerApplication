import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  styleUrls: ['./CustomerApp.component.css']
})
export class CustomerComponent {
  title = 'customerApplication';
  customerModel: Customer = new Customer();
  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }
}
