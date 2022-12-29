import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../post.service';
import {ActivatedRoute} from "@angular/router";
import { interval } from 'rxjs';

import * as moment from 'moment';
import { error } from 'protractor';
import { catchError } from 'rxjs/operators';
import { GlobalVars } from '../common/Global-Vars';
import { log } from 'console';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeeklyComponent implements OnInit {
  
  posts:any;
  debtorsCount:number=100; //10;
  Hotslaphyv:string = '';
  chk: boolean[] = [];
  ActionNum:number = 1;
  hotzlap:string = ' ';
  isWorking:boolean = false;
  isWorkingS:boolean = false;
  isWork:boolean = false;
  isWorkU:boolean = false;
  Title :string = '';
  subjob:boolean = false;
  jobStarted:Date; //start
  jobEtarted:Date; //ended
  jobDtarted:Date; //Dauration
  tikimLeikul:number; //Dauration
  Results: string;
  Prop:any=null;
  IsEnded: boolean = false;
  public array = [1, 2, 3, 4, 5, 6];
  TParams:any;
  Tday:Date;
  ShemTofes:any;
  LastAction: number;
  ElectedProp: any;
  resExecution:any;
  selectall:boolean = false;
  timer: any;
  Counter: number=0;

  constructor(private service:PostService,
              private route: ActivatedRoute) 
              {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log('Params-->',params)
      this.setTitle(params.id);
      this.ActProps(params.id, GlobalVars.tuser.misrad);
    });
    
  }

  // SetInterval(){
  //   interval(7000).subscribe(x => {
  //     // this.timer = this.service.getRes("");
  //     console.log('timer:   ',this.timer);
  //   }
  //   )
  //   // this.timer = interval(10000).subscribe(x => this.GetCheckRun());

  //   // this.timer = this.service.getRes("");
  //   // console.log('timer:   ',this.timer);
  // }



  async GetCheckRun(){
    await this.service.CheckJobRuning().subscribe(response => {
      if(response != null)
    {
      // this.Prop = response;
      console.log('Runing -->', response);
    }
    else
    {
        console.log('problem with calling getweekprop--->',Error);
    }
  }); 
  }

  async SetFullWeek(Parm: string){
    if(Parm === 'C'){
      for (let i = 0; i < this.Prop.length; i++) {
         this.chk[this.Prop[i]['MisparTofes']] = true;
      }
    }
    if(Parm === 'NC'){
      this.chk = [];
  }

  }

  async exec(){
    // this.isWorkingS = true;
    for (let i = 0; i < this.Prop.length; i++) {
      if ( this.chk[this.Prop[i]['MisparTofes']] === true ) {

      // this.chk = [];
      this.LastAction = this.Prop[i]["MisparTofes"];
      // this.chk[i] == true;
      this.ShemTofes = this.Prop[i]["ShemTofes"];
      this.ElectedProp = this.Prop[i];
  
      // this.LastAction = this.Prop[i]['MisparTofes'];
      this.ExecutAction()
        }
      }
      // this.isWorkingS = false;

  }

  async switchTaf(Prop:any){
    this.chk = [];
    this.LastAction = Prop["MisparTofes"];
    this.chk[1] == true;
    this.ShemTofes = Prop["ShemTofes"];
    this.ElectedProp = Prop;
  }

  setAmount(i:any){
      this.debtorsCount=i;
  }

  async ActProps(week:any, msrd:any){
      await this.service.getWeekProp(week, GlobalVars.tuser.misrad).subscribe(response => {
        if(response != null)
      {
        this.Prop = response;
        console.log('weekly list of actions -->', this.Prop);
      }
      else
      {
          console.log('problem with calling getweekprop--->',Error);
      }
    }); 
  };

  async ExecutAction(){
      let switchind = this.LastAction;
      this.IsEnded = true;
      switch (switchind)
      {
        case 36 :
          await this.SelectHayavimLeIkul(switchind, this.Prop);
          break;
        case 99 :
          await this.Test(switchind);
          break;
        default:

          await this.SelectHayavimLeIkul(switchind, this.Prop);
          break;
          this.subjob = true; 
      }
    if(!this.isWorking) {
      alert("לא נבחרה פעולה לביצוע");
    } 
  }

  async ExecDocsBdika(){
    this.isWork = true;
      console.log('chk-->',this.chk)
      for (let i = 1; i < 1000; i++) {
        this.subjob = false;
        if(this.chk[i] == true){
          // console.log('i-->',i) 
          this.IsEnded = true;
          switch (i)
          {
            case 1 :
                await this.psDoc(i); 
                break;
            case 2 :
                // await this.psDoc(i); 
                // break;
            case 5 :
                // await this.psDoc(i); 
                // break;
            case 6 :
              // await this.psDoc(i); 
              // break;
                case 9 :
              // await this.psDoc(i); 
              // break;
            case 10 :
              // await this.psDoc(i); 
              // break;
            case 11 :
                await this.psDoc(i); 
                break;
            default:
              // await this.SelectHayavimLeIkul(i*100);
              break;
          }
        }
      }
      if(!this.isWork) {
        alert("לא נבחרה פעולה לביצוע",);
      } 
  }
    
  async SelectHayavimLeIkul(k:number, Prop:any) {
        this.isWorking = true;
        this.ipusMonim();
        this.jobStarted =  new Date();
        this.ActionNum = k;
        this.hotzlap = ' ';
        GlobalVars.tuser["ActionNum"] =  this.ActionNum.toString();
        GlobalVars.tuser["debtorsCount"] =  this.debtorsCount.toString();
        GlobalVars.tuser["hotzlap"] =  this.hotzlap;
        // this.SetInterval();

        await this.service.getDebtors4action(this.debtorsCount.toString(), this.Hotslaphyv, this.ActionNum.toString(), GlobalVars.tuser.misrad, JSON.stringify(this.ElectedProp))
        .subscribe(response => {
              try{
                if(response != null){
                  this.resExecution = response;
                  this.tikimLeikul = this.resExecution.RecCounrLeIkul;
      
                  this.Results = '('+ this.resExecution.RecCount + ' / ' + this.resExecution.RecCounrLeIkul + ')';
                  
                  this.jobEtarted = new Date();
                  this.jobDtarted = new Date();
                  this.jobDtarted =  this.calcrunTime();
                  console.log(this.resExecution);
                  console.log("finished with: " + k + ", time: " + moment.now + ",Result: " + this.Results);

                  this.isWorking  = false;

                  this.playAudio('1');
                  this.playAudio('3');
                  return;
                  }
                else{
                  console.log('response is null');
                  this.playAudio('2');
    
                  alert("תקלה בהתחברות");
                  return 
                }
              }
              catch(error)
              {
                  console.log('problem response value');
                  // this.EndAction = false;
                  return 
              }
        });
  };

  async psDoc(k:any){
      this.ipusMonim();
      this.jobStarted =  new Date(); //this.getDate();
      this.isWork  = true;
      var Doc:any;
      console.log('this.Prop -->', this.Prop);

      this.service.getDoc(k).subscribe(response => {
        try{
              if(response != null){
                this.playAudio('1');
                this.playAudio('3');
                Doc = response;
              console.log('DocBdika -->', Doc);
              this.posts = JSON.stringify(Doc);

              this.tikimLeikul = this.posts.length;
              this.jobEtarted = new Date();
              this.jobDtarted = new Date();
              this.jobDtarted =  this.calcrunTime();

              this.tikimLeikul = this.posts.length;
              alert("דוח הופק בהצלחה");
              this.isWork  = false;
              return
              }
              else{
                this.playAudio('2');
                alert("תקלה בהתחברות");
                return
              }
            }
            catch(error){
              this.playAudio('2');
              alert("תקלה בהתחברות");
              return

            }
      });
  };

  async ExecutActionPost(){
    console.log('chk-->',this.chk) 
    for (let i = 1; i < 1000; i++) {
      this.subjob = false;
      if(this.chk[i] == true){
        // console.log('i-->',i) 
        this.IsEnded = true;
        // this.isWorking = true;
        switch (i)
        {
          case 36 :
            this.psDoc(i); 
            break;
          // case 44 :
          //   this.psDoc(i); 
          //   break;
          default:
            await this.postResultsToDBtest(i);
            // this.isWorkU = false;
            break;
            this.subjob = true; 
        }
      }
    }
    if(!this.isWorkU) {
      alert("לא נבחרה פעולה לביצוע");
    } 
    // if(!this.isWorking){
    //   alert('job done');
    //   }
  }

  async postResultsToDBtest(currentact:any){
    this.isWorkU  = true;
    await this.service.postToHozActionsL({ currentact })
    .subscribe(res => {
    this.isWorkU  = false;
    alert("הוספת פעולות הסתיימה");
    });
  };
      
  Test(currentact:any){
      this.service.getTestProg({ currentact })
      .subscribe(response => {
        if(response != null){
      //   this.posts = response;
      //   console.log('response -->', this.posts);
      // debugger
      alert("הוספת פעולות הסתיימה");
        }
        else{
          alert("תקלה בהתחברות");
          console.error('prolem with post Insert');
        }
      });
  };

  calcrunTime(){
      var diff = new Date(this.jobEtarted.getTime() - this.jobStarted.getTime());
      return diff;
  }

  getDate(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' '+date;
    return dateTime;

  }

  ipusMonim(){
      this.jobEtarted =null;
      this.jobDtarted=null;
      this.tikimLeikul=null;
      this.Results=null;
  }

  InitChk(){
      for (let i = 1; i < 1000; i++) {
      this.chk[i] = null;
      }
  }

  setTitle(p:any){
    this.Tday = new Date();

      switch (p){
        case '1' :
        this.Title = 'פעולות לשבוע 01-07 בחודש';
        break;
        case '2' :
        this.Title = 'פעולות לשבוע 08-14 בחודש';
        break;
        case '3' :
        this.Title = 'פעולות לשבוע 15-21 בחודש';
        break;
        case '4' :
              this.Title = 'פעולות לשבוע 22-סוף בחודש';
        break;
        case '5' :
        this.Title = 'דוחות רמת תיקים';
        break;
        case '6' :
        this.Title = 'דוחות רמת חייבים';
        break;
        default:
    }
  }

  playAudio(w:any){
    let audio = new Audio();
    switch (w){
      case '1' :
        audio.src = "../../../assets/audio/beep-07.wav";
      break;
      case '2' :
        audio.src = "../../../assets/audio/beep-09.wav";
      break;
      case '3' :
          audio.src = "../../../assets/audio/EndRun.mp4";
      break;
      default:
  }
    audio.load();
    audio.play();
  }
}
    // this.selectall = this.selectall === true ? false : true;
    // if(this.selectall === false){
    //   this.selectall = true;
    //   for (let i = 0; i < this.Prop.length; i++) {
    //      this.chk[this.Prop[i]['MisparTofes']] = true;
    //   }



      // for (let i = 0; i < this.Prop.length; i++) {
      //   // this.chk = [];
      //   this.LastAction = this.Prop[i]["MisparTofes"];
      //   // this.chk[i] == true;
      //   this.ShemTofes = this.Prop[i]["ShemTofes"];
      //   this.ElectedProp = this.Prop[i];
    
      //   // this.LastAction = this.Prop[i]['MisparTofes'];
      //   this.ExecutAction()
      //     }
      // }

    // else{
    //   this.chk = [];
    //   this.selectall = false;
    // }

  // var audio = new Audio();
  // audio.src = "http://remote.address.com/example.mp3";
  // audio.load();
  // audio.play();
