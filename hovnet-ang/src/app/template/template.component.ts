import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  debtorsCount:number=1; //10;
  ActionNum:number = 1;
  hotzlap:string = ' ';
  MeTar:string = '01/09/2020';
  AdTar:string = ' ';
  Meshech:string = ' ';
  KamutInHafaka:string = ' ';
  isWorking:boolean = false;
  Title :string = 'עיקולי רכב בתקשורת';

  constructor() { }

  ngOnInit(): void {
  }
  SelectHayavimLeIkul(){
    this.isWorking = !this.isWorking;
  }
}
