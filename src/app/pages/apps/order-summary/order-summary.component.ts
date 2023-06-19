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
import { OrderSummary } from 'src/app/services/order-summary';
import { Link } from 'src/@vex/interfaces/link.interface';

@Component({
  selector: 'vex-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class OrderSummaryComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;

  subject$: ReplaySubject<OrderSummary[]> = new ReplaySubject<OrderSummary[]>(1);
  data$: Observable<OrderSummary[]> = this.subject$.asObservable();
  ordersummary: OrderSummary[];

  @Input()
  columns: TableColumn<OrderSummary>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Channel Name', property: 'channel', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Channel', property: 'channelType', type: 'text', visible: true },
    { label: 'Order Status', property: 'status', type: 'text', visible: true },
    { label: 'No Of Orders', property: 'count', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<OrderSummary> | null;
  selection = new SelectionModel<OrderSummary>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  links: Link[] = [
    {
      label: 'Orders Summary',
      route: '../order-summary'
    },
    {
      label: 'Sales Orders',
      route: '../sales-orders'
    },
    {
      label: 'MCF Orders',
      route: '../mcf-orders'
    }
  ];

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getOrderSummary()
      .subscribe((ordersummary:any) => {
        this.subject$.next(ordersummary);
        console.log("summ", ordersummary);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<OrderSummary[]>(Boolean)
    ).subscribe(ordersummary => {
      this.ordersummary = ordersummary;
      this.dataSource.data = ordersummary;
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
