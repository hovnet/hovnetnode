import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ExportExcelService } from '../export-excel.service';
import{ GlobalConstants } from '../common/global-constants';
import{ GlobalVars } from '../common/Global-Vars';
// import { analyzeAndValidateNgModules, ElementSchemaRegistry } from '@angular/compiler';
// import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-root',
  templateUrl: './template-g.component.html',
  styleUrls: ['./template-g.component.css']
})
export class TemplateGComponent implements OnInit {
  debtorsCount:number=1; //10;
  Hotslaphyv:string = '';
  Misrad:any=1;
  posts:any; posts1:any;post2:any;
  jobStarted:string; //start
  jobEtarted:string; //ended
  jobDtarted:string; //Dauration
  tikimLeikul:number; //Dauration
  jsonPosts:string;
  jsonPosts1:string;
  ActionNum:number = 1;
  SelectedAction:number=0;
  title = 'angular-export-to-excel';
  dataForExcel = [];
  fortesting:string=null;
  isCompleted  = false;
  isWorking  = false;
  hotzlap :string = ' ';
  constructor(private service:PostService, public ete: ExportExcelService) {

  console.log(GlobalConstants.apiURL);
  }
 
  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  ngOnInit() {
    this.isCompleted=true;
    this.isCompleted=false;
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  MainTask()
  {
    this.ActProps();
    // this.ss(this.debtorsCount);
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  SetTikCount(ii){
    this.debtorsCount = ii;
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  Setact(ii){
    this.ActionNum = ii;
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  GetSpecificAction(){
    GlobalConstants.GBL = this.posts1; //this.posts1.find(opt => opt.מס_טופס == this.ActionNum);
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  ActProps(){
    this.service.getActs(GlobalVars.tuser.misrad)    // misrad=1 coming from userprofile
    .subscribe(response => {
      if(response != null)
      {
        this.posts1 = response;
        console.log('response -->', this.posts1);
        this.tikimLeikul = this.posts1.length;
        this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
      }
      else{
          console.error('prob');
      }
    }); 
    };

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  SelectHayavimLeIkul(){
    this.isWorking  = true;
    GlobalVars.SetVars(this.ActionNum, this.posts1);
    this.jsonPosts1 = JSON.stringify(GlobalVars.Tofes);
    this.jobStarted =  this.getDate();
    // debugger
    this.service.getDebtors4action(this.debtorsCount.toString(), this.Hotslaphyv, this.ActionNum.toString()+"|"+this.hotzlap,GlobalVars.tuser.misrad,'11')
    .subscribe(response => {
      if(response != null){
      this.posts = response;
      console.log('response -->', this.posts);
      this.tikimLeikul = this.posts.length;
      this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
      this.jsonPosts = JSON.stringify(this.posts);
      // this.psb();
      alert("  סריקת חייבים לפעולה הסתיים , אותרו, " + this.posts.length + " חייבים לפעולה ונשמר קובץ לבדיקה");
      this.isWorking  = false;
      }
      else{
        alert("תקלה בהתחברות");
        console.error('prolem with post ToCreateIkulRechv table');
      }
    });
    // alert('תקלה בהתקשרות, כנראה VPN נפל...');

    };

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  ps(){
    var psrec:any;
    // debugger
    this.service.postDebtors(this.posts)
    .subscribe(response => {
      if(response != null){
        // debugger
      psrec = response;
      // this.posts = response;
      console.log('psrec --->', psrec);
      alert("עידכון בקשות לפעולה הסתיים בהצלחה");
      }
      else
      {
        alert("תקלה בהתחברות");
        console.error('prolem with post HozActionsL and MotionExtraDataL table');
      }
    });
    };

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  psDocBdika(){
    var DocBdika;
    // this.service.getDocDetails( this.ActionNum,GlobalVars.tuser.misrad).subscribe(response => {
      this.service.getDocDetails().subscribe(response => {
        if(response != null){
      DocBdika = response;
      console.log('DocBdika -->', DocBdika);
      this.exportToExcel(DocBdika);
 
      alert(" דוח לבדיקה הופק בהצלחה ונשמר");
      }
      else{
        alert("תקלה בהתחברות");
        console.error('prolem with post ToCreateIkulRechv table');

      }
    });
    };

    psDocBdikaDirect(){
      var DocBdika;
      this.service.getDocDetails().subscribe(response => {
        if(response != null){
        DocBdika = response;
        console.log('DocBdika -->', DocBdika);
        this.exportToExcel(DocBdika);
   
        alert("דוח לבדיקה הופק בהצלחה");
        }
        else{
          alert("תקלה בהתחברות");
          console.error('prolem with post ToCreateIkulRechv table');
  
        }
      });
      };
  
  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  // psb(){
  //   // debugger
  //   this.service.postBdika(this.posts).subscribe(response => {
  //     if(response != null){
  //     this.posts = response;
  //     console.log('response -->', this.posts);

  //     }
  //     else{
  //       alert("תקלה בהתחברות");
  //       console.error('prolem with post HozActions and ActionsLink tables');
  //     }

  //   });
  //   };

    pIkuv(){
      this.service.getIkuves()
      .subscribe(response => {
        if(response != null){
        // this.posts = response;
        console.log('response Ikuv -->', response);
        // this.tikimLeikul = this.posts.length;
        // this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
        // this.jsonPosts = JSON.stringify(response);
        alert("סריקת עיכוב הליכים");
        // this.psb();
        }
        else{
          alert("תקלה בהתחברות");
          console.error('prolem with Ikuvim');
        }
      });
  

    }

    pTikim(){
      this.service.getPTikim().subscribe(response => {
        if(response != null){
        // var ttt =  response;
        console.log('response -->', this.post2);
        alert("סריקת פרטי תיקים הסתיימה");
        }
        else{
          alert("תקלה בהתחברות");
          console.error('problem with pTikim');
        }
      });
  

    }

    NewRechv(){
      this.service.getnRechv(this.debtorsCount.toString(), this.ActionNum.toString()).subscribe(response => {
        if(response != null){
        // var ttt =  response;
        console.log('response -->', this.post2);
        alert("הסתיימה ריצת רכב חדשה");
        }
        else{
          alert("תקלה בהתחברות");
          console.error('problem with new rechv');
        }
      });
  

    }

    //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  applyStyles() {
  const styles = "{background-color:" + GlobalVars.BackColor + "}";
  console.log('styles   ', styles);
  return styles;
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  calcrunTime(){
  this.jobEtarted =  this.getDate();
  Date.parse(this.jobEtarted)
  return (Date.parse(this.jobEtarted) - Date.parse(this.jobStarted));
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  getDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
    }

  //+-----------------------------------------------------------+
  //
  //+-----------------------------------------------------------+
  exportToExcel(TDocBdika:any) {
    console.log('TDocBdika',TDocBdika);
    this.dataForExcel = [];
    TDocBdika.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row))
    })

    let reportData = {
      title: GlobalVars.CoteretTofes,
      data: this.dataForExcel,
      headers: Object.keys(TDocBdika[0])
    }
    this.ete.exportExcel(reportData); 
    }
  }
