import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ExportExcelService } from '../export-excel.service';
import{ GlobalConstants } from '../common/global-constants';
import{ GlobalVars } from '../common/Global-Vars';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-template-d',
  templateUrl: './template-d.component.html',
  styleUrls: ['./template-d.component.css']
})
export class TemplateDComponent implements OnInit {
    debtorsCount:number=1; //10;
    Hotslaphyv:string = '';
    Misrad:any=1;
    posts:any; posts1:any;
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
    DocData: any = null;
    isCompleted  = false;
    isWorking  = false;
  

    constructor(private service:PostService, public ete: ExportExcelService) {
  
    console.log(GlobalConstants.apiURL);
    }
   
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    ngOnInit() {
      // this.fortesting=GlobalVars.aa();
      console.log('i=    ');
      this.ActProps();
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
      // this.SelectedAction = GlobalConstants.GBL;
      // console.log('gbl   ',GlobalConstants.GBL);
      // this.jsonPosts1 = JSON.stringify(GlobalConstants.GBL);
      // this.jsonPosts1 = GlobalVars.MisparTofes + '  ' + GlobalVars.ShemTofes  + '  ' + GlobalVars.CoteretTofes;
      // this.jsonPosts1 = JSON.stringify(GlobalVars.Tofes);
  
      // GlobalConstants.GBL = this.posts1.find(opt => opt.מזהה == this.ActionNum);
    }
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    ActProps(){
      this.service.getActs(1)    // misrad=1 coming from userprofile
      .subscribe(response => {
          this.posts1 = response;
          console.log('response -->', this.posts1);
          this.tikimLeikul = this.posts1.length;
          this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
      }); 
    };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    SelectHayavimLeIkul(){
      GlobalVars.SetVars(this.ActionNum, this.posts1);
      this.jsonPosts1 = JSON.stringify(GlobalVars.Tofes);
      this.jobStarted =  this.getDate();
      console.log('xxx   ', this.ActionNum + "--" + this.debtorsCount);
      this.service.getDebtors4action(this.debtorsCount, this.Hotslaphyv, this.ActionNum,GlobalVars.tuser.misrad,'11')
      .subscribe(response => {
        if(response != null){
        this.posts = response;
        console.log('response -->', this.posts);
        this.tikimLeikul = this.posts.length;
        this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
        this.jsonPosts = JSON.stringify(this.posts);
  
        this.ps();
        // this.psb();
        alert("סריקת חייבים לפעולה הסתיים , אותרו, " + this.posts.length + " חייבים לפעולה");
        }
      });
    };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    ps(){
      this.service.postDebtors(this.posts)
      .subscribe(response => {
        if(response != null){
        this.posts = response;
        console.log('response -->', this.posts);
        }
        else{
         console.log('o.k', response); 
        }
      });
    };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    psDocBdika(){
      var DocBdika;
      this.service.getDocDetails().subscribe(response => {
        if(response != null){
        DocBdika = response;
        console.log('DocBdika -->', DocBdika);
        // this.tikimLeikul = poDocBdika.length;
        // this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
        // this.jsonPosts = JSON.stringify(this.posts);
  
        this.exportToExcel(DocBdika); 
        alert("דוח לבדיקה הופק בהצלחה");
  
        }
      });
    };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    psDoc(){
      this.isWorking  = true;
      var Doc:any;
      // this.service.getDoc(this.ActionNum).subscribe(response => {
      this.service.getReports(this.debtorsCount, this.Hotslaphyv, this.ActionNum,GlobalVars.tuser.misrad).subscribe(response => {

        if(response != null){
        Doc = response;
        console.log('DocBdika -->', Doc);
        this.DocData = JSON.stringify(Doc);
        this.tikimLeikul = this.DocData.length;
        alert("דוח חריגים הופק בהצלחה");
        this.isWorking  = false;
        }
      });
    };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    // psb(){
    //   this.service.postBdika(this.posts)
    //   .subscribe(response => {
    //     if(response != null){
    //     this.posts = response;
    //     console.log('response -->', this.posts);
    //     }
    //     else{
    //      console.log('o.k', response); 
    //     }
    //   });
    // };
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    // phs(){
    //   this.service.postToHozActionsL(this.posts)
    //   .subscribe(response => {
    //     if(response != null){
    //     this.posts = response;
    //     console.log('response -->', this.posts);
    //     this.tikimLeikul = this.posts.length;
    //     this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
    //     this.jsonPosts = JSON.stringify(this.posts);
    //     }
    //   });
    // };
  
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
  
    //+-----------------------------------------------------------+
    //
    //+-----------------------------------------------------------+
    exportToHozActionsL() {
      console.log('this.posts',this.posts);
      var dataForHozActionsL = [];
      this.posts.forEach((row: any) => {
        dataForHozActionsL.push(Object.values(row))
      })
      // let reportData = {
      //   title: GlobalVars.CoteretTofes,
      //   data: this.dataForExcel,
      //   headers: Object.keys(this.posts[0])
      }
      // this.ete.exportExcel(reportData); 
    }
  
  