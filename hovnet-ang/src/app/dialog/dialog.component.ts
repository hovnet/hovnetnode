import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  email: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }
  close(){
    // this.dialogRef.close(true);
 }
}
