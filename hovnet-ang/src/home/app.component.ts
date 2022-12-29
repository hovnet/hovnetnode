import { Component, OnInit } from '@angular/core';
import{ GlobalVars } from '.././app/common/Global-Vars';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  fortesting:string=null;
  ngOnInit() {
    this.fortesting=GlobalVars.aa();
  }

}
