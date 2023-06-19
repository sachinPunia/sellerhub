import { Component, OnInit } from '@angular/core';
// import { OtherModalComponent } from '../other-modal/other-modal.component';
import { OtherModelComponent } from '../other-model/other-model.component';
import { MatDialog } from "@angular/material/dialog";
import { UrlAPIService } from 'src/app/services/url-api.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'vex-createorderpage',
  templateUrl: './createorderpage.component.html',
  styleUrls: ['./createorderpage.component.scss']
})
export class CreateorderpageComponent implements OnInit {

  customerName : any;
  buyerEmail : any;
  shipPhoneNumber : any;
  billingAddressLine1 : any;
  billingAddressLine2 : any;
  billingAddressLine3 : any;
  billingAddressCity : any;
  billingAddressState : any;
  billingAddressPostcode : any;
  billingAddressCountryCode : any;
  shipAddress1 : any;
  shipAddress2 : any;
  shipAddress3 : any;
  shipCity : any;
  shipState : any;
  shipPostalCode : any;
  shipCountryCode : any;
  shippingchargeid : any;
  shippingserviceid : any;
  createordershippingmethodid : any;
  paymentMethodList : any;
  otherPaymentValue : any;
  paymentStatus : any;

  constructor(
    private dialog: MatDialog,
    public urlAPIService : UrlAPIService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }

  openSearchModal(type) {
    const dialogRef = this.dialog.open(OtherModelComponent, {
      width: "100%",
      maxWidth: 950,
      data: {
        type: type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.data && result.data.length > 0){
        let getData = result.data[0];
        this.customerName = getData['firstName'];
        this.buyerEmail = getData['email'];
        this.shipPhoneNumber = getData['phone'];
        this.billingAddressLine1 = getData['billingAddressline1'];
        this.billingAddressLine2 = getData['billingAddressline2'];
        this.billingAddressLine3 = getData['billingAddressline3'];
        this.billingAddressCity = getData['billingCity'];
        this.billingAddressState = getData['billingState'];
        this.billingAddressPostcode = getData['billingPostcode'];

        this.billingAddressCountryCode = getData['billingCountryCode'] ? getData['billingCountryCode'].toString() : '';
        this.shipAddress1 = getData['addressline1'];
        this.shipAddress2 = getData['addressline2'];
        this.shipAddress3 = getData['addressline3'];
        this.shipCity = getData['city'];
        this.shipState = getData['state'];
        this.shipPostalCode = getData['postcode'];
        this.shipCountryCode = getData['countryCode'] ? getData['countryCode'].toString() : "";
       
      }
      //this.dialogValue = result.data;
    });
  }


  createOrder(){
    this.urlAPIService.postHTTPResponseWithToken("/new/createorder",{
      id : 236,
      channel: 558
    }).subscribe((searchData:any) => {
        // this.subject$.next(createorder);
        try{
          console.log("temp--", searchData);
          //this.apiCallDone = true;
          //this.dataSource = this.searchArray;
          //this.closeDialog(getData);
          this.router.navigateByUrl('apps/sales-orders');
        }
        catch(err){
          //this.apiCallDone = true;
          //this.closeDialog(getData);
          //console.log("errr",err);
        }
    });
    this.router.navigateByUrl('apps/sales-orders');
  }

}