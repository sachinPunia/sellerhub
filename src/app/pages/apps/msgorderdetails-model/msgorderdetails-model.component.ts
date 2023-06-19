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
import { MessageOrderDetails } from 'src/app/services/msgorderdetails';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-msgorderdetails-model',
  templateUrl: './msgorderdetails-model.component.html',
  styleUrls: ['./msgorderdetails-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MsgorderdetailsModelComponent implements OnInit {
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

  subject$: ReplaySubject<MessageOrderDetails[]> = new ReplaySubject<MessageOrderDetails[]>(1);
  data$: Observable<MessageOrderDetails[]> = this.subject$.asObservable();
  MessageOrderDetails: MessageOrderDetails[];

  @Input()
  columns: TableColumn<MessageOrderDetails>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Date', property: 'purchaseDate', type: 'button', visible: true },
    { label: 'Order ID', property: 'orderId', type: 'text', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Qty', property: 'quantityPurchased', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Item Total / Ship Cost', property: 'shiptotal', type: 'button', visible: true },
    { label: 'Ship Address', property: 'shipaddr', type: 'button', visible: true }
  ];

  
  pageSize = 1;
  pageSizeOptions: number[] = [1, 5, 10, 20, 50];

  dataSource: MatTableDataSource<MessageOrderDetails> | null;
  selection = new SelectionModel<MessageOrderDetails>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  // getVieworderdetails
  ngOnInit(): void {
    this.id = this.data.id;
    // console.log("downorder",this.is);
    this.urlApi.getMessageOrderDetails(this.id)
      .subscribe((MessageOrderDetails) => {
        this.subject$.next(MessageOrderDetails);
        console.log(MessageOrderDetails);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<MessageOrderDetails[]>(Boolean)
    ).subscribe(MessageOrderDetails => {
      this.MessageOrderDetails = MessageOrderDetails;
      this.dataSource.data = MessageOrderDetails;
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
