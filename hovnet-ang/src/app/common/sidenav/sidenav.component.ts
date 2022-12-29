import { Component, OnInit} from '@angular/core';
import { GlobalVars } from '.././Global-Vars'//./common/Global-Vars';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    arrr: string = GlobalVars.ShemMisrad;
  constructor() { }
  ngOnInit(): void {
  }


}
