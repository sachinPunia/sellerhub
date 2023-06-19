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
import { Fabproductinfba } from 'src/app/services/fab-productinfba'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-listing-product-in-fba',
  templateUrl: './listing-product-in-fba.component.html',
  styleUrls: ['./listing-product-in-fba.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingProductInFbaComponent implements OnInit {

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

  subject$: ReplaySubject<Fabproductinfba[]> = new ReplaySubject<Fabproductinfba[]>(1);
  data$: Observable<Fabproductinfba[]> = this.subject$.asObservable();
  fabproductinfba: Fabproductinfba[];

  @Input()
  columns: TableColumn<Fabproductinfba>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Fulfillment Channel SKU', property: 'channel_sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Seller SKU', property: 'seller_sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'ASIN', property: 'asin', type: 'text', visible: true },
    { label: 'Fulfillment Center', property: 'center', type: 'text', visible: true },
    { label: 'Available Quantity', property: 'quantity', type: 'text', visible: true },
    { label: 'Condition Type', property: 'type', type: 'text', visible: true },
    { label: 'Warehouse Condition', property: 'warehouse_condition', type: 'text', visible: true },
    { label: 'Last Update Time', property: 'last_update', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Fabproductinfba> | null;
  selection = new SelectionModel<Fabproductinfba>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getFabproductinfba("fab-productinfba.json")
      .subscribe((fabproductinfba) => {
        this.subject$.next(fabproductinfba);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Fabproductinfba[]>(Boolean)
    ).subscribe(fabproductinfba => {
      this.fabproductinfba = fabproductinfba;
      this.dataSource.data = fabproductinfba;
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
