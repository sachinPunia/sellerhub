import { Component, OnInit } from '@angular/core';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { Channelproductmodel } from 'src/app/services/channelproduct-modal'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vex-dpdlabelsetup',
  templateUrl: './dpdlabelsetup.component.html',
  styleUrls: ['./dpdlabelsetup.component.scss']
})
export class DpdlabelsetupComponent implements OnInit {


  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icSearch = icSearch;
  icRefresh = icRefresh;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;

  result;
  id;
  toCustid;
  toUserid;

  form: FormGroup;
  selectCtrl: FormControl = new FormControl();

  
  constructor(private urlApi: UrlAPIService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      // alert(this.id);
      // this.tknexp = params["tknexp"];
    });

    this.urlApi.getShippingCourierfind(this.id).subscribe((response:any) => {
      console.log(response);
      this.result = response?.shippingRules.dpdDetails || [];
      this.toCustid = this.result['dpdCustomerId'];
      this.toUserid = this.result['dpdUserName'];
      
      debugger;
    });
    // this.generatetoken();
  }

  // subject$: ReplaySubject<EbayToken[]> = new ReplaySubject<EbayToken[]>(1);

  // generatetoken(){
  //   this.urlApi.getShippingCourierfind(this.id).subscribe(() => {},(response:any) => {
  //     console.log(response);
  //     this.result = response;
  //     debugger;
      
  //   });
  // }

}
