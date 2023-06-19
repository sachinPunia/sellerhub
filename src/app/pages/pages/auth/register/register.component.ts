import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import icVisibility from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { UrlAPIService } from "src/app/services/url-api.service";
import { CountryList } from "src/app/services/country-list";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import { RegistrationsuccessComponent } from 'src/app/pages/apps/registrationsuccess/registrationsuccess.component'

@Component({
  selector: "vex-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  animations: [fadeInUp400ms],
})
export class RegisterComponent implements OnInit {
  countryList: CountryList[];

  form: FormGroup;
  selectCtrl: FormControl = new FormControl();
  inputType = "password";
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  name: string;
  lastname: string;
  email: string;
  password: string;
  country: string;
  phonenumber: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private urlApi: UrlAPIService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // this.openLinkedProductModal();
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      phonenumber: ["", Validators.required],
    });

    this.getCountryData();
  }

  registerNewUser() {
    if (this.name == "" || this.name == undefined) {
      this.snackbar.open("Please enter first name", "Ok", {
        duration: 10000,
      });
    } else if (this.email == "" || this.email == undefined) {
      this.snackbar.open("Please enter email address", "Ok", {
        duration: 10000,
      });
    } else if (this.password == "" || this.password == undefined) {
      this.snackbar.open("Please enter your password", "Ok", {
        duration: 10000,
      });
    }
    // else if(this.country == "" || this.country == undefined){
    //   this.snackbar.open('Please select your country', 'Ok', {
    //     duration: 10000
    //   });
    // }
    else if (this.phonenumber == "" || this.phonenumber == undefined) {
      this.snackbar.open("Please enter your phone number", "Ok", {
        duration: 10000,
      });
    } else {
      localStorage.setItem("userLoginName", this.name);
      localStorage.setItem("userLoginLastName", this.lastname);
      localStorage.setItem("userLoginEmail", this.email);
      localStorage.setItem("userLoginPass", this.password);
      localStorage.setItem("userLoginCountry", this.country);
      localStorage.setItem("userloginPhone", this.phonenumber);
      const data = {
        "code": "123",
        "companyName": "demo",
        "contactName": "vams",
        "country": this.country,
        "emailAddress": this.email,
        "firstName": this.name,
        "lastName": this.lastname,
        "password": this.password,
        "resellerid": 0,
        "telephone": this.phonenumber
      };
      this.urlApi.postRegistration(data).subscribe((successData: any) => {
        // debugger;
        // this.gotoLogin();
        // this.snackbar.open("Please check mail", "Ok", {
        //   duration: 10000,
        // });
        setTimeout(()=>{
            this.openLinkedProductModal();
          }, 1000);
      });
    }
  }

  gotoLogin() {
    // this.router.navigate(["/login"]);
  }
  getCountryData() {
    this.urlApi.getListCountry().subscribe((response) => {
      console.log(response);
      this.countryList = response;
    });
  }

  onCountryChange(e) {
    // debugger
    this.country = e;
  }

  send() {
    this.router.navigate(["/"]);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = "password";
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = "text";
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  getCountry() {}

  openLinkedProductModal(){
    this.dialog.open(RegistrationsuccessComponent, {
      width: '100%',
      maxWidth: 850
    })
  }
}
