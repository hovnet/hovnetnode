import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.css']
})
export class TemplateBComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() {}

  ngOnInit() {
  }

}