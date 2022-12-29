import { Component, OnInit, ChangeDetectorRef, Input  } from '@angular/core';
import { PostService } from '../../../post.service';
import { ExecProc } from '../bdika/ExecProc';
import { Bdika } from '../bdika/bdika.';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']
  
})
export class TblComponent implements OnInit {
  @Input() data1 : string;

  // Joke: any = this.data;
  title = 'Table';
  // tableColumns:string[] = ['SourceCaseSequenceNum', 'ExecutionProceedingTypeID', 'ExecutionProceedingStateID', 'ExecutionActionStateID', 'ExecutionDate', 'ImportDate'];
  // tableColumns:string[] = ['CaseDisplayIdentifier', 'ProcessNumber', 'SourceCaseSequenceNum', 'ExecutionProceedingStateID'];
  // tableColumns:string[] = ['CaseDisplayIdentifier', 'ProcessNumber', 'SourceCaseSequenceNum'];
  // tableColumns:string[] = ['SourceCaseSequenceNum', 'ExecutionProceedingStateID', 'ExecutionActionStateID', 'ExecutionDate', 'ImportDate'];
  tableColumns:string[] = ['CaseDisplayIdentifier', 'OrdinalNumber', 'SourceCaseSequenceNum', 'ExecutionProceedingStateID', 'ExecutionDate', 'ImportDate', 'InitiationDate'];
  // tableColumns:string[] = ['CaseDisplayIdentifier', 'OrdinalNumber', 'SourceCaseSequenceNum', 'ExecutionProceedingStateID', 'ExecutionDate', 'ImportDate'];

  dataSource: ExecProc[] = [];
  // dataSource: MatTableDataSource<Bdika>;

  resultsLength = 0;
  isLoadingResults = true;
  dd:any;jj:any;kk:any;
  hll:any;
  constructor(private service:PostService) {
  }

  ngOnInit() {
    this.psep();
    }

  psep()  {
    this.service.getBEPByProp(this.data1).subscribe(response => {
      if(response == null){
        alert("תקלה בהתחברות");
        console.error('prolem with post ToCreateIkulRechv table');
        return null;
      }
      else{
      this.kk = response;
      this.jj = JSON.stringify(this.kk);
      console.log(' kk   ', this.kk);
        this.dataSource = this.kk;
      }
    });
    };
}
