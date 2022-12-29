import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import * as moment from 'moment';
import { error } from 'protractor';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  posts:any;

  debtorsCount:number=2500; //10;

  chk1:boolean = false;
  chk2:boolean = false;
  chk3:boolean = false;
  chk: boolean[] = [];
  ActionNum:number = 1;
  hotzlap:string = ' ';
  MeTar:string; // = '01/09/2020';
  AdTar:string = ' ';
  Meshech:string = ' ';
  KamutInHafaka:string = ' ';
  isWorking:boolean = false;
  nextAct:boolean = false;
  Title :string = 'פעולות לשבוע ראשון בחודש...';

  jobStarted:Date; //start
  jobEtarted:Date; //ended
  jobDtarted:Date; //Dauration
  tikimLeikul:number; //Dauration
  TWeek:any=1;
  Prop:any=null;
  ar:any=null;

  QualityControl: boolean = false;

  public array = [1, 2, 3, 4];


  constructor(private service:PostService) {
  }
  ngOnInit(): void {
    // this.InitChk()
    this.ActProps();
  }

  async ActProps(){
    await this.service.getWeekProp(this.TWeek, this.TM).subscribe(response => {
      if(response != null)
      {
        this.Prop = response;
        console.log('response -->', this.Prop);
        console.log('sub -->', this.Prop[1]['KoteretTofes']);
        console.log(this.chk);
      }
      else
      {
          console.log('prob--->',Error);
      }
    }); 
    };



  async ExecutAction(){
    this.isWorking = true;
    // var cc: number = length(this.chk);
    for (let i = 0; i < 1000; i++) {
      // console.log ("Block statement execution no." + i, this.chk[i]);
      if(this.chk[i] == true){
        await this.SelectHayavimLeIkul(i);
        }
      }
      if(!this.isWorking){
      alert('job done');
      }
    }

  async SelectHayavimLeIkul(k:number){
    this.ipusMonim();
    this.jobStarted =  new Date(); //this.getDate();
    if(k==0){this.ActionNum = 1;};if(k==1){this.ActionNum = 2;};if(k==2){this.ActionNum = 3;}
    this.hotzlap = ' ';
    await this.service.getDebtors(this.debtorsCount.toString(), this.ActionNum.toString()+"|"+this.hotzlap,1)
    .subscribe(response => {
          try{
            if(response != null){
            this.posts = response;
            // console.log('response -->', this.posts);
            this.tikimLeikul = this.posts.length;
            // this.jobDtarted = ((this.calcrunTime())/1000/60).toFixed(3);
            // this.jsonPosts = JSON.stringify(this.posts);
            // this.psb();
            this.jobEtarted = new Date();
            this.jobDtarted = new Date();
            this.jobDtarted =  this.calcrunTime();
            alert("  סריקת חייבים לפעולה הסתיים , אותרו, " + this.posts.length + ")  חייבים לפעולה ונשמר קובץ לבדיקה" + k + "(");
            // console.log("  סריקת חייבים לפעולה הסתיים , אותרו, " + this.posts.length + ")  חייבים לפעולה ונשמר קובץ לבדיקה" + k + "(");
            this.isWorking  = false;
            // this.nextAct = !this.nextAct;
            return
            }
            else{
              alert("תקלה בהתחברות");
              // console.log('problem');
              return
            }
          }
          catch{

          }
    });
    // alert('תקלה בהתקשרות, כנראה VPN נפל...');
    };

    calcrunTime(){
      // this.jobEtarted =  this.getDate();
      // Date.parse(this.jobEtarted)
      // return (Date.parse(this.jobEtarted) - Date.parse(this.jobStarted));
      // return (this.jobEtarted.getDate() - this.jobStarted.getDate());
      // return (this.jobEtarted.getDate() - this.jobStarted.getDate());
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
        // this.jobStarted='';
        this.jobEtarted =null;
        this.jobDtarted=null;
        this.tikimLeikul=null;
      }

      InitChk(){

        this.chk = null;
      }

      // public inputControlsArr : Array<any> = [];
      // // this.service.getValues().subscribe((values)=>{
      //     // this.inputControlsArr = values;
      // });
    }
