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
import { Schedulelisting } from 'src/app/services/schedulelisting'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-listing-channel-schedule',
  templateUrl: './listing-channel-schedule.component.html',
  styleUrls: ['./listing-channel-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingChannelScheduleComponent implements OnInit {

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

  subject$: ReplaySubject<Schedulelisting[]> = new ReplaySubject<Schedulelisting[]>(1);
  data$: Observable<Schedulelisting[]> = this.subject$.asObservable();
  schedulelisting: Schedulelisting[];

  @Input()
  columns: TableColumn<Schedulelisting>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image', type: 'text', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Selling Price', property: 'selling_price', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'text', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'text', visible: true },
    { label: 'Listing Quantity', property: 'listing_quantity', type: 'text', visible: true },
    { label: 'Schedule Time', property: 'schedule_time', type: 'text', visible: true },
    { label: 'Listing Status', property: 'listing_status', type: 'text', visible: true },
    { label: 'Update Time', property: 'update_time', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Schedulelisting> | null;
  selection = new SelectionModel<Schedulelisting>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getSchedulelisting("schedulelisitng.json")
      .subscribe((schedulelisting) => {
        this.subject$.next(schedulelisting);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Schedulelisting[]>(Boolean)
    ).subscribe(schedulelisting => {
      this.schedulelisting = schedulelisting;
      this.dataSource.data = schedulelisting;
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
