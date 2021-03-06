import { Component, OnInit, Injector } from '@angular/core';
import { BaseLogger} from '../utility/customerApp.logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  
  log: BaseLogger = null;
  
  constructor(_injector:Injector){
    this.log = _injector.get("1");
    this.log.Log();
  }
}
