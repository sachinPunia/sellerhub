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
// import { Cancelordermodel } from 'src/app/services/Cancelordermodel';
// import { Cancelordermodel } from 'src/app/services/fullfilment-model';
// import { Cancelordermodel } from 'src/app/services/fullfilment-model';
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
// import { Cancelordermodel } from 'src/app/services/Cancelordermodel';
import { Cancelordermodel } from 'src/app/services/cancelorder-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'vex-cancelorder-model',
  templateUrl: './cancelorder-model.component.html',
  styleUrls: ['./cancelorder-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CancelorderModelComponent implements OnInit {

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

  subject$: ReplaySubject<Cancelordermodel[]> = new ReplaySubject<Cancelordermodel[]>(1);
  data$: Observable<Cancelordermodel[]> = this.subject$.asObservable();
  Cancelordermodel: Cancelordermodel[];

  @Input()
  columns: TableColumn<Cancelordermodel>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Buyer Item', property: 'buyer_item', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Order Id', property: 'order_id', type: 'text', visible: true },
    { label: 'Cancel Reason	', property: 'cancel_reason', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Cancelordermodel> | null;
  selection = new SelectionModel<Cancelordermodel>(true, []);

  result: Cancelordermodel[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
      this.urlApi.getCancelordermodel(this.data.id)
    .subscribe((Cancelordermodel: any) => {
      try {
        this.result = Cancelordermodel || [];
        console.log("resultCancelordermodel", this.result);
        this.subject$.next(this.result);
        //this.shippingDetails = Cancelordermodel?.courierList || [];
        //console.log("courierList",this.shippingDetails);
      } catch (err) {
        console.log("err", err);
      }
  });
    
    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Cancelordermodel[]>(Boolean)
    ).subscribe(sales_orders => {
      this.Cancelordermodel = sales_orders;
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
