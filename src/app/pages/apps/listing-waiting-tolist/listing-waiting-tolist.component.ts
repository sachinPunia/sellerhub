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
import { Waitingtolist } from 'src/app/services/waitingtolist'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import faTimes from '@iconify/icons-fa-solid/times';


  // //Customers
  // cust_customerlist: '/Customers/list',

@Component({
  selector: 'vex-listing-waiting-tolist',
  templateUrl: './listing-waiting-tolist.component.html',
  styleUrls: ['./listing-waiting-tolist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingWaitingTolistComponent implements OnInit {

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
  faTimes = faTimes;

  subject$: ReplaySubject<Waitingtolist[]> = new ReplaySubject<Waitingtolist[]>(1);
  data$: Observable<Waitingtolist[]> = this.subject$.asObservable();
  waitingtolist: Waitingtolist[];

  @Input()
  columns: TableColumn<Waitingtolist>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Product ID', property: 'product_id', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Selling Price', property: 'selling_price', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'text', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'text', visible: true },
    { label: 'Listing Quantity', property: 'listing_quantity', type: 'text', visible: true },
    { label: 'Listing Status', property: 'listing_status', type: 'text', visible: true },
    { label: 'Modified Date', property: 'modified_date', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Waitingtolist> | null;
  selection = new SelectionModel<Waitingtolist>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getWaitingtolist("waitingtolist.json")
      .subscribe((waitingtolist) => {
        this.subject$.next(waitingtolist);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Waitingtolist[]>(Boolean)
    ).subscribe(waitingtolist => {
      this.waitingtolist = waitingtolist;
      this.dataSource.data = waitingtolist;
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
