import { Component, OnInit, ViewChild } from '@angular/core';
import {GlobalVars} from '../common/Global-Vars';
import { LoginComponent } from '../login';
import { UserService } from '../_services';
import { User } from '../_models';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  loading = false;
  users: User[];

//   @ViewChild(LoginComponent)
//  private counterComponent: LoginComponent;
//  Gbl() { return counterComponent.GlobalVars.ShemMisrad; }

  ar: string = "a" + GlobalVars.ShemMisrad;//'arik levi'; //GlobalVars.ShemMisrad;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.loading = false;
        this.users = users;
        console.log("users :",this.users);
    });

  }
  onSidenavClose(){}

}
