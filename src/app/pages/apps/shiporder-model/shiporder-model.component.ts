import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
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
// import { Shipordermodel } from 'src/app/services/Shipordermodel';
// import { Shipordermodel } from 'src/app/services/fullfilment-model';
// import { Shipordermodel } from 'src/app/services/fullfilment-model';
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
import { Shipordermodel } from 'src/app/services/shipordermodel';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'vex-shiporder-model',
  templateUrl: './shiporder-model.component.html',
  styleUrls: ['./shiporder-model.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
  
})
export class ShiporderModelComponent implements OnInit {

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

  subject$: ReplaySubject<Shipordermodel[]> = new ReplaySubject<Shipordermodel[]>(1);
  data$: Observable<Shipordermodel[]> = this.subject$.asObservable();
  Shipordermodel: Shipordermodel[];

  @Input()
  columns: TableColumn<Shipordermodel>[] = [
    //{ label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Buyer Item', property: 'buyerName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'SKU	', property: 'sku', type: 'text', visible: true },
    { label: 'Order Id', property: 'orderId', type: 'text', visible: true },
    { label: 'Tracking Id', property: 'trackingNumber', type: 'text', visible: true },
    { label: 'Carier', property: 'carrier', type: 'text', visible: true },
    { label: 'Shipping Method', property: 'shippingMethod', type: 'text', visible: true },
    { label: 'Serial Number', property: 'Serial_Number', type: 'text', visible: true },
    { label: 'Dispatch Date', property: 'dispatchDate', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Shipordermodel> | null;
  selection = new SelectionModel<Shipordermodel>(true, []);
  shippingCarrier;
  expShippingDetail;
  dispatchDate;
  shippingDetails;
  result: Shipordermodel[];
  shippingMethod="";
  shipDate;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
     this.urlApi.getShipOrderModel(this.data)
       .subscribe((Shipordermodel:any) => {
         try {
          this.result = Shipordermodel?.orders || [];
          //console.log("result", result);
          this.subject$.next(this.result);
          this.shippingDetails = Shipordermodel?.courierList || [];
          console.log("courierList",this.shippingDetails);
        } catch (err) {
          console.log("errr", err);
        }
     });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Shipordermodel[]>(Boolean)
    ).subscribe(Shipordermodel => {
      this.Shipordermodel = Shipordermodel;
      this.dataSource.data = Shipordermodel;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onShippingCarrierChange(e){
    this.shippingCarrier = e;
  }

  applyShippingCarrierDetails() {
    this.result = this.result.map((r: any)=> {
      r.carrier = this.shippingCarrier;
      return r;
    })
    this.subject$.next(this.result);
  }

  applyShippingMethod() {
    this.result = this.result.map((r: any) => {
      r.shippingMethod = this.shippingMethod;
      return r;
    });
    this.subject$.next(this.result);
  }

  exportShippingDetailsChange(e) {
    this.expShippingDetail = e;
  }

  applyExportShippingDet() {
 //TODO
  }
  applyShippingDates() {
    this.result = this.result.map((r: any) => {
      r.dispatchDate = moment(this.shipDate).format("YYYY/MM/DD");
      return r;
    });
    this.subject$.next(this.result);
  }

  confirmShipment() {
    console.log('dta', this.data)
    const body = {
      ids: this.data.ids,
      orderId: [this.data.orderId]
    }
    this.urlApi.postConfirmShipment(body).subscribe((successData: any) => {
    // open confirm modal
    });
  }
}