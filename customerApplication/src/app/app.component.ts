import { Component } from '@angular/core';
import { Customer } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.component.css']
})
export class CustomerComponent {
  title = 'customerApplication';
  customerMode: Customer = new Customer();
}
