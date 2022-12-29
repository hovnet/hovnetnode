import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-testim',
  templateUrl: './testim.component.html',
  styleUrls: ['./testim.component.css']
})
export class TestimComponent implements OnInit {

  constructor(private service:PostService) {
    // this.route.params.subscribe( params => console.log('Params-->',params) );
  }
  ngOnInit(): void {
  }
  async RunProg(){
        this.service.RunTest()
        .subscribe(response => {
            if(response != null){
              alert("ריצת ניסוי הסתיימה");
            }
            else{
              alert("תקלה בהתחברות");
              console.error('problem with post Insert');
            }
        });
  };

  async RunDocBdika(){

    this.service.getDoc(1).subscribe(response => {
        if(response != null){
          alert("ריצת ניסוי הסתיימה");
        }
        else{
          alert("תקלה בהתחברות");
          console.error('problem with post Insert');
        }
    });


    // this.service.getDoc(1).subscribe(response => {
    //   try{
    //       if(response != null){
    //         // this.playAudio('1');
    //         // this.playAudio('3');
    //         let Doc = response;
    //       console.log('DocBdika -->', Doc);
    //       let posts = JSON.stringify(Doc);

    //       // this.tikimLeikul = posts.length;
    //       // this.jobEtarted = new Date();
    //       // this.jobDtarted = new Date();
    //       // this.jobDtarted =  this.calcrunTime();

    //       // this.tikimLeikul = this.posts.length;
    //       alert("דוח הופק בהצלחה");
    //       // this.isWorkingD  = false;
    //       return
    //       }
    //       else{
    //         // this.playAudio('2');
    //         alert("תקלה בהתחברות");
    //         return
    //       }
    //     }
    //     catch(error){
    //       // this.playAudio('2');
    //       alert("תקלה בהתחברות");
    //       return
    //     }
    // });
  }
}
