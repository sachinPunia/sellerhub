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
import { ShippedOrders } from 'src/app/services/shipped-orders';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';

@Component({
  selector: 'vex-shipped-orders',
  templateUrl: './shipped-orders.component.html',
  styleUrls: ['./shipped-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ShippedOrdersComponent implements OnInit {

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
  icArrowRight = icArrowRight;

  subject$: ReplaySubject<ShippedOrders[]> = new ReplaySubject<ShippedOrders[]>(1);
  data$: Observable<ShippedOrders[]> = this.subject$.asObservable();
  shipped_orders: ShippedOrders[];

  @Input()
  columns: TableColumn<ShippedOrders>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: "Order No", property: "channelOrderId", type: 'text', visible: true },
    { label: "Channel", property: "channel", type: 'image', visible: true },
    { label: "Image", property: "imageUrl", type: 'image', visible: false },
    { label: "Product", property: "title", type: 'button', visible: true },
    { label: "SKU", property: "sku", type: 'text', visible: true },
    { label: "Order Date", property: "purchaseDate", type: 'text', visible: true },
    { label: "Customer", property: "buyerName", type: 'text', visible: true },
    { label: "Amount", property: "totalPrice", type: 'text', visible: true },
    { label: "Stock Qty", property: "stock_qty", type: 'button', visible: true },
    { label: "Shipping", property: "shipping", type: 'button', visible: true },
    { label: "Return Eligible", property: "return_eligible", type: 'button', visible: true },
    { label: "View", property: "view", type: 'button', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<ShippedOrders> | null;
  selection = new SelectionModel<ShippedOrders>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  searchFrom = '';
  searchTo = '';
  toStatus = '';
  toID;
  fromDate;
  toDate;
  searchName = '';
  searchValue = '';
  channelID = '';
  shippingMethod = '';
  startDate = '';
  endDate = '';
  dateOrder = '';
  searchBy;
  searchShow = '';
  showChannel;
  showChannelId;

  selectedOption = '1';

  

  ngOnInit(): void {
    // this.urlApi.getShippedOrders(1,100,100)
    //   .subscribe((shipped_orders:any) => {
    //     // this.subject$.next(shipped_orders);
    //     try{
    //       // console.log("temp", reportbyproduct);
    //       const result: ShippedOrders[] = shipped_orders?.data?.orders.filter(order=>order.orderStatus==='Shipped') || [];
    //       console.log("result", result);
    //       debugger;
    //       this.subject$.next(result);
    //     }
    //     catch(err){
    //       console.log("errr",err);
    //     }
    // });

    this.getChannel();

   this.urlApi.getShippedOrdersSearch(1,100,'100',1,this.searchValue,'all','000',this.startDate,this.endDate,'desc')
   .subscribe((shipped_orders:any) => {
     // this.subject$.next(shipped_orders);
     try{
       // console.log("temp", reportbyproduct);
       const result: ShippedOrders[] =  shipped_orders?.sales || [];
       console.log("result", result);
      //  debugger;
       this.subject$.next(result);
     }
     catch(err){
       console.log("errr",err);
     }
 });
    // alert(this.selectedOption);

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<ShippedOrders[]>(Boolean)
    ).subscribe(shipped_orders => {
      // this.shipped_orders = shipped_orders;
      shipped_orders.push(shipped_orders[0]);
      this.dataSource.data = shipped_orders;
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

  onSearchByFrom(e){
    this.startDate = e.target.value.format('YYYY/MM/DD');
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  onSearchByTo(e){
    // console.log("e",e);
    this.endDate = e.target.value.format('YYYY/MM/DD');
  }

  onSearchByChange(e) {
    this.searchBy = e;
     
  }

  onSearchByShow(e) {
    this.searchShow = e;
     
    this.urlApi.getShippedOrdersSearch(1,100,this.searchShow,0,this.searchValue,this.channelID,'000',this.startDate,this.endDate,'desc').subscribe((shipped_orders:any) => {
      // this.subject$.next(shipped_orders);
      try{
        // console.log("temp", reportbyproduct);
        // const result: ShippedOrders[] = shipped_orders?.data?.sales.filter(order=>order.orderStatus==='Shipped') || [];
        const result: ShippedOrders[] = shipped_orders?.sales || [];
        console.log("result", result);
        // debugger;
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  onSearchByChannel(e) {
    this.channelID = e;
     
    this.urlApi.getShippedOrdersSearch(1,100,'100',0,this.searchValue,this.channelID,'000',this.startDate,this.endDate,'desc').subscribe((shipped_orders:any) => {
      // this.subject$.next(shipped_orders);
      try{
        // console.log("temp", reportbyproduct);
        // const result: ShippedOrders[] = shipped_orders?.data?.sales.filter(order=>order.orderStatus==='Shipped') || [];
        const result: ShippedOrders[] = shipped_orders?.sales || [];
        console.log("result", result);
        // debugger;
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  onSearchByShip(e) {
    this.shippingMethod = e;
     
    this.urlApi.getShippedOrdersSearch(1,100,'100',0,this.searchValue,'all',this.shippingMethod,this.startDate,this.endDate,'desc').subscribe((shipped_orders:any) => {
        // this.subject$.next(shipped_orders);
        try{
          // console.log("temp", reportbyproduct);
          // const result: ShippedOrders[] = shipped_orders?.data?.sales.filter(order=>order.orderStatus==='Shipped') || [];
          const result: ShippedOrders[] = shipped_orders?.sales || [];
          console.log("result", result);
          // debugger;
          this.subject$.next(result);
        }
        catch(err){
          console.log("errr",err);
        }
    });
  }

  SearchByValue(e){
    // this.onSearchByChange();
    this.searchValue = e.target.value;
    console.log(this.searchValue);
  }
  
  onSearch(){
   console.log(this.startDate);
   console.log(this.endDate);
   this.urlApi.getShippedOrdersSearch(1,100,'100',1,this.searchValue,'all','000',this.startDate,this.endDate,'desc')
      .subscribe((shipped_orders:any) => {
        // this.subject$.next(shipped_orders);
        try{
          // console.log("temp", reportbyproduct);
          const result: ShippedOrders[] =  shipped_orders?.sales || [];
          console.log("result", result);
          // debugger;
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

  onID(id:number){
    console.log(id)
    this.urlApi.getSalesOrdersId(id);
  }


  resetForm() {
    this.fromDate = undefined;
    this.toDate = undefined;
    window.location.reload();
  };

}
