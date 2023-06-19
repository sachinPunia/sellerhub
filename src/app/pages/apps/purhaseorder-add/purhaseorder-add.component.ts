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
import { Stockview } from 'src/app/services/stockview';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import { MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/close';

import { ViewModelComponent } from 'src/app/pages/apps/view-model/view-model.component';

@Component({
  selector: 'vex-purhaseorder-add',
  templateUrl: './purhaseorder-add.component.html',
  styleUrls: ['./purhaseorder-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PurhaseorderAddComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  icClose = icClose;

  subject$: ReplaySubject<Stockview[]> = new ReplaySubject<Stockview[]>(1);
  data$: Observable<Stockview[]> = this.subject$.asObservable();
  stockview: Stockview[];

  @Input()
  columns: TableColumn<Stockview>[] = [
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Title', property: 'title', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Price', property: 'price', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Current Quantity', property: 'qty', type: 'text', visible: true },
    { label: 'Supplier', property: 'supplier', type: 'text', visible: true },
    { label: 'Order History', property: 'order_history', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Stockview> | null;
  selection = new SelectionModel<Stockview>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getStockview(1,100,100,'0','','','','','', false)
      .subscribe((stockview:any) => {
        // this.subject$.next(stockview);
        try {
          const result: Stockview[] = stockview?.products || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Stockview[]>(Boolean)
    ).subscribe(stockview => {
      this.stockview = stockview;
      this.dataSource.data = stockview;
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

  openViewModal(){
    this.dialog.open(ViewModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

}
