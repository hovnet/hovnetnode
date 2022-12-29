import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';
import { environment } from '../environments/environment';
import { switchMap } from 'rxjs/operators';
   
@Injectable({
  providedIn: 'root'
})
export class PostService {
//  `${environment.apiUrl}/api/users/authenticate`
  // apiUrl5000:any =  'http://192.168.1.27:3003'

  Trl5000 = `${environment.apiUrlDocs}`;
  Trl:any = `${environment.apiUrl}`;
  // private urlActions = 'http://192.168.0.165:3003' + '/SActions';
  private urlActions = this.Trl + '/SActions';
  private urlReports = this.Trl + '/DReports';
  private urlnr = this.Trl + '/main';
  private urlM = this.Trl + '/getProByMezaheh/?mz=';
  private debtorsurl = this.Trl + '/pos';
  private posHozActionLG = this.Trl + '/pos/?rw=';
  // private posHozActionL = this.Trl + '/posActionAndMotionExtraData';
  private posHozActionL = this.Trl + '/posTransToDB';
  private posHozActionLNew = this.Trl + '/AddActions';
  private postEnter = this.Trl + '/postEnternace';
  private urlMDoc = this.Trl + '/getDocBdika';
  private getIkuv = this.Trl + '/Ikuv';
  private getTikim = this.Trl + '/getTikim';
  private getepp= this.Trl + '/getBEP';
  private getBEPBP= this.Trl + '/getBEPByProp';
  private getWeekPBP= this.Trl + '/getProByWeek';
  private getDocs= this.Trl + '/dd';
  private getTest= this.Trl + '/Test';
  private getCheckRun= this.Trl + '/CheckRun';
  Tikim:any;
  data:any=null;
  constructor(private httpClient: HttpClient) { }
   
  getDebtors4action(lng:any, hlh:any, action:any, misrad:any, P:any){
    console.log('url--> ',this.urlActions + "?tr=" + lng +"&hh=" + hlh + "&ac=" + action + "&mis=" + misrad + "&Prop=" + P);
    // return this.httpClient.get(this.urlActions + "?tr=" + lng +"&hh=" + hlh +"&ac=" + action + "&mis=" + misrad + "&Prop=" + P);
    return this.httpClient.get(this.Trl + '/SActions' + "?tr=" + lng +"&hh=" + hlh +"&ac=" + action + "&mis=" + misrad + "&Prop=" + P);
  }

  getReports(lng:any, hlh:any, action:any, misrad:any){
    console.log('url--> ',this.urlReports + "?tr=" + lng +"&hh=" + hlh + "&ac=" + action + "&mis=" + misrad);
    // return this.httpClient.get(this.urlReports + "?tr=" + lng +"&hh=" + hlh +"&ac=" + action + "&mis=" + misrad);
    return this.httpClient.get(this.Trl + '/DReports' + "?tr=" + lng +"&hh=" + hlh +"&ac=" + action + "&mis=" + misrad);
  }

  getActs(mis:any){
    // debugger
    console.log('urlM--> ',this.urlM + mis);//this.Trl + '/getProByMezaheh/?mz='
    try {
      // debugger
      // return this.httpClient.get( this.urlM + mis);
      return this.httpClient.get( this.Trl + '/getProByMezaheh/?mz=' + mis);
    }
    catch(error){
      // debugger
      console.log('problem with get Mezaheh');
    }
  }

  // getDocDetails(action:any, misra:any){
  getDocDetails(){
      console.log('urlMDoc--> ',this.urlMDoc);
    // return this.httpClient.get( this.urlMDoc + "?ac=" + action + "&mis=" + misra);
    return this.httpClient.get( this.urlMDoc);
  }

  postDebtors(data){
    console.log('posturl--> ',this.debtorsurl);
    console.log('data--> ',  data);
    
    var htt =  this.httpClient.post(this.debtorsurl, data);
    console.log('htt   ',htt);
    return htt;
    // return this.httpClient.post(this.debtorsurl, data);
  }

  postEnternace(rows:any){
    // console.log('postToIkul--> ',this.postToBdikaAct);
    console.log('rows--> ',rows);
    return this.httpClient.post(this.postEnter, rows);
  }

  getIkuves(){
    console.log('postToIkul--> ',this.getIkuv);
    return this.httpClient.get(this.getIkuv);
    
  }

  getPTikim(){
    const Tikm =  this.httpClient.get(this.getTikim);
    // console.log('postToTikim--> ',Tikm);
    return Tikm;
  }

  getDoc(action:any){
    // const Tikm =  this.httpClient.get(this.getDocs + '?ac=' + action); //this.Trl + '/dd'
    const Tikm =  this.httpClient.get(this.Trl + '/Clientxls4check' + '?ac=' + action); //this.Trl + '/dd'
    return Tikm;
  }

  // getWeekProp(week:any){
    getWeekProp(week:any, misrad:any){
      // const Tikm =  this.httpClient.get(this.getWeekPBP + '?Week=' + week +"&Misrad=" + misrad); //this.Trl + '/getProByWeek'
      const Tikm =  this.httpClient.get(this.Trl + '/getProByWeek' + '?Week=' + week +"&Misrad=" + misrad);
  return Tikm;
  }

  getnRechv(lng:any, action:any){
    console.log('url--> ',this.urlnr + "?tr=" + lng +"&ac=" + action);
    // return this.httpClient.get(this.urlnr + "?tr=" + lng +"&ac=" + action);
    return this.httpClient.get(this.Trl + '/main' + "?tr=" + lng +"&ac=" + action);
  }

  getRes(Infile:any){
    return this.httpClient.get(this.Trl + '/CheckRun');
    // this.httpClient.get('assets/ans.txt', { responseType: 'text' })
    // this.httpClient.get(this.Trl + '/CheckRun', { responseType: 'text' })
    // .subscribe(response =>{
    //     if(response != null)
    //   {
    //     console.log('Runing -->', response);
    //     return response;
    //   }
    //   else
    //   {
    //       console.log('problem with calling getRes--->',Error);
    //       return Error;
    //   }
    // });
  }


  getep(){
    console.log('epp   --> ',this.Trl + '/getBEP');
    return this.httpClient.get(this.Trl + '/getBEP');//this.getepp
    
  }

  getBEPByProp(Prm:any){
    console.log('epp   --> ',this.getBEPBP);
    // return this.httpClient.get(this.getBEPBP + "?prm=" + Prm);//this.Trl + '/getBEPByProp'
    return this.httpClient.get(this.Trl + '/getBEPByProp' + "?prm=" + Prm);//
    
  }

  getTestProg(Prm:any){
    console.log('epp   --> ',this.getTest);
    return this.httpClient.get(this.getTest + "?prm=" + Prm);
  }

  RunTest(){
    return this.httpClient.get(this.getTest);
  }

  CheckJobRuning(){
    return this.httpClient.get(this.getCheckRun);
  }

  postToHozActionsL(Tact:any){
    console.log('posHozActionL--> ',this.posHozActionLG);
    console.log('rows--> ',Tact);
    return this.httpClient.post(this.posHozActionL, Tact);
  }
}
