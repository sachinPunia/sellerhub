import { Component, OnInit, Inject, Optional } from '@angular/core';
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
import { UrlAPIService } from 'src/app/services/url-api.service';
import { MatTableDataSource } from '@angular/material/table';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  email: string;
  id: any
}

export interface product {
  firstName: string;
  lastName: string;
  email: string;
  id: any
}


@Component({
  selector: 'vex-other-model',
  templateUrl: './other-model.component.html',
  styleUrls: ['./other-model.component.scss']
})
export class OtherModelComponent implements OnInit {
  //@Inject(MatDialog) public data: any
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  public searchValue : any = "";

  public dataSource: MatTableDataSource<PeriodicElement>
  public dataSource2: MatTableDataSource<product>
  displayedColumns: string[] = ['firstName', 'lastName', 'email','actions'];
  public searchArray : any = []
  //dataSource = ELEMENT_DATA;
  
  public color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  apiCallDone : boolean = false;
  searchFullData : any = [];

  constructor(
   public urlApi : UrlAPIService,
   public dialogRef: MatDialogRef<OtherModelComponent>,
   @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log('data',data);
  }

  ngOnInit(): void {
    //   this.urlApi.getSearchData()
    //   .subscribe((searchData:any) => {
    //     // this.subject$.next(createorder);
    //     try{
    //       console.log("temp2222", searchData);
    //       for (const searchDatas of searchData) {
    //         this.searchArray.push({
    //           firstName : searchDatas.firstName,
    //           lastName : searchDatas.lastName,
    //           email : searchDatas.email
    //         })
    //       }
    //       this.dataSource = this.searchArray;
    //     }
    //     catch(err){
    //       console.log("errr",err);
    //     }
    // });
    this.searchData();
  }


  searchData(){
    this.apiCallDone = false;
    this.searchArray = [];
    this.urlApi.getSearchData(this.searchValue)
      .subscribe((searchData:any) => {
        // this.subject$.next(createorder);
        this.searchFullData = searchData;
        try{
          console.log("temp2222", searchData);
          for (const searchDatas of searchData) {
            this.searchArray.push({
              firstName : searchDatas.firstName,
              lastName : searchDatas.lastName,
              email : searchDatas.email,
              id : searchDatas.id
            })
          }
          this.apiCallDone = true;
          this.dataSource = this.searchArray;
        }
        catch(err){
          this.apiCallDone = true;
          console.log("errr",err);
        }
    });
  }

  selectData(selectData){
    console.log("selectData",selectData);
    let getData = this.searchFullData.filter(e => e.id == selectData.id);
    console.log('getData',getData);
    this.closeDialog(getData);
    this.urlApi.postHTTPResponseWithToken("/new/updatecustomerfororder",{
      customerId : 159,
      id: 236
    }).subscribe((searchData:any) => {
        // this.subject$.next(createorder);
        try{
          console.log("temp--", searchData);
          //this.apiCallDone = true;
          this.dataSource = this.searchArray;
          this.closeDialog(getData);
        }
        catch(err){
          //this.apiCallDone = true;
          this.closeDialog(getData);
          console.log("errr",err);
        }
    });
    
    //updatecustomerfororder
  }

  closeDialog(getData) {
    this.dialogRef.close({ event: 'close', data: getData });
  }

  

}