import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
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
// import { Fullfilmentmodel } from 'src/app/services/Fullfilmentmodel';
import { Fullfilmentmodel } from 'src/app/services/fullfilment-model';
// import { Fullfilmentmodel } from 'src/app/services/fullfilment-model';
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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'vex-fullfilment-model',
  templateUrl: './fullfilment-model.component.html',
  styleUrls: ['./fullfilment-model.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
  
})
export class FullfilmentmodelComponent implements OnInit {


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
  id;

  subject$: ReplaySubject<Fullfilmentmodel[]> = new ReplaySubject<Fullfilmentmodel[]>(1);
  data$: Observable<Fullfilmentmodel[]> = this.subject$.asObservable();
  Fullfilmentmodel: Fullfilmentmodel[];

  @Input()
  columns: TableColumn<Fullfilmentmodel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Buyer Item', property: 'buyeritem', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'SKU	', property: 'sku', type: 'text', visible: true },
    { label: 'Order Id', property: 'orderid', type: 'text', visible: true },
    { label: '	Fulfilment SKU', property: 'fulfilmentsku', type: 'text', visible: true },

    { label: '	Tracking Id', property: 'trkid', type: 'text', visible: true },
    { label: 'Shipping Method', property: 'shippingmethod', type: 'text', visible: true },
    { label: 'Dispatch Date', property: 'dispatchdate', type: 'text', visible: true },

    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Fullfilmentmodel> | null;
  selection = new SelectionModel<Fullfilmentmodel>(true, []);

  result: Fullfilmentmodel[];
  fulfillmentNtwrk;
  fulfillmentOrder;
  carrierDetails;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.id = this.data.orderid;
    console.log("downorder",this.id);

    this.urlApi.findOrdersForShipmentByFba(this.data).subscribe((response: any) => {
      console.log("findOrdersForShipmentByFba", response);
      // this.subject$.next(sales_orders);
      try {
        this.result = response?.orders || [];
        console.log("result", this.result);
        this.subject$.next(this.result);
        this.fulfillmentNtwrk = response?.fulfilmentchannels || [];
      } catch (err) {
        console.log("errr", err);
      }
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

  onFulfillmentOrderChange(e) {
    this.fulfillmentOrder = e;
  }

  applyFulFillmentOrder() {
    this.result = this.result.map((r: any)=> {
      r.fulfilmentsku = this.fulfillmentOrder;
      return r;
    })
    this.subject$.next(this.result);
  }

  onApplyCarrierDetails(e) {
    this.carrierDetails = e;
  }

  applyCarrierDetails() {
    this.result = this.result.map((r: any)=> {
      r.shippingmethod = this.carrierDetails;
      return r;
    })
    this.subject$.next(this.result);
  }

  previewFbaOrders() {
    const body = {
      ids: this.data.ids,
      orderId: [Number(this.data.orderId)]
    }
    const centerid = 231;
    this.urlApi.postPreviewFbaOrders(body, centerid).subscribe((successData: any) => {
      //open modal
    });
  }
  
  sendToFba() {
    const body = {
      ids: this.data.ids,
      orderId: [Number(this.data.orderId)]
    }
    this.urlApi.confirmShipmentViaFba(body).subscribe((successData: any) => {
      try {
        this.urlApi.findUnshippedOrders().subscribe((success: any) => {
          // TODO
        })
      } catch (err) {
        console.log("errr", err);
      }
    });
  }
}
