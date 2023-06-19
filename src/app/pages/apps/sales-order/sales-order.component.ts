import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import icRefresh from "@iconify/icons-ic/refresh";
import icSearch from "@iconify/icons-ic/search";
import icDownload from "@iconify/icons-ic/cloud-download";
import icAdd from "@iconify/icons-ic/twotone-add";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { Observable, ReplaySubject } from "rxjs";
import { UrlAPIService } from "src/app/services/url-api.service";
import { filter } from "rxjs/operators";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMail from "@iconify/icons-ic/twotone-mail";
import icMap from "@iconify/icons-ic/twotone-map";
import { SalesOrders } from "src/app/services/sales-orders";
import icExcel from "@iconify/icons-ic/bookmark-border";
import icPrint from "@iconify/icons-ic/twotone-print";
import icArrowRight from "@iconify/icons-ic/sharp-arrow-right";
import icMoney from "@iconify/icons-ic/monetization-on";
import icProcess from "@iconify/icons-ic/all-inclusive";
import icTruck from "@iconify/icons-ic/track-changes";
import icRemove from "@iconify/icons-ic/delete";
import icList from "@iconify/icons-ic/list";
// import faExcel from '@iconify/icons-fa-brands/fa-file';
import icCube from "@iconify/icons-ic/account-box";
import { MatDialog } from "@angular/material/dialog";
import icChip from "@iconify/icons-fa-solid/microchip";
import icfaPrint from "@iconify/icons-fa-solid/print";
import icmoney from "@iconify/icons-fa-solid/money-bill";
import icGift from "@iconify/icons-fa-solid/gift";
import faAmazon from "@iconify/icons-fa-brands/amazon";
import faTruck from "@iconify/icons-fa-solid/truck";
import faCube from "@iconify/icons-fa-solid/cube";
import faExcel from "@iconify/icons-fa-solid/file-excel";
// import { PopoverRef } from '../../../../components/popover/popover-ref';
import { Router } from "@angular/router";
import { DispatchconsoleModelComponent } from "src/app/pages/apps/dispatchconsole-model/dispatchconsole-model.component";
import { CreateorderModalComponent } from "src/app/pages/apps/createorder-modal/createorder-modal.component";
import { ChannelproductsModelComponent } from "src/app/pages/apps/channelproducts-model/channelproducts-model.component";
import { OrdercommentsshowModelComponent } from "src/app/pages/apps/ordercommentsshow-model/ordercommentsshow-model.component";
import { OrdercommentscreateModelComponent } from "src/app/pages/apps/ordercommentscreate-model/ordercommentscreate-model.component";
import { PicklistModelComponent } from "src/app/pages/apps/picklist-model/picklist-model.component";
import { PacklistModelComponent } from "src/app/pages/apps/packlist-model/packlist-model.component";
import { ExportcsvModelComponent } from "src/app/pages/apps/exportcsv-model/exportcsv-model.component";
import { SendmailModelComponent } from "src/app/pages/apps/sendmail-model/sendmail-model.component";
import { DownloadorderModelComponent } from "src/app/pages/apps/downloadorder-model/downloadorder-model.component";
import { DispatchconsolenewModelComponent } from "src/app/pages/apps/dispatchconsolenew-model/dispatchconsolenew-model.component";
import { BulkemailModelComponent } from 'src/app/pages/apps/bulkemail-model/bulkemail-model.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { PrintdefaultModelComponent } from 'src/app/pages/apps/printdefault-model/printdefault-model.component';
import { PaidModelComponent } from 'src/app/pages/apps/paid-model/paid-model.component';
import { FullfilmentmodelComponent } from 'src/app/pages/apps/fullfilment-model/fullfilment-model.component';
import { PrmModelComponent } from 'src/app/pages/apps/prm-model/prm-model.component';
import { ShiporderModelComponent } from 'src/app/pages/apps/shiporder-model/shiporder-model.component';
import { CancelorderModelComponent } from 'src/app/pages/apps/cancelorder-model/cancelorder-model.component';
import { PldxModelComponent } from 'src/app/pages/apps/pldx-model/pldx-model.component';
import { PlukmailModelComponent } from 'src/app/pages/apps/plukmail-model/plukmail-model.component';
import { PlyodelModelComponent } from 'src/app/pages/apps/plyodel-model/plyodel-model.component';
import { PlclickdropModelComponent } from 'src/app/pages/apps/plclickdrop-model/plclickdrop-model.component';

@Component({
  selector: "vex-sales-order",
  templateUrl: "./sales-order.component.html",
  styleUrls: ["./sales-order.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
})
export class SalesOrderComponent implements OnInit {
  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icArrowRight = icArrowRight;
  icMoney = icMoney;
  icProcess = icProcess;
  icTruck = icTruck;
  icRemove = icRemove;
  icList = icList;
  icCube = icCube;
  icChip = icChip;
  icfaPrint = icfaPrint;
  icmoney = icmoney;
  icGift = icGift;
  faAmazon = faAmazon;
  faTruck = faTruck;
  faCube = faCube;
  faExcel = faExcel;






  subject$: ReplaySubject<SalesOrders[]> = new ReplaySubject<SalesOrders[]>(1);
  data$: Observable<SalesOrders[]> = this.subject$.asObservable();
  sales_orders: SalesOrders[];

  @Input()
  columns: TableColumn<SalesOrders>[] = [
    {
      label: "Checkbox",
      property: "checkbox",
      type: "checkbox",
      visible: true,
    },
    // { label: "id", property: "id", type: "text", visible: false },
    {
      label: "Order Date",
      property: "purchaseDate",
      type: "button",
      visible: true,
    },
    {
      label: "order time",
      property: "order_time",
      type: "text",
      visible: false,
    },
    { label: "Order Id", property: "orderId", type: "button", visible: true },
    {
      label: "order status",
      property: "orderStatus",
      type: "text",
      visible: false,
    },
    { label: "order img", property: "imageUrl", type: "text", visible: false },
    {
      label: "order img country",
      property: "order_img_country",
      type: "text",
      visible: false,
    },
    {
      label: "order img mail",
      property: "order_img_mail",
      type: "text",
      visible: false,
    },
    { label: "sku", property: "sku", type: "text", visible: false },
    { label: "item id", property: "id", type: "text", visible: false },
    { label: "Product", property: "title", type: "button", visible: true },
    {
      label: "ITEM TOTAL / SHIP COST",
      property: "totalPrice",
      type: "button",
      visible: true,
    },
    {
      label: "Qty",
      property: "productTotalQty",
      type: "button",
      visible: true,
    },
    {
      label: "Shipped Name",
      property: "buyerName",
      type: "button",
      visible: true,
    },
    {
      label: "ship email",
      property: "buyerEmail",
      type: "text",
      visible: false,
    },
    {
      label: "ship address",
      property: "shipAddress1",
      type: "text",
      visible: false,
    },
    {
      label: "ship code",
      property: "shipPostalCode",
      type: "text",
      visible: false,
    },
    {
      label: "ship country",
      property: "shipCountry",
      type: "text",
      visible: false,
    },
    { label: "notes", property: "notes", type: "button", visible: true },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  selectedRow = {};
  rows = [];

  dataSource: MatTableDataSource<SalesOrders> | null;
  selection = new SelectionModel<SalesOrders>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private cd: ChangeDetectorRef,
    private urlApi: UrlAPIService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  setSelectedRow(row, e) {
    this.selectedRow = e.checked ? row : undefined;
    console.log('selected row', this.selectedRow);
    this.rows.push(this.selectedRow);
    console.log('rows array', this.rows);
  }

  searchFrom = "";
  searchBy = "";
  searchTo = "";
  toStatus = "";
  searchByInput = "";
  toID;
  fromDate;
  toDate;
  totQty;
  showChannel;
  showChannelId;
  Orderid;
  teamInitial;
  useDefault;
  result: SalesOrders[];
  shippingCouriers;
  shippingCourierList;
  // toChannel;
  // toSortValue;
  // toSearchname;
  // toSearchvalue;
  // toCountrycode;
  // toType;
  // toShowOrders;
  // toOrderValue;
  // toShippingMethod;

  ngOnInit(): void {
    this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000',null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        this.result = sales_orders?.sales || [];
        console.log("result", this.result);
        this.subject$.next(this.result);

        this.totQty = this.result['quantityPurchased'];
        console.log(this.totQty);

        this.toID = this.result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });
    this.getChannel();
    this.getShippingCourier();
    this.loadSKU();

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<SalesOrders[]>(Boolean))
      .subscribe((sales_orders) => {
        this.sales_orders = sales_orders;
        // debugger;
        this.dataSource.data = sales_orders;
      });
  }

  getChannel(){
    this.urlApi.getUserChannel().subscribe((cur) => {
      // const result = cur;
      
      this.showChannel = cur;
      this.showChannelId = cur['type'];
      console.log("channel",this.showChannel);
      console.log("id",this.showChannelId);

    });
  }

  getShippingCourier(){
    this.urlApi.getShipCourier().subscribe((ShippingCourierModel:any) => {
      this.shippingCouriers = ShippingCourierModel || [];
      console.log("shipping..",this.shippingCouriers);
      this.shippingCourierList = this.shippingCouriers.filter((sc)=>sc.enable===true);
      console.log('filtered shipping details', this.shippingCourierList);
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
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // openDispatchModal() {
  //   this.dialog.open(DispatchconsoleModelComponent, {
  //     width: "100%",
  //     maxWidth: 850,
  //   });
  // }

  openCreateorderModal() {
    this.dialog.open(CreateorderModalComponent, {
      width: "100%",
      maxWidth: 950,
    });
  }

  openChannelproductModal() {
    this.dialog.open(ChannelproductsModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }

  openCommentShowModal() {
    this.dialog.open(OrdercommentsshowModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }

  openCommentCreateModal() {
    this.dialog.open(OrdercommentscreateModelComponent, {
      width: "100%",
      maxWidth: 600,
    });
  }

  openPicklistModal() {
    this.dialog.open(PicklistModelComponent, {
      width: "100%",
      maxWidth: 300,
    });
  }

  openPacklistModal() {
    this.dialog.open(PacklistModelComponent, {
      width: "100%",
      maxWidth: 300,
    });
  }

  openExportCSVModal() {
    this.dialog.open(ExportcsvModelComponent, {
      width: "100%",
      maxWidth: 300,
    });
  }

  openSendMailModal() {
    this.dialog.open(SendmailModelComponent, {
      width: "100%",
      maxWidth: 800,
    });
  }

  openDownloadordersModal(orderid) {
    console.log("order",orderid);
    // alert(orderid);
    this.dialog.open(DownloadorderModelComponent, {
      width: "100%",
      maxWidth: 800,
      data: { orderid: orderid }
    });
  }

  openDispatchModal() {
    if(this.selectedRow['channelOrderId'] == undefined || null || ''){
      this.dialog.open(DispatchconsoleModelComponent, {
        width: "100%",
        maxWidth: 850,
      });
    }
    else{
      this.dialog.open(DispatchconsolenewModelComponent, {
        width: "100%",
        maxWidth: 850,
      });
    }
  }

  openBulkEmailModal(ids) {
    console.log('oid', ids)
    this.dialog.open(BulkemailModelComponent, {
      width: "100%",
      maxWidth: 850,
      data: { ids: ids }
    });
  }

  openPrintdefault(){
    this.dialog.open(PrintdefaultModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  getIds() {
    let ids = [];
    this.rows.map((row) => {
      ids.push(row.id);
    });
    return ids;
  }

  getOrderIds() {
    let orderIds = [];
    this.rows.map((row) => {
      orderIds.push(Number(row.orderId));
    });
    return orderIds;
  }

  openPaidmodel(){
    if(Object.keys(this.selectedRow).length == 0){
      alert ("Please select an Order")
    } else {
      console.log('inside openPaidmodel', this.rows);
      this.dialog.open(PaidModelComponent, {
        width: '100%',
        maxWidth: 850,
        data: {
          ids: this.getIds(),
          orderIds: this.getOrderIds()
        },
      })
    }
  }

  openfullfilmentmodel(){
    if(Object.keys(this.selectedRow).length == 0){
      alert ("Please select an Order")
    } else {
      this.dialog.open(FullfilmentmodelComponent, {
        width: '100%',
        maxWidth: 850,
        data: {
          channelOrderId: this.selectedRow['channelOrderId'],
          channelUserId : this.selectedRow['channelUserId'],
          excludeIds: [0],
          id: this.selectedRow['id'],
          ids: [0],
          orderId: this.selectedRow['orderId']
        }
      })
    }
  }

  openPRMmodel(item){
    console.log('item', item);
    if(Object.keys(this.selectedRow).length == 0){
      alert("Please select an Order");
    }
    else{
    this.dialog.open(PrmModelComponent, {
      width: '100%',
      maxWidth: 850,
      data: {
        selectedItem: item,
        selectedRow: this.selectedRow
      }
    })
    }
  }

  openshipordermodel(selectedRow){
    if(selectedRow['channelOrderId'] == null || undefined || ''){
      alert("Please select an Order");
    }
    else{
      this.dialog.open(ShiporderModelComponent, {
        width: '100%',
        maxWidth: 850,
        data: {ids: [selectedRow['channelOrderId']], orderId: selectedRow['orderId']}
      })
    }
  }

  openCancelordermodel(){
    if(Object.keys(this.selectedRow).length == 0){
      alert("Please select an Order");
    } else {
      this.dialog.open(CancelorderModelComponent, {
        width: '100%',
        maxWidth: 850,
        data: {
          channelOrderId: this.selectedRow['channelOrderId'],
          channelUserId : this.selectedRow['channelUserId '],
          excludeIds: [],
          id: this.selectedRow['id'],
          ids: [],
          orderId: this.selectedRow['orderId']
        }
      });
    }
  }

  openPLclickdropmodel(){
    this.dialog.open(CancelorderModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openPLYodelmodel(){
    this.dialog.open(CancelorderModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openPLukmailmodel(){
    this.dialog.open(CancelorderModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openPLDXmodel(){
    this.dialog.open(CancelorderModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  toChannel;
  toSortValue;
  toSearchname;
  toSearchvalue;
  toCountrycode;
  toType;
  toShowOrders;
  toOrderValue;
  toShippingMethod;

  onSearchByFilter(e){
    this.toSortValue = e;
    // alert(this.toSortValue);
    this.urlApi.getSalesOrders(1,100,100,'all',this.toSortValue,'0','','000',null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['quantityPurchased']

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

  }

  onSearchByFrom(e) {
    this.searchFrom = e.target.value.format("YYYY/MM/DD");
    // console.log("search",e.target.value.format('YYYY/MM/DD'));
  }

  onSearchByTo(e) {
    // console.log("e",e);
    this.searchTo = e.target.value.format("YYYY/MM/DD");
  }

  onSearchByChange(e) {
    this.searchBy = e;
  }

  getSalesOrdersConditions() {}

  onSearch() {

    // this.toCountrycode= e;
    // alert(this.searchBy);
    this.urlApi.getSalesOrders(1,100,100,'all',0,this.searchBy,this.searchByInput,'000',null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['quantityPurchased']

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });
    // this.urlApi
    //   .getSalesOrdersConditions(this.toStatus,this.searchFrom,this.searchTo,1,100,100)
    //   .subscribe((sales_orders: any) => {
    //     console.log("sales order", sales_orders);
    //     // this.subject$.next(sales_orders);
    //     try {
    //       // console.log("temp", reportbyproduct);
    //       const result: SalesOrders[] =
    //         sales_orders?.data?.orders?.filter(
    //           (order) => order.orderStatus === "Unshipped"
    //         ) || [];
    //       console.log("result", result);
    //       this.subject$.next(result);
    //     } catch (err) {
    //       console.log("errr", err);
    //     }
    //   });
  }
  
  onSearchBy() {
    if (this.searchBy === "2") {
      this.getSalesOrderById(this.searchByInput);
    }
    if (this.searchBy === "5") {
      this.getSalesOrderByCustomer(this.searchByInput);
    }
    if (this.searchBy === "6") {
      this.getSalesOrderById(this.searchByInput);
    }
  }

  getSalesOrderById(id) {
    this.urlApi.getSalesOrderById(id).subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.channelSales || [];
        console.log("result", result);
        this.subject$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });
  }

  getSalesOrderByCustomer(c) {
    this.urlApi.getSalesOrderByCustomer(c).subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.channelSales || [];
        console.log("result", result);
        this.subject$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });
  }

  getSalesOrderByPostCode(id) {
    this.urlApi.getSalesOrderByPostCode(id).subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.channelSales || [];
        console.log("result", result);
        this.subject$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });
  }

  // onSearchByFilter(e){
  //   this.urlApi.getSalesOrders(1,100,100,'all',0,0,'','000',null,false,0,'000').subscribe((sales_orders: any) => {
  //     console.log("sales order", sales_orders);
  //     // this.subject$.next(sales_orders);
  //     try {
  //       const result: SalesOrders[] = sales_orders?.sales || [];
  //       console.log("result", result);
  //       this.subject$.next(result);

  //       this.totQty = sales_orders['totalDistinctitems']

  //       this.toID = result["id"];
  //       console.log("id", this.toID);
  //     } catch (err) {
  //       console.log("errr", err);
  //     }
  //   });

  // }

  onSearchByChannel(e){
    this.toChannel= e;
    // alert(this.toChannel);
    this.urlApi.getSalesOrders(1,100,100,this.toChannel,0,'0','','000',null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['totalDistinctitems']

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

  }

  onSearchByCountry(e){
    this.toCountrycode= e;
    // alert(this.toCountrycode);
    this.urlApi.getSalesOrders(1,100,100,'all',0,'0','',this.toCountrycode,null,false,0,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['totalDistinctitems']

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

  }

  onSearchByShipping(e){
    this.toShippingMethod= e;
    // alert(this.toShippingMethod);
    this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000',null,false,0,this.toShippingMethod).subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['totalDistinctitems']

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

  }

  onSearchBystyle(e){
    this.toOrderValue= e;
    // alert(this.toOrderValue);
    this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000',null,false,this.toOrderValue,'000').subscribe((sales_orders: any) => {
      console.log("sales order", sales_orders);
      // this.subject$.next(sales_orders);
      try {
        const result: SalesOrders[] = sales_orders?.sales || [];
        console.log("result", result);
        this.subject$.next(result);

        this.totQty = sales_orders['quantityPurchased'];
        // console.log("toQty",this.totQty);

        this.toID = result["id"];
        console.log("id", this.toID);
      } catch (err) {
        console.log("errr", err);
      }
    });

  }

  onShowOrder(e){
    this.useDefault = e.checked;
    console.log(this.useDefault);
    if(this.useDefault == true){
      // alert('true');
      this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000','orders',this.useDefault,0,'').subscribe((sales_orders: any) => {
        console.log("sales order", sales_orders);
        // this.subject$.next(sales_orders);
        try {
          const result: SalesOrders[] = sales_orders?.sales || [];
          console.log("result", result);
          this.subject$.next(result);

          this.totQty = sales_orders['quantityPurchased'];

          this.toID = result["id"];
          console.log("id", this.toID);
        } catch (err) {
          console.log("errr", err);
        }
      });
    }
    else{
      this.urlApi.getSalesOrders(1,100,100,'all',0,'0','','000','null',this.useDefault,0,'000').subscribe((sales_orders: any) => {
        console.log("sales order", sales_orders);
        // this.subject$.next(sales_orders);
        try {
          const result: SalesOrders[] = sales_orders?.sales || [];
          console.log("result", result);
          this.subject$.next(result);

          this.totQty = sales_orders['quantityPurchased'];

          this.toID = result["id"];
          console.log("id", this.toID);
        } catch (err) {
          console.log("errr", err);
        }
      });
    }
  }

  resetForm() {
    this.fromDate = undefined;
    this.toDate = undefined;
  }

  resetSearch(){
    this.searchByInput = undefined;
    this.searchBy = undefined;
    this.ngOnInit();
  }

  resetSortBy(){
    this.toOrderValue = undefined;
    this.teamInitial = undefined;
    debugger;
    this.ngOnInit();
  }

  

  orderProcess(){
    const data = {
      ids: [this.selectedRow['channelOrderId']],
      orderIds: [Number([this.selectedRow['orderId']])]
    };
    console.log('idsss', data)
    if(this.selectedRow['channelOrderId'] == null || undefined || ''){
      alert("Please select an Order");
    }
    else{
      this.urlApi.postOrderProcess(data).subscribe((successData: any) => {
        
        // this.gotoLogin();
        this.snackbar.open(successData.errorMessage, "Ok", {
          duration: 10000,
        });
      });
    }

  }

  onChangeShippingCourier(e) {

  }

  loadSKU(){
    this.urlApi.getLowsyncprogress('PDOWNLOAD').subscribe((successData: any) => {
      this.subject$.next(successData);
      console.log(successData);
      // this.gotoLogin();
      
    });
  }
}