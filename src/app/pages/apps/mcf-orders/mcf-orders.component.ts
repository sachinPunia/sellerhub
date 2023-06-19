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
import { McfOrder } from 'src/app/services/mcf-orders';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-mcf-orders',
  templateUrl: './mcf-orders.component.html',
  styleUrls: ['./mcf-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class McfOrdersComponent implements OnInit {

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

  subject$: ReplaySubject<McfOrder[]> = new ReplaySubject<McfOrder[]>(1);
  data$: Observable<McfOrder[]> = this.subject$.asObservable();
  mcf_orders: McfOrder[];

  @Input()
  columns: TableColumn<McfOrder>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Channel Name', property: 'channel', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Order Date', property: 'orderDate', type: 'text', visible: true },
    { label: 'Order ID/Transaction ID', property: 'orderId', type: 'text', visible: true },
    { label: 'Item', property: 'item', type: 'text', visible: true },
    { label: 'Qty', property: 'qty', type: 'text', visible: true },
    { label: 'Order Status', property: 'orderStatus', type: 'text', visible: true },
    { label: 'Shipped Date', property: 'shipped_date', type: 'text', visible: true },
    { label: 'Buyer', property: 'buyer', type: 'text', visible: true },
    { label: 'Shipped Country', property: 'shipped_country', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<McfOrder> | null;
  selection = new SelectionModel<McfOrder>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  toCenterid = '';
  toChannelsale = '';
  mcfSearch;
  mcfSearchh;

  toTextsearch = '';
  toOrderby1 = '';
  toOrderby2 = '';
  channel = '';
  Orderstatus = '';

  ngOnInit(): void {
    this.urlApi.getMcfOrders(this.toCenterid, this.toChannelsale)
      .subscribe((mcf_orders) => {
        this.subject$.next(mcf_orders);
        console.log("mcf", mcf_orders);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<McfOrder[]>(Boolean)
    ).subscribe(mcf_orders => {
      this.mcf_orders = mcf_orders;
      this.dataSource.data = mcf_orders;
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
  mcfsearch(e){
    this.mcfSearch = e.target.value;
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  mcfsearchh(e){
    this.mcfSearchh = e
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  onSearch(){
    console.log("mcf",this.mcfSearch);
    console.log("Dropdown",this.mcfSearchh);
    this.urlApi. getFindfbaorder(1,100,100,this.toTextsearch,this.toOrderby1,this.toOrderby2,this.channel,this.Orderstatus)
    .subscribe((mcf_orders_new:any) => {
      console.log('mcf_orders', mcf_orders_new)
      // this.subject$.next(mcf_orders_new);
      try{
        // console.log("temp", reportbyproduct);
        // const result: McfOrder[] = mcf_orders_new?.data?.orders?.filter(order=>order.orderStatus==='Unshipped') || [];
        const result: McfOrder[] = mcf_orders_new?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
}
}
