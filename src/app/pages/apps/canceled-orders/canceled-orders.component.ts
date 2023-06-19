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
import { CancelledOrders } from 'src/app/services/cancelled-orders';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CanceledOrdersComponent implements OnInit {

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
  showChannel;
  showChannelId;

  subject$: ReplaySubject<CancelledOrders[]> = new ReplaySubject<CancelledOrders[]>(1);
  data$: Observable<CancelledOrders[]> = this.subject$.asObservable();
  returned_orders: CancelledOrders[];

  @Input()
  columns: TableColumn<CancelledOrders>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: "Order No", property: "channelOrderId", type: 'text', visible: true },
    { label: "Channel", property: "channel", type: 'button', visible: true },
    { label: "Title", property: "title", type: 'button', visible: true },
    { label: "SKU", property: "sku", type: 'text', visible: true },
    { label: "Order Date", property: "purchaseDate", type: 'button', visible: true },
    { label: "Customer", property: "buyerName", type: 'text', visible: true },
    { label: "Amount", property: "itemPrice", type: 'text', visible: true },
    { label: "Stock Qty", property: "itemTax", type: 'text', visible: true },
    { label: "Shipping", property: "orderStatus", type: 'text', visible: true },
    { label: "Action", property: "view", type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<CancelledOrders> | null;
  selection = new SelectionModel<CancelledOrders>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getCancelledOrders(1,100,100,'0','','all','000')
    .subscribe((cancelled_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: CancelledOrders[] = cancelled_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });

    this.getChannel();

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<CancelledOrders[]>(Boolean)
    ).subscribe(returned_orders => {
      this.returned_orders = returned_orders;
      this.dataSource.data = returned_orders;
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

  searchby;
  searchbychannel;
  searchbymethods;
  txt1;

  SearchBy(e){
    this.searchby = e;
  }

  Txt1(e){
    this.txt1 = e.target.value;
  }

  SearchByChannel(e){
    this.searchbychannel = e;
    this.urlApi.getCancelledOrders(1,100,100,'0','',this.searchbychannel,'000')
    .subscribe((cancelled_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: CancelledOrders[] = cancelled_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  SearchByMethods(e){
    this.searchbymethods = e;
    this.urlApi.getCancelledOrders(1,100,100,'0','','all',this.searchbymethods)
    .subscribe((cancelled_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: CancelledOrders[] = cancelled_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  onSearch(){
      alert(this.searchby);
      alert(this.txt1);
    this.urlApi.getCancelledOrders(1,100,100,this.searchby,this.txt1,'all','000')
    .subscribe((cancelled_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: CancelledOrders[] = cancelled_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  getChannel(){
    this.urlApi.getUserChannel().subscribe((cur) => {
      // const result = cur;
      
      this.showChannel = cur;
      this.showChannelId = cur['type'];
      // console.log("channel",this.showChannel);
      // console.log("id",this.showChannelId);

    });
  }

}
