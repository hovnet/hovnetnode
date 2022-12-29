import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { Observable }   from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private url = 'http://192.168.1.16:3003/getDetails/';
  private url = 'http://192.168.1.16:3003/getDetails';
  private urlM = 'http://192.168.1.16:3003/getProByMezaheh/?mz=';
  private debtorsurl = 'http://192.168.1.16:3003/pos';
  private posHozActionLG = 'http://192.168.1.16:3003/pos/?rw=';
  private posHozActionL = 'http://192.168.1.16:3003/pos';
  private postToBdikaAct = 'http://192.168.1.16:3003/postBdika';
  private postEnter = 'http://192.168.1.16:3003/postEnternace';
  private urlMDoc = 'http://192.168.1.16:3003/getDocBdika';
  private getIkuv = 'http://192.168.1.16:3003/Ikuv';
  private getepp= 'http://192.168.1.16:3003/getBEP';
  private getBEPBP= 'http://192.168.1.16:3003/getBEPByProp';
  
  // postEnternace
  Tikim:any;
  data:any=null;
  constructor(private httpClient: HttpClient) { }
   
  getDebtors(lng:any, action:any){
    console.log('url--> ',this.url + "?tr=" + lng +"&ac=" + action);
    return this.httpClient.get(this.url + "?tr=" + lng +"&ac=" + action);
  }

  getActs(mis:any){
    // debugger
    console.log('urlM--> ',this.urlM + mis);
    try {
      // debugger
      return this.httpClient.get( this.urlM + mis);
    }
    catch(error){
      // debugger
      console.log('problem with get Mezaheh');
    }
  }

  getDocDetails(){
    console.log('urlMDoc--> ',this.urlMDoc);
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

  postBdika(rows:any){
    console.log('postToIkul--> ',this.postToBdikaAct);
    console.log('rows--> ',rows);
    return this.httpClient.post(this.postToBdikaAct, rows);
  }

  postEnternace(rows:any){
    console.log('postToIkul--> ',this.postToBdikaAct);
    console.log('rows--> ',rows);
    return this.httpClient.post(this.postEnter, rows);
  }

  getIkuves(){
    console.log('postToIkul--> ',this.getIkuv);
    return this.httpClient.get(this.getIkuv);
    
  }

  getep(){
    console.log('epp   --> ',this.getepp);
    return this.httpClient.get(this.getepp);
    
  }
  getBEPByProp(data){
    console.log('epp   --> ',this.getBEPBP);
    return this.httpClient.get(this.getBEPBP, data);
    
  }
    

}

  // postToHozActionsL(rows:any){
  //   console.log('posHozActionL--> ',this.posHozActionLG);
  //   console.log('rows--> ',rows);
  //   // return this.httpClient.get(this.posHozActionLG + rows);

  //   return this.httpClient.post(this.posHozActionL, rows);
  // }
