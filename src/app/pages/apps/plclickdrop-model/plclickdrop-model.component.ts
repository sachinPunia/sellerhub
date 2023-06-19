import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
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
// import { PRMmodel } from 'src/app/services/PRMmodel';
// import { PRMmodel } from 'src/app/services/fullfilment-model';
// import { PRMmodel } from 'src/app/services/fullfilment-model';
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
import { PRMmodel } from 'src/app/services/prmmodel';



@Component({
  selector: 'vex-plclickdrop-model',
  templateUrl: './plclickdrop-model.component.html',
  styleUrls: ['./plclickdrop-model.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PlclickdropModelComponent implements OnInit {

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

  subject$: ReplaySubject<PRMmodel[]> = new ReplaySubject<PRMmodel[]>(1);
  data$: Observable<PRMmodel[]> = this.subject$.asObservable();
  PRMmodel: PRMmodel[];

  @Input()
  columns: TableColumn<PRMmodel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Buyer Item', property: 'buyeritem', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Order Id', property: 'orderId', type: 'text', visible: true },
    { label: 'Carrier	', property: 'carrier', type: 'button', visible: true },
    { label: 'Shipping Method	', property: 'shippingMethod1', type: 'button', visible: true },
    { label: 'Service Format', property: 'serviceFormat', type: 'button', visible: true },

    { label: 'Tracking Id', property: 'trkid', type: 'button', visible: true },
    { label: 'Item Weight', property: 'shippingmethod', type: 'button', visible: true },
    { label: 'Item Dimensions', property: 'dispatchdate', type: 'button', visible: true },
    { label: 'Dispatch Date	', property: 'date', type: 'button', visible: true },
    { label: 'Label	', property: 'label', type: 'text', visible: true },
    { label: 'Errors	', property: 'error', type: 'text', visible: true },

    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<PRMmodel> | null;
  selection = new SelectionModel<PRMmodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
   
    this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000',null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: PRMmodel[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        // this.totQty = sales_orders['totalDistinctitems']

        // this.toID = result["id"];
        // console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<PRMmodel[]>(Boolean)
    ).subscribe(sales_orders => {
      this.PRMmodel = sales_orders;
      this.dataSource.data = sales_orders;
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
}
