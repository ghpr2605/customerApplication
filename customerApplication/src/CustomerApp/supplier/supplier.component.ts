import { Component, OnInit } from '@angular/core';
import { BaseLogger} from '../utility/customerApp.logger';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  ngOnInit(): void {
  }

  log: BaseLogger = null;
  
  constructor(_logger:BaseLogger){
    this.log = _logger;
    this.log.Log();
  }

}
