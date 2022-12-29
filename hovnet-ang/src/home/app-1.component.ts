import { Component, OnInit } from '@angular/core';
// import { PostService } from '../post.service';
// import { ExportExcelService } from '../export-excel.service';
import { MatToolbar} from '@angular/material/toolbar';
// import{ GlobalConstants } from './common/global-constants';
// import{ GlobalVars } from '../common/Global-Vars';
@Component({
  selector: 'app1-home',
  templateUrl: 'app-1.component.html',
  styleUrls: ['app-1.component.css']
})
export class App1Component implements OnInit {
  fortesting:string=null;
  ngOnInit() {
    // this.fortesting=GlobalVars.aa();
  }
}