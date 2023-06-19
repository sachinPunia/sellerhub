import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import { UrlAPIService } from "src/app/services/url-api.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-changeadminemail-model',
  templateUrl: './changeadminemail-model.component.html',
  styleUrls: ['./changeadminemail-model.component.scss']
})
export class ChangeadminemailModelComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;

  id;
  uemail;
  newpass;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    this.uemail = this.data.uemail;
    //  this.kartid = this.data.kartid;
    // this.urlApi.getUseredit(this.id, this.kartid).subscribe((edituser:any) => {
    //   const result: any = edituser?.subUser || [];
    //   console.log("edituser", result);
    //   this.uname = result['name'];
    //   this.uemail = result['emailAddress']
    //   // this.toCur = result['currency'];
    //   // console.log('accountsetting', this.toCur);
    // });

    console
  }

  saveEmail(){
    const data = {
      "password": this.newpass,
      "emailAddress": this.uemail,
      // "country": this.country,
    };
    this.urlApi.postChangeAdminmail(data).subscribe((successData: any) => {
      // debugger;
      // this.gotoLogin();
      // this.snackbar.open("Please check mail", "Ok", {
      //   duration: 10000,
      // });
      console.log(successData);
      setTimeout(()=>{
          // this.openLinkedProductModal();
        }, 1000);
    });
  }

}
