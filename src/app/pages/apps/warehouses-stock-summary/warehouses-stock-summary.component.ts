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
import { Stocksummary } from 'src/app/services/stocksummary'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-warehouses-stock-summary',
  templateUrl: './warehouses-stock-summary.component.html',
  styleUrls: ['./warehouses-stock-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class WarehousesStockSummaryComponent implements OnInit {

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

  subject$: ReplaySubject<Stocksummary[]> = new ReplaySubject<Stocksummary[]>(1);
  data$: Observable<Stocksummary[]> = this.subject$.asObservable();
  stocksummary: Stocksummary[];

  @Input()
  columns: TableColumn<Stocksummary>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Title', property: 'title', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Price', property: 'price', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Current Quantity', property: 'cur_qty', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Stocksummary> | null;
  selection = new SelectionModel<Stocksummary>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getStocksummary("stocksummary.json")
      .subscribe((stocksummary) => {
        this.subject$.next(stocksummary);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Stocksummary[]>(Boolean)
    ).subscribe(stocksummary => {
      this.stocksummary = stocksummary;
      this.dataSource.data = stocksummary;
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
