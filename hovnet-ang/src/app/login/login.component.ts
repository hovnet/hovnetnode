import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { GlobalVars } from '../common/Global-Vars';
import { PostService } from '../post.service';
import { HttpClient  } from '@angular/common/http';


@Component({ templateUrl: 'login.component.html'})   //'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    usr = "arik";
    pss = "Hh1h1h1h!";
    ipAddress = '';
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private service:PostService,
        private http:HttpClient
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.getIPAddress()
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        // debugger
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    data[0].ip = this.ipAddress;
                    GlobalVars.tuser = data[0];
                    GlobalVars.ShemMisrad = data[0].Name;
                    // console.log('ip    ',this.ipAddress);
                    // console.log('data    ',data);
                    // console.log('tuser    ',GlobalVars.tuser)
                    // GlobalVars.tuser.ip = this.ipAddress;
                    // debugger
                    // var ar = JSON.stringify(data);
                    // console.log('ar   ',ar)
                    
                //    debugger
                //    this.router.navigate([this.returnUrl]);
                // this.psEnternace(GlobalVars.tuser); //GlobalVars.tuser);
                this.psEnternace(data);

                   this.router.navigate(['**']);
                },
                error => {
                    // GlobalVars.tuser = data; defaulte global user

                    // debugger
                    this.error = error;
                    this.loading = false;
                });
    }

    psEnternace(currentuser:any){
        this.service.postEnternace(currentuser)
        .subscribe(response => {
          if(response != null){
        //   this.posts = response;
        //   console.log('response -->', this.posts);
        // debugger
        alert("כניסה נרשמה");
          }
          else{
            alert("תקלה בהתחברות");
            console.error('prolem with post Enternace');
          }
        });
        };

        getIPAddress ()
        {
            this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
            this.ipAddress = res.ip;
            return this.ipAddress;
            });
        }

        Glb(){
            return GlobalVars.ShemMisrad;
        }
    
}