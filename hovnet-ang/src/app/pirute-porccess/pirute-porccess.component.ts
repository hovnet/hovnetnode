import { Component, OnInit, ChangeDetectorRef, Inject, ɵCodegenComponentFactoryResolver  } from '@angular/core';
import { PostService } from '../post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import {MatToolbar, PageEvent, MatPaginator, MatSpinner } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Bdika } from '../_models/Bdika';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-pirute-porccess',
  templateUrl: './pirute-porccess.component.html',
  styleUrls: ['./pirute-porccess.component.css']
})

export class PirutePorccessComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public dataSource = new MatTableDataSource();
  title = 'Table';
  tableColumns:string[] = ['Acts', 'hotzlap', 'MisparPnimi', 'HayavNum', 'shemHayav','TikStatus',  'SideStatus', 'Lbakasha', 'ShemLakoach', 'yitraHotzlap', 'IsIkuv', 'MoneTik', 'MoneSide'];
  // dataSource: Bdika[] = [];
  
  selectedRowIndex: number = -1;

  highlight(row){
      this.selectedRowIndex = row.id;
  }
  
  resultsLength = 0;
  isLoadingResults = true;

  dd:any;jj:any;kk:any;

  constructor(private service:PostService, public dialog: MatDialog)  {
  }

  ngAfterViewInit() {
    // add ngAfterViewInit hook
    this.dataSource.paginator  = this.paginator;
    }

  ngOnInit() {
    this.psDocBdika();
    }

  psDocBdika()  {
    this.service.getDocDetails().subscribe(response => {
      if(response == null){
        alert("תקלה בהתחברות");
        console.error('prolem with post ToCreateIkulRechv table');
        return null;
      }
      else{
      this.kk = response;
      this.jj = JSON.stringify(this.kk);
      console.log(' jj   ', this.jj);
        this.dataSource.data = this.kk;
      }
    });
    };
    openDialog(hl:any,hy:any){
      console.log('hl, hy   ', hl);
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '800px',
        height: '600px',
        direction: 'rtl',
        data: {hl, hy}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // this.email = result;
      });
    }
    close(){
      // this.dialogRef.close(true);
   }
   getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
   }
  
}
