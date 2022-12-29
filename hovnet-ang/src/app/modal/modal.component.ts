import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

interface DialogData {
  email: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: '../modal//modal.component.html',
  styleUrls: ['../modal/modal.component.css']
})
export class ModalComponent implements OnInit {
  
title = 'פירוט נתונים לבדיקה';
tblKey: string = null;
// jj: string[] = ['5027740419', '1'];
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
    console.log('data dia    ', this.data);
    this.tblKey = this.data['hl'] + "!" + this.data['hy'] 
    // this.jj = "hlArik levi";
  }
  close(){
    this.dialogRef.close(true);
 }
 onTabClick(one:any){

 }
}
