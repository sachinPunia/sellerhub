import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icCamera from '@iconify/icons-ic/twotone-camera';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { UrlAPIService } from 'src/app/services/url-api.service';
import icMail from '@iconify/icons-ic/sharp-mail-outline';
import icCheck from '@iconify/icons-ic/check-circle';
import { MatDialog } from "@angular/material/dialog";
import { ChangeadminemailModelComponent } from 'src/app/pages/apps/changeadminemail-model/changeadminemail-model.component'; 

@Component({
  selector: 'vex-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MyAccountComponent implements OnInit {
  inputType = 'password';
  visible = false;

  form: FormGroup;
  selectCtrl: FormControl = new FormControl();

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  name: string;
  email: string;
  password: string;
  country: string;
  phonenumber: string;

  icPhone = icPhone;
  icCamera = icCamera;
  icMenu = icMenu;
  icArrowDropDown = icArrowDropDown;
  icSmartphone = icSmartphone;
  icPerson = icPerson;
  icMoreVert = icMoreVert;
  icMail = icMail;
  icCheck = icCheck;
  
  countryList;

  companyName;
  addressOne;
  addressTwo;
  city;
  state;
  zipcode;
  phoneNumber;
  adminEmail;
  vatReg;
  vatRegNumber;
  countrySet;
  countrySelect;

  accountSetting;
  showAccount;
  tocurrency;
  vatregistered:boolean = false;
  //constructor(private cd: ChangeDetectorRef, private fb: FormBuilder,  private urlApi: UrlAPIService) {
  constructor(private urlApi: UrlAPIService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAccountStting();
    // console.log(this.vatregistered);
    /**
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phonenumber: ['', Validators.required],
    });
    */
  }

  getAccountStting() {
    this.accountSetting = this.urlApi.getAccountSetting().subscribe((accountset) => {
      this.showAccount  = accountset['kartzhubUser'];
      this.countryList  = accountset['countrylist'];
      this.companyName = this.showAccount.companyName;
      this.addressOne  = this.showAccount.address1;
      this.addressTwo  = this.showAccount.address2;
      this.city        = this.showAccount.city;
      this.state       = this.showAccount.state;
      this.zipcode     = this.showAccount.zipCode;
      this.phoneNumber = this.showAccount.phoneNumber;
      this.adminEmail  = this.showAccount.emailAddress;
      this.vatRegNumber = this.showAccount.vatnumber;
      this.countrySet = this.showAccount.country;
      this.tocurrency = this.showAccount.currency;
    });
  }

  togglePassword() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      //this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      //this.cd.markForCheck();
    }
  }

  onSearchByCountry(e){
    this.countrySelect = e;
    console.log(this.countrySelect);
  }

  vatcheck(e){
    this.vatregistered = e.checked;
    // console.log(this.vatregistered);
    // console.log(this.tocurrency);
  }

  saveData(){
    const data = {
      "currency": this.tocurrency,
      "companyName": this.companyName,
      "address1": this.addressOne,
      "address2": this.addressTwo,
      "city": this.city,
      "state": this.state,
      "zipCode": this.zipcode,
      "country": this.countrySelect,
      "phoneNumber": this.phoneNumber,
      "vatnumber": this.vatRegNumber,
      "vatregistered": this.vatregistered
    };
    this.urlApi.postGeneralDetails(data).subscribe((successData: any) => {
      // debugger;
      // this.gotoLogin();
      // this.snackbar.open("Please check mail", "Ok", {
      //   duration: 10000,
      // });
      alert('success');
      setTimeout(()=>{
          // this.openLinkedProductModal();
        }, 1000);
    });
  }

  openChangeadminmailModal() {
    this.dialog.open(ChangeadminemailModelComponent, {
      width: "100%",
      maxWidth: 600,
      data: { uemail: this.adminEmail }
    });
  }

}
