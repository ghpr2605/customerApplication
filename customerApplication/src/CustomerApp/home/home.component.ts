import { Component, OnInit } from '@angular/core';
import { BaseLogger} from '../utility/customerApp.logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  log: BaseLogger = null;
  
  constructor(_logger:BaseLogger){
    this.log = _logger;
    this.log.Log();
  }
}
