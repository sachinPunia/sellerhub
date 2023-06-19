import { Component, OnInit } from '@angular/core';
import icMail from '@iconify/icons-ic/mail-outline';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { EmaildialogueModelComponent } from 'src/app/pages/apps/emaildialogue-model/emaildialogue-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'vex-setting-email',
  templateUrl: './setting-email.component.html',
  styleUrls: ['./setting-email.component.scss']
})


export class SettingEmailComponent implements OnInit {
  inputType = 'password';
  icMail = icMail;
  constructor(private urlApi: UrlAPIService, private dialog: MatDialog) { }

  mailSetting;
  showSetting;

  smtHost;
  mailPort;
  smtpName;
  smtpPass;
  mailFrom;
  ngOnInit(): void {
    
    this.mailSetting = this.urlApi.getMailSetting().subscribe((mailconf) => {
      this.showSetting = mailconf['setting'];
      this.smtHost  = this.showSetting.smtpHost;
      this.mailPort = this.showSetting.smtpPort;
      this.smtpName = this.showSetting.smtpUserName;
      this.smtpPass = this.showSetting.smtpPassword;
      this.mailFrom = this.showSetting.fromEmail;
    });
    
  }

  openEmaildialogeModel(){
    this.dialog.open(EmaildialogueModelComponent, { 
      width: '100%',
      maxWidth: 850
     })
  }

  resetForm(){
    this.smtHost  = undefined
    this.mailPort = undefined
    this.smtpName = undefined
    this.smtpPass = undefined
    this.mailFrom = undefined
  }
  
  testconnection(){
    this.urlApi.getTestsmptcon().subscribe((testcon:any) => {
      // console.log("id", editatt);
      try{
        console.log("msg", testcon);
      }
      catch(err){
        console.log("errr",err);
      }
    });
  }




}
