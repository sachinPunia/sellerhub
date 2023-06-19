import { Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icRedeem from '@iconify/icons-ic/redeem';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-redeemcupon-modal',
  templateUrl: './redeemcupon-modal.component.html',
  styleUrls: ['./redeemcupon-modal.component.scss']
})
export class RedeemcuponModalComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icRedeem = icRedeem;
  couponCode;

  constructor(private urlApi: UrlAPIService,) { }

  ngOnInit(): void {
  }

  savaData(){
    console.log(this.couponCode);
    this.urlApi.postRedeemCoupon(this.couponCode).subscribe((couponcode: any) => {
      // let result: InvoicesData[] = subscription_invoice?.invoices || [];
      // result = result.map((r: any) => {
      //   r.name = r.amountDue === 0 ? "Invoice Paid" : "Invoice Due";
      //   return r;
      // });
      // this.subject_invoice$.next(result);
    });
  }

}
