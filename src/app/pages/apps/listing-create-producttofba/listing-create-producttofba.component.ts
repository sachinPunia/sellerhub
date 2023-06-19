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
import { Fabcreateproduct } from 'src/app/services/fab-createproducts'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-listing-create-producttofba',
  templateUrl: './listing-create-producttofba.component.html',
  styleUrls: ['./listing-create-producttofba.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingCreateProducttofbaComponent implements OnInit {

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

  subject$: ReplaySubject<Fabcreateproduct[]> = new ReplaySubject<Fabcreateproduct[]>(1);
  data$: Observable<Fabcreateproduct[]> = this.subject$.asObservable();
  fabcreateproduct: Fabcreateproduct[];

  @Input()
  columns: TableColumn<Fabcreateproduct>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image', type: 'text', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Selling Price', property: 'selling_price', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'text', visible: true },
    { label: 'Site', property: 'site', type: 'text', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'text', visible: true },
    { label: 'Listing Quantity', property: 'listing_quantity', type: 'text', visible: true },
    { label: 'Item ID', property: 'item_id', type: 'text', visible: true },
    { label: 'Listing Status', property: 'listing_status', type: 'text', visible: true },
    { label: 'Modified Date', property: 'modified_date', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Fabcreateproduct> | null;
  selection = new SelectionModel<Fabcreateproduct>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getFabcreateproduct("fab-createproducts.json")
      .subscribe((fabcreateproduct) => {
        this.subject$.next(fabcreateproduct);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Fabcreateproduct[]>(Boolean)
    ).subscribe(fabcreateproduct => {
      this.fabcreateproduct = fabcreateproduct;
      this.dataSource.data = fabcreateproduct;
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
