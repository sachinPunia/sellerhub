import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-phonesupport-modal',
  templateUrl: './phonesupport-modal.component.html',
  styleUrls: ['./phonesupport-modal.component.scss']
})
export class PhonesupportModalComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  toName;
  toEmail;
  toNumber;
  toQuery;

  constructor(private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    this.urlApi.getPhoneSupport('','','','')
      .subscribe((ticket:any) => {
        // this.subject$.next(msgdetail);
        console.log(ticket);

        this.toName = ticket['name'];
        this.toEmail = ticket['emailaddress'];
        this.toNumber = ticket['phone'];
    });
  }

  saveTicket(){
    this.urlApi.getPhoneSupport(this.toName,this.toEmail,this.toNumber,this.toQuery)
      .subscribe((ticketmsg:any) => {
        // console.log(ticketmsg.text);
        // alert('Successfully Sent');
    });
  }

}
