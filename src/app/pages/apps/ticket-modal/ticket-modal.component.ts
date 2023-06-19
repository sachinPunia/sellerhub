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
  selector: 'vex-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.scss']
})
export class TicketModalComponent implements OnInit {
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
    this.urlApi.getCreateTicket('','','','')
      .subscribe((ticket:any) => {
        // this.subject$.next(msgdetail);
        console.log(ticket);

        this.toName = ticket['name'];
        this.toEmail = ticket['emailaddress'];
        this.toNumber = ticket['phone'];
    });
  }

  saveTicket(){
    this.urlApi.getCreateTicket(this.toName,this.toEmail,this.toNumber,this.toQuery)
      .subscribe((ticketmsg:any) => {
        alert('Successfully Sent');
    });
  }

}
