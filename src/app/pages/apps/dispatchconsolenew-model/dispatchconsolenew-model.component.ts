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
// import { Dispatchconsolenew } from 'src/app/services/downloadorder-model';
import { Dispatchconsolenew } from 'src/app/services/dispatchconsolenew-model';
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
import icAddcircle from '@iconify/icons-ic/add-circle';
import icUparrow from '@iconify/icons-ic/keyboard-arrow-up';
import faPrint from '@iconify/icons-fa-solid/print';
import faTruck from '@iconify/icons-fa-solid/truck';

@Component({
  selector: 'vex-dispatchconsolenew-model',
  templateUrl: './dispatchconsolenew-model.component.html',
  styleUrls: ['./dispatchconsolenew-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DispatchconsolenewModelComponent implements OnInit {

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
  icAddcircle = icAddcircle;
  icUparrow = icUparrow;
  faPrint = faPrint;
  faTruck = faTruck;

  subject$: ReplaySubject<Dispatchconsolenew[]> = new ReplaySubject<Dispatchconsolenew[]>(1);
  data$: Observable<Dispatchconsolenew[]> = this.subject$.asObservable();
  Dispatchconsolenew: Dispatchconsolenew[];

  @Input()
  columns: TableColumn<Dispatchconsolenew>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Order No', property: 'order_no', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Channel', property: 'channel', type: 'image', visible: true },
    { label: 'Product', property: 'product', type: 'text', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Order Date', property: 'order_date', type: 'text', visible: true },
    { label: 'Customer', property: 'customer', type: 'text', visible: true },
    { label: 'Amount', property: 'amount', type: 'text', visible: true },
    { label: 'Stock QTY', property: 'stock_qty', type: 'text', visible: true },
    { label: 'Shipping', property: 'shipping', type: 'text', visible: true },
    // { label: 'Attachments', property: 'attachments', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Dispatchconsolenew> | null;
  selection = new SelectionModel<Dispatchconsolenew>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getDispatchconsolenewmodel("dispatchconsolenew-model.json")
      .subscribe((Dispatchconsolenew) => {
        this.subject$.next(Dispatchconsolenew);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Dispatchconsolenew[]>(Boolean)
    ).subscribe(Dispatchconsolenew => {
      this.Dispatchconsolenew = Dispatchconsolenew;
      this.dataSource.data = Dispatchconsolenew;
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
