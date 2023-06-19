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
import { ReturnedOrders } from 'src/app/services/returned-orders';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-returned-orders',
  templateUrl: './returned-orders.component.html',
  styleUrls: ['./returned-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ReturnedOrdersComponent implements OnInit {

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

  

  subject$: ReplaySubject<ReturnedOrders[]> = new ReplaySubject<ReturnedOrders[]>(1);
  data$: Observable<ReturnedOrders[]> = this.subject$.asObservable();
  returned_orders: ReturnedOrders[];

  @Input()
  columns: TableColumn<ReturnedOrders>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Order No', property: 'channelOrderId', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'button', visible: true },
    { label: 'Product', property: 'title', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Returned Date', property: 'purchaseDate', type: 'button', visible: true },
    { label: 'Customer', property: 'buyerName', type: 'text', visible: true },
    { label: 'Refund(aprox)', property: 'totalPrice', type: 'text', visible: true },
    { label: 'Shipping', property: 'shipping', type: 'button', visible: true },
    { label: 'Actions', property: 'action', type: 'button', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<ReturnedOrders> | null;
  selection = new SelectionModel<ReturnedOrders>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  search1;
  search2;
  search3;
  txt1;
  // srch;

 




  ngOnInit(): void {
    this.urlApi.getReturnedOrderspara(1,100,100,'0','','all','000')
      .subscribe((returned_orders:any) => {
        // this.subject$.next(returned_orders);
        try{
          // console.log("temp", reportbyproduct);
          const result: ReturnedOrders[] = returned_orders?.sales || [];
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
      filter<ReturnedOrders[]>(Boolean)
    ).subscribe(returned_orders => {
      this.returned_orders = returned_orders;
      // returned_orders.push(returned_orders[0]);
      this.dataSource.data = returned_orders;
    });
  }

  

selectedOption = '1';

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

  Search1(e){
    this.search1 = e;
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  Search2(e){
    this.search2 = e;
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
    this.urlApi.getReturnedOrderspara(1,100,100,'0','',this.search2,'000')
    .subscribe((returned_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: ReturnedOrders[] = returned_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }
  Search3(e){
    this.search3 = e;
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
    this.urlApi.getReturnedOrderspara(1,100,100,'0','','all',this.search3)
    .subscribe((returned_orders:any) => {
      // this.subject$.next(returned_orders);
      try{
        // console.log("temp", reportbyproduct);
        const result: ReturnedOrders[] = returned_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  Txt1(e){
    this.txt1 = e.target.value;
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  onSearch(){
    // console.log("Search1",this.search1);
    // console.log("Search2",this.search2);
    // console.log("Search3",this.search3);
    // console.log("txt1",this.txt1);
    this.urlApi.getReturnedOrderspara(1,100,100,this.search1,this.txt1,'all','000')
      .subscribe((returned_orders:any) => {
        // this.subject$.next(returned_orders);
        try{
          // console.log("temp", reportbyproduct);
          const result: ReturnedOrders[] = returned_orders?.sales || [];
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