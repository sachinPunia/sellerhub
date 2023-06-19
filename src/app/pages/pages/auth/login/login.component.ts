import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icSign from '@iconify/icons-ic/twotone-log-in';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  email: string;
  password: string;
  icSign = icSign;
  isLoading = false;
  userLoginName: string;
  userLoginLastname: string;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private urlApi: UrlAPIService
  ) {}

  ngOnInit() {
    this.isLoading = false;
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    this.router.navigate(['/']);
  }

  signinUser(){
    var userStorage = localStorage.getItem('userLoginEmail');
    var passStorage = localStorage.getItem('userLoginPass');
    if(this.email == "" || this.email == undefined){
      this.snackbar.open('Please enter your email', 'Try Again', {
        duration: 10000
      });
    }
    else if(this.password == "" || this.password == undefined){
      this.snackbar.open('Please enter your password', 'Try Again', {
        duration: 10000
      });
      
    }
    else{
      this.isLoading = true;
      this.urlApi.userAuth(this.email, this.password);
      setTimeout(() => {
        this.isLoading = true;
      }, 500);

      this.urlApi.getAccountSettings().subscribe((userData:any) => {
        const result = userData?.kartzhubUser || [];
        // console.log('userdata',result);
  
        this.userLoginName = result['firstName'];
        this.userLoginLastname = result['lastName'];
        // console.log('name',this.userLoginName);
  
        localStorage.setItem("userLoginFirstName", this.userLoginName);
        localStorage.setItem("userLoginLastName", this.userLoginLastname);
  
      });
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
