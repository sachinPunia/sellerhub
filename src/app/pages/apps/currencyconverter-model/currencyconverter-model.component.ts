import { Component, OnInit } from '@angular/core';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
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
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';
import faUpload from '@iconify/icons-fa-solid/upload';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-currencyconverter-model',
  templateUrl: './currencyconverter-model.component.html',
  styleUrls: ['./currencyconverter-model.component.scss']
})
export class CurrencyconverterModelComponent implements OnInit {

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
  faUpload = faUpload;
  searchBy;

  constructor(private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    // getCurrencyValue
    
  }

  onSearchByChange(e) {
    this.searchBy = e;

    this.urlApi.getCurrencyValue(this.searchBy)
      .subscribe((tocur:any) => {
        // this.subject$.next(stockview);
        try {
          console.log(tocur);
          // const result: Stockview[] = stockview?.products || [];
          // console.log("result", result);
          // this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
  }
  

}
