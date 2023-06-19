import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import { Icon } from '@visurel/iconify-angular';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icBack from '@iconify/icons-fa-solid/arrow-circle-left';
import icBeenhere from '@iconify/icons-ic/twotone-beenhere';
import icStars from '@iconify/icons-ic/twotone-star';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';
import { Router } from '@angular/router';
import { UrlAPIService } from "src/app/services/url-api.service";
import { ReplaySubject } from "rxjs";
import { SubscriptionscancelModelComponent } from 'src/app/pages/apps/subscriptionscancel-model/subscriptionscancel-model.component'; 


@Component({
  selector: 'vex-subscription-modal',
  templateUrl: './subscription-modal.component.html',
  styleUrls: ['./subscription-modal.component.scss']
})
export class SubscriptionModalComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icBeenhere = icBeenhere;
  icStars = icStars;
  icBack = icBack;
  icBusinessCenter = icBusinessCenter;
  toCur;
  toName;
  toPrice;
  toUserlimit;
  toSub;


  subject$: ReplaySubject<SubscriptionscancelModelComponent[]> = new ReplaySubject<SubscriptionscancelModelComponent[]>(1);

  constructor(private router: Router, private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    this.urlApi.getAccountSettings().subscribe((accountset:any) => {
      const result: any = accountset?.kartzhubUser || [];
      // console.log("result", result);
      this.toCur = result['currency'];
      console.log('accountsetting', this.toCur);
    });

    this.urlApi.getSubscriptionPlan(this.toCur,'',false,true).subscribe((subplan: any) => {
      // this.subject$.next(subscription);
      console.log('subplan',subplan);
      try {
      //   console.log("subscription", subscription);
        const result: any = subplan?.subscriptions || [];
        console.log("result", result);
        this.toSub = result;
        // this.subject$.next(result);
        // debugger;
        // this.toUserlimit = result[0].userlimit;
        // console.log('userlimit', this.toUserlimit)
        // this.toPrice = result[0].price ;
        // this.toName = result[0].name ;
        // debugger;

      //   this.subject$.next(result);
      //   this.isActive = result[0].status;
      //   this.isMember = result[0].createDate;
      //   // debugger;
      } catch (err) {
        console.log("errr", err);
      }
    });
  }

  goBack() {
    this.router.navigate(['apps/subscription']);
  }

}
