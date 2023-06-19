import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import { Observable, ReplaySubject } from 'rxjs';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { MessageOrderDetails } from 'src/app/services/msgorderdetails';

@Component({
  selector: 'vex-viewmessage-modal',
  templateUrl: './viewmessage-modal.component.html',
  styleUrls: ['./viewmessage-modal.component.scss']
})
export class ViewmessageModalComponent implements OnInit {
  id: string;
  ids: string;
  subject: string;
  from: string;
  msgtext: string;
  date: string;
  channel: string;
  reply: string;

  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private urlApi: UrlAPIService) { }

  // subject$: ReplaySubject<MessageOrderDetails[]> = new ReplaySubject<MessageOrderDetails[]>(1);

  ngOnInit(): void {
    this.id = this.data.id;
    this.urlApi.getMessageDetails(this.id)
      .subscribe((msgdetail:any) => {
        // this.subject$.next(msgdetail);
        console.log(msgdetail);
        try {
          // const result: Stockview[] = stockview?.products || [];
          // console.log("result", result);
          // this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
    this.ids = this.data.ids;
    this.subject = this.data.msg_subject;
    this.from = this.data.msg_from;
    this.msgtext = this.data.msgtext;
    this.date = this.data.date;
    this.channel = this.data.date;
    this.channel = this.data.channel;
    // this.reply = this.data.reply;
    if(this.data.reply === false){
      this.reply = 'Not Replied';
    }
    else{
      this.reply = 'Replied';
    }
  }

}
