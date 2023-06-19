import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { ChannelIntegration } from "./channel-integration";
import { CountryList } from "./country-list";
import { DashboardLowStock } from "../pages/dashboards/dashboard-analytics/dashboard.lowstock";
import { RecentOrders } from "../pages/dashboards/dashboard-analytics/dashboard.recentorders";
import { ReportByProduct } from "./report-by-product";
import { LowStock } from "./low-stock";
import { ReportStockValue } from "./report-stock-value";
import { ReportOrder } from "./report-order";
import { OrderSummary } from "./order-summary";
import { McfOrder } from "./mcf-orders";
import { ReturnedOrders } from "./returned-orders";
import { CancelledOrders } from "./cancelled-orders";
import { ShippedOrders } from "./shipped-orders";
import { SalesOrders } from "./sales-orders";
import { Products } from "./product";
import { Waitingtolist } from "./waitingtolist";
import { Listingerror } from "./listingerror";
import { Listedproduct } from "./listedproduct";
import { Closedproduct } from "./closedproduct";
import { Schedulelisting } from "./schedulelisting";
import { Fabcreateproduct } from "./fab-createproducts";
import { Fabsendtofba } from "./fabsendtofba";
import { Fabproductinfba } from "./fab-productinfba";

import { Warehouse } from "./warehouse";
import { Stocksummary } from "./stocksummary";
import { Transfer } from "./transfer";
import { Customer } from "./customer";
import { Purchaseorder } from "./purchaseorder";
import { ManageSupplier } from "./manage_supplier";
import { Supplierfeeds } from "./supplierfeed";
import { Channelproducts } from "./channelroducts";
import { Settingtax } from "./setting_tax";
import { Settingorders } from "./settingorders";
import { Settinginvoice } from "./setting-invoice";
import { Settingattribute } from "./setting_attributes";
import { Settingset } from "./setting_set";
import { Settingbulkimport } from "./setting_bulkimport";
import { Settingbulkexport } from "./setting_bulkexport";
import { Settingnotification } from "./setting_notification";
import { Settingunusedbarcode } from "./setting_unused_barcode";
import { Settingusedbarcode } from "./setting_used_barcode";
import { Settingskubarcode } from "./setting_sku_barcode";
import { Settingsyncchanel } from "./setting_sync_channel";
import { Settingexcludesync } from "./setting_exclude_sync";

import { ChannelRegistration } from "./channel-registration";
import { ChannelEcommerce } from "./channel-ecommerce";
import { ChannelMarketPlace } from "./channel-masrketplace";
import { ChannelAccounting } from "./channel-accounting";
import { ChannelCrm } from "./channel-crm";
import { ChannelEpos } from "./channel-epos";
import { ChannelAppstore } from "./channel-appstore";
import { ChannelOther } from "./channel-other";
import { ShippingCourier } from "./shipping-courier";
import { UsersData } from "./users-data";
import { SubscribtionDetails } from "./subscribtions-details";
import { InvoicesData } from "./invoices-data";
import { MessageCenter } from "./message-center";
import { TemplateDesigner } from "./template-designer";
import { UserAuth } from "./user-auth";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { SuppliersData } from "./suppliers-data";

import { Createorder } from "./createorder";
import { Channelproductmodel } from "./channelproduct-modal";
import { Sendmailmodel } from "./sendmail-model";
import { Downloadordermodel } from "./downloadorder-model";
import { Dispatchconsolenew } from "./dispatchconsolenew-model";
import { Syncprogressmodel } from "./syncprogress-model";
import { Addtochannelmodel } from "./addtochannel-model";
import { Createlinkedproductsmodel } from "./createlinkedproducts-model";
import { Updateqtyproductmodel } from "./updateqtyproducts-model";
import { Addproductmodel } from "./addproduct-model";
import { ManageProductmodel } from "./manageproduct-model";
import { Schedulinglistingmodel } from "./schedulinglisting-model";
import { Stockview } from "./stockview";
import { Viewmodel } from "./view-model";
import { Uploadtochannelmodel } from "./uploadtochannel-model";
import { Bulkupdatemodel } from "./bulkupdate-model";
import { Reportorderhistory } from "./reportorderhistory";
import { Notificationsettingmodel } from "./notificationsetting-model";
import { Notificationsetting1model } from "./notificationsetting1model";
import { notificationsetting0 } from "./notificationsetting0-model";
import { ReturnedOrdersparam } from "./returned-orders-param";
import { Taxratemodel } from "./taxrate-model";
import { Cancelordermodel } from './cancelorder-model';
import { Variationaddproduct } from "./variation-addproduct";
import { Attributeaddproduct } from "./attribute-addproduct";
import { Linkedproductmodel } from "./linkedproduct-model";
import { Linkproduct } from "./linkproduct";
import { MessageOrderDetails } from './msgorderdetails'

@Injectable({
  providedIn: "root",
})
export class UrlAPIService {
  BASE_URL: string = "https://login.sellershub.io";
  BASE_URL_DUMMY: string = "assets/json-data/";
  URL =
    "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json";
  userRespon;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  userAuth(userId: string, userPass: string) {
    let headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    const body = { userId: userId, password: userPass };
    return this.http
      .post(this.BASE_URL + "/login", body, { headers: headers })
      .pipe(
        catchError((err) => {
          let errMsg = err.statusText;
          if (errMsg == "Unauthorized") {
            this.snackbar.open(
              "Your email or password incorrect",
              "Try Again",
              {
                duration: 10000,
              }
            );
          }
          return throwError(err);
        })
      )
      .subscribe((data) => {
        this.userRespon = data;
        console.log(this.userRespon);
        this.snackbar.open("Login Successful, redirect to dashboard", "Ok", {
          duration: 1000,
        });
        localStorage.setItem("userLoginName", userId);
        localStorage.setItem("userLoginEmail", userPass);
        localStorage.setItem("userToken", this.userRespon.token);
        localStorage.setItem(
          "userSubscribe",
          this.userRespon.subscriptionStatus
        );
        this.router.navigate(["/"]);
      });
  }

  postRegistration(body) {
    return this.http.post("/registernew", body);
  }

  postRedeemCoupon(couponCode: string){
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/redeemcoupon?couponCode=${couponCode}`, { headers: new HttpHeaders().set("Authorization", authToken) });
  
  }

  getChannelIntegrations(params) {
    return this.http.get<ChannelIntegration[]>(this.BASE_URL_DUMMY + params);
  }

  getListCountry() {
    return this.http.get<CountryList[]>(
      this.BASE_URL_DUMMY + "country-list.json"
    );
  }

  postBulkimport(uploadProductFileType: string, file: any) {
    let authToken = localStorage.getItem("userToken");
    let formData: any = new FormData();
    formData.append("file", file);
    return this.http.post(
      `/bulkimportfile?uploadProductFileType=${uploadProductFileType}`,
      formData,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  postBulkEmail(body) {
    let authToken = localStorage.getItem("userToken");
    // let formData: any = new FormData();
    return this.http.post(`/new/bulkemail`,body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  getShipOrderModel(body) {
    console.log('body', body)
    let authToken = localStorage.getItem("userToken");
    // let formData: any = new FormData();
    // formData.append("ids",body)
    return this.http.post(`/new/findordersforshipment`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  postOrderProcess(body:any) {
    let authToken = localStorage.getItem("userToken");
    let formData: any = new FormData();
    formData.append("ids",body)
    return this.http.post(`/new/orderProcess`,formData, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  getReportOrder(params) {
    return this.http.get<ReportOrder[]>(this.BASE_URL_DUMMY + params);
  }

  getOrderSummary() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/ordersummary", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getMcfOrders(centerid: string, channelsaleid: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<McfOrder[]>(
      `/new/viewfbaorders?centerid=${centerid}&channelsaleid=${channelsaleid}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getReturnedOrderspara(
    pageno: number,
    total: number,
    pagesize: number,
    searchname: string,
    searchvalue: string,
    channel: string,
    shippingMethod: string
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ReturnedOrdersparam[]>(
      `/new/returnedordersdata?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchname=${searchname}&searchvalue=${searchvalue}&channel=${channel}&shippingMethod=${shippingMethod}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getReturnorderdata(pageno: number, total: number,pagesize: number,searchname: string,searchvalue: string,channel: string,shippingMethod: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ReturnedOrders[]>(`/new/findfbaorders?pageno=${pageno}&total=${total}&pagesize=${pagesize}searchname=${searchname}&searchvalue=${searchvalue}&channel=${channel}&shippingMethod=${shippingMethod}`, { headers: new HttpHeaders().set('Authorization', authToken) });
 
 
  }

  getReturnedOrders(currentPage: number, pageSize: number, total: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ReturnedOrders[]>(
      `/new/Orders?currentPage=${currentPage}&pageSize=${pageSize}&total=${total}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getCancelledOrders(pageno: number,total: number, pagesize: number,searchname: string,searchvalue: string,channel: string,shippingMethod: string
  ) {
    // return this.http.get<CancelledOrders[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    return this.http.get<CancelledOrders[]>(
      `/new/getcancelledorderslist?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchname=${searchname}&searchvalue=${searchvalue}&channel=${channel}&shippingMethod=${shippingMethod}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getShippedOrders(currentPage: number, pageSize: number, total: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ShippedOrders[]>(
      `/new/Orders?currentPage=${currentPage}&pageSize=${pageSize}&total=${total}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getShippedOrdersSearch(
    pageno: number,
    total: number,
    pagesize: string,
    searchname: number,
    searchvalue: string,
    channelId: string,
    shippingMethod: string,
    startDate: string,
    endDate: string,
    dateOrder: string
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ShippedOrders[]>(
      `/new/shippedorders?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchname=${searchname}&searchvalue=${searchvalue}&channelId=${channelId}&shippingMethod=${shippingMethod}&startDate=${startDate}&endDate=${endDate}&dateOrder=${dateOrder}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  // getSalesOrders(currentPage: number, pageSize: number, total: number) {
  //   let authToken = localStorage.getItem("userToken");
  //   return this.http.get<SalesOrders[]>(
  //     `/new/Orders?currentPage=${currentPage}&pageSize=${pageSize}&total=${total}`,
  //     { headers: new HttpHeaders().set("Authorization", authToken) }
  //   );
  // }

  getSalesOrders(pageno: number, total: number, pagesize: number, channel: string, sortvalue: number, searchname: string, searchvalue: string, shipCountryCode: string, type: string, showOrders: boolean, orderValue: number, shippingMethod: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(
      `/new/dynamicSearch?pageno=${pageno}&total=${total}&pagesize=${pagesize}&channel=${channel}&sortvalue=${sortvalue}&searchname=${searchname}&searchvalue=${searchvalue}&shipCountryCode=${shipCountryCode}&type=${type}&showOrders=${showOrders}&orderValue=${orderValue}&shippingMethod=${shippingMethod}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSalesOrderById(orderId: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(
      `/new/searchOrderId?orderid=${orderId}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSalesOrderByCustomer(cust: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(`/new/searchcustomer?search=${cust}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSalesOrderByPostCode(pc: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(
      `/new/serachByItemBarcode?itemid=${pc}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSalesOrdersConditions(
    status: string,
    startDate: string,
    endDate: string,
    currentPage: number,
    pageSize: number,
    total: number
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(
      `/new/Orders/condition?status=${status}&startDate=${startDate}&endDate=${endDate}&currentPage=${currentPage}&pageSize=${pageSize}&total=${total}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSalesOrdersId(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SalesOrders[]>(`/new/Orders/${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getPaidModel(id: number) {
    let authToken = localStorage.getItem("userToken");
    let formData: any = new FormData();
    formData.append("ids", id)
    return this.http.post<SalesOrders[]>(`/orders/confirmorderpayment?unique=1636627206415`,formData, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  getReportByProduct(
    pageno: number,
    total: number,
    searchvalue: string,
    searchname: string,
    start: string,
    end: string
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ReportByProduct[]>(
      `/findsaleproductreport?pageno=${pageno}&total=${total}&searchvalue=${searchvalue}&searchname=${searchname}&start=${start}&end=${end}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getReportlowStock(pageno: number, total: number, search: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<LowStock[]>(
      `/findlowstockproductreport?pageno=${pageno}&total=${total}&search=${search}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getLowsyncprogress(syncType: string ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(
      `/rest/loadSyncProgress?syncType=${syncType}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getProducts(pageno: number, total: number, pagesize: number, channel: string, sortvalue: number, searchname: string, searchvalue: string, usedUnsedId: string, brandname: string, supplierId: string, showParentProducts: boolean, showActiveProducts: boolean, showNonEmptyProducts: boolean, showZeroProducts: boolean) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Products[]>(`/rest/dynamicSearch?pageno=${pageno}&total=${total}&pagesize=${pagesize}&channel=${channel}&sortvalue=${sortvalue}&searchname=${searchname}&searchvalue=${searchvalue}&usedUnsedId=${usedUnsedId}&brandname=${brandname}&supplierId=${supplierId}&showParentProducts=${showParentProducts}&showActiveProducts=${showActiveProducts}&showNonEmptyProducts=${showNonEmptyProducts}&showZeroProducts=${showZeroProducts}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getChannelproducts(pageno: number, total: number, pagesize: number, searchname: string, searchvalue: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Channelproducts[]>(`/rest/findAllChannelProducts?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchname=${searchname}&searchvalue=${searchvalue}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getBulkreviseprice(ids: string, action: string, pricechange: string, type: string, count: string, channelfilter: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/rest/updateprice?ids=${ids}&action=${action}&pricechange=${pricechange}&type=${type}&count=${count}&channelfilter=${channelfilter}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getStockview(pageno: number, total: number, pagesize: number, searchname: string, searchvalue: string, stock: string, bin: string, sku: string, warehouse: string, updatestock: boolean) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Stockview[]>(`/rest/stockitemsview?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchname=${searchname}&searchvalue=${searchvalue}&stock=${stock}&bin=${bin}&sku=${sku}&warehouse=${warehouse}&updatestock=${updatestock}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getCreatelinkedproductmodel(productIds: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Createlinkedproductsmodel[]>(`/rest/linkproducts?productIds=${productIds}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getExcludeSku(id: string,add: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Createlinkedproductsmodel[]>(`/rest/skuWiseInventorySync?id=${id}&add=${add}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  postRemoveproduct(id: string,pageno: string, total: string, remove: boolean) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/rest/removeproducts?id=${id}&pageno=${pageno}&total=${total}&remove=${remove}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getViewmodel(sku: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Viewmodel[]>(`/rest/viewOrderDetails?sku=${sku}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getCurrencyValue(fromcurrencyid: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/rest/gettocurrencyvalue?fromcurrencyid=${fromcurrencyid}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getStockValueReport(
    pageno: number,
    total: number,
    pagesize: number,
    searchvalue: string
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ReportStockValue[]>(
      `/findstockvaluereport?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchvalue=${searchvalue}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getNotificationsettingmodel(type: string) {
    // return this.http.get<Notificationsettingmodel[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Notificationsettingmodel[]>(
      `/loadnotifcations?type=${type}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getNotificationsetting1model(type: string) {
    // return this.http.get<Notificationsetting1model[]>(this.BASE_URL_DUMMY + params);

    let authToken = localStorage.getItem("userToken");
    return this.http.get<Notificationsetting1model[]>(
      `/loadnotifcations?type=${type}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getNotificationsetting0model(type: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<notificationsetting0[]>(
      `/loadnotifcations?type=${type}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getWaitingtolist(params) {
    return this.http.get<Waitingtolist[]>(this.BASE_URL_DUMMY + params);
  }

  getListingerror(params) {
    return this.http.get<Listingerror[]>(this.BASE_URL_DUMMY + params);
  }

  getListedproduct(params) {
    return this.http.get<Listedproduct[]>(this.BASE_URL_DUMMY + params);
  }

  getClosedproduct(params) {
    return this.http.get<Closedproduct[]>(this.BASE_URL_DUMMY + params);
  }

  getSchedulelisting(params) {
    return this.http.get<Schedulelisting[]>(this.BASE_URL_DUMMY + params);
  }

  getFabcreateproduct(params) {
    return this.http.get<Fabcreateproduct[]>(this.BASE_URL_DUMMY + params);
  }

  getFabsendtofba(params) {
    return this.http.get<Fabsendtofba[]>(this.BASE_URL_DUMMY + params);
  }

  getFabproductinfba(params) {
    return this.http.get<Fabproductinfba[]>(this.BASE_URL_DUMMY + params);
  }

  getFindfbaorder(pageno: number, total: number,pagesize: number,searchtext: string,orderby1: string,orderby2: string,channel: string,orderstatus: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<McfOrder[]>(`/new/findfbaorders?pageno=${pageno}&total=${total}&pagesize=${pagesize}&searchtext=${searchtext}&orderby1=${orderby1}&orderby2=${orderby2}&channel=${channel}&orderstatus=${orderstatus}`, { headers: new HttpHeaders().set('Authorization', authToken) });
  }

  getWarehouse() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Warehouse[]>("/warehouse/warehouse", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getStocksummary(params) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Stocksummary[]>("/accountsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getTransfer(pageno: number, total: number, pagesize: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Transfer[]>(`/warehouse/stocktransferitem?pageno=${pageno}&total=${total}&pagesize=${pagesize}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  // getCustomer(params) {
  //   return this.http.get<Customer[]>(this.BASE_URL_DUMMY + params);
  // }

  getPurchaseorder(params) {
    return this.http.get<Purchaseorder[]>(this.BASE_URL_DUMMY + params);
  }

  getManageSupplier(params) {
    return this.http.get<ManageSupplier[]>(this.BASE_URL_DUMMY + params);
  }

  getSupplierfeeds(params) {
    return this.http.get<Supplierfeeds[]>(this.BASE_URL_DUMMY + params);
  }

  getGeneralSetting() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/generalsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingtax() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingtax[]>("/generalsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingcurrency(currency: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingtax[]>(`/savegeneraldetailcurrency?currency=${currency}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getFindsaleproduct(pageno: number, total: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingtax[]>(
      `/findsaleproductreport?pageno=${pageno}&&total=${total}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettingorders(params) {
    return this.http.get<Settingorders[]>(this.BASE_URL_DUMMY + params);
  }

  // getSettinginvoice(params) {
  //    return this.http.get<Settinginvoice[]>(this.BASE_URL_DUMMY + params);
  //  }

  // getSettingattribute(params) {
  //   return this.http.get<Settingattribute[]>(this.BASE_URL_DUMMY + params);
  // }

  // getSettingset(params) {
  //   return this.http.get<Settingset[]>(this.BASE_URL_DUMMY + params);
  // }

  getSettingbulkimport(type: string, tab: string, channelUserId: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingbulkimport[]>(
      `/exportfile?type=${type}&tab=${tab}&channelUserId=${channelUserId}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettingbulkexport(type: string, tab: string, channelUserId: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingbulkexport[]>(
      `/exportfile?type=${type}&tab=${tab}&channelUserId=${channelUserId}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getRemoveBulkimportfile(id: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingbulkimport[]>(
      `/removeimportfile?id=${id}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettingnotification(params) {
    return this.http.get<Settingnotification[]>(this.BASE_URL_DUMMY + params);
  }

  getSettingunusedbarcode(pageno: number, searchtext: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingbulkexport[]>(
      `/findunusedbarcodes?pageno=${pageno}&searchtext=${searchtext}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettingusedbarcode(pageno: number, searchtext: string) {
    // return this.http.get<Settingusedbarcode[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    return this.http.get(
      `/findbarcodes?pageno=${pageno}&searchtext=${searchtext}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettingskubarcode(pageno: number, total: number, value: string) {
    // return this.http.get<Settingskubarcode[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingskubarcode[]>(
      `/findconvertskutobarcodes?pageno=${pageno}&total=${total}&value=${value}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  // getSettingsyncchannel(params) {
  //   return this.http.get<Settingsyncchanel[]>(this.BASE_URL_DUMMY + params);
  // }

  // getSettingexcludesync(params) {
  //   return this.http.get<Settingexcludesync[]>(this.BASE_URL_DUMMY + params);
  // }

  getChannelMarketPlace(params) {
    return this.http.get<ChannelMarketPlace[]>(this.BASE_URL_DUMMY + params);
  }

  getChannelRegistration(params) {
    return this.http.get<ChannelRegistration[]>(this.BASE_URL_DUMMY + params);
  }

  getChannelEcommerce(paramms) {
    return this.http.get<ChannelEcommerce[]>(this.BASE_URL_DUMMY + paramms);
  }

  getChannelAccounting(paramms) {
    return this.http.get<ChannelAccounting[]>(this.BASE_URL_DUMMY + paramms);
  }

  getChannelCrm(params) {
    return this.http.get<ChannelCrm[]>(this.BASE_URL_DUMMY + params);
  }

  getChannelEpos(params) {
    return this.http.get<ChannelEpos[]>(this.BASE_URL_DUMMY + params);
  }

  getChannelAppstore(params) {
    return this.http.get<ChannelAppstore[]>(this.BASE_URL_DUMMY + params);
  }

  getChannelOther(params) {
    return this.http.get<ChannelOther[]>(this.BASE_URL_DUMMY + params);
  }

  // getShippingCourier(params) {
  //   return this.http.get<ShippingCourier[]>(this.BASE_URL_DUMMY + params);
  // }

  getEbayToken(channelId: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/channelintegration/ebaytoken?channelId=${channelId}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getRecentProducts(channelId: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/channelintegration/downloadrecentproducts?channelId=${channelId}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getAllProducts(channelId: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/channelintegration/downloadallproducts?channelId=${channelId}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getEbayTestCon(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/channelintegration/testconnection?id=${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getShippingCourier() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ShippingCourier[]>("/shippingcourier/all", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getShippingCourierfind(courierId: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<ShippingCourier[]>(`/shippingcourier/labelsetup?courierId=${courierId}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingsyncchannel() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingsyncchanel[]>("/synchronizesettings", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingexcludesync() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingexcludesync[]>("/synchronizesettings", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingset() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingset[]>("/editattributeset", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSettingattribute() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingattribute[]>("/editattributeset", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getEditsettingset(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingset[]>(`/editattribute?id=${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getEditsettingattribute(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingattribute[]>(`/editattributeset?id=${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getRemoveattibuteset(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settingattribute[]>(`/removeattributeset?id=${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getRemoveAttribute(id: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post<Settingattribute[]>(
      `/removeattribute?id=${id}`,
      {},
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  saveshippingrules(
    ruleid,
    rulename,
    shippingcarrier,
    shippingservice,
    serviceformat,
    countries,
    postcodes,
    services,
    fromordervalue,
    toordervalue,
    fromshippingcharge,
    toshippingcharge,
    fromweight,
    toweight='',
    fromlength,
    tolength,
    fromwidth,
    towidth,
    fromheight,
    toheight,
    channel,
    sku
  ) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post<Settingattribute[]>(
      `/saveshippingrules?status=true&ruleid=${ruleid}&rulename=${rulename}&shippingcarrier=${shippingcarrier}&shippingservice=${shippingservice}&serviceformat=${serviceformat}&countries=${countries}&postcodes=${postcodes}&services=${services}&fromordervalue=${fromordervalue}&toordervalue=${toordervalue}&fromshippingcharge=${fromshippingcharge}&toshippingcharge=${toshippingcharge}&fromweight=${fromweight}&toweight=${toweight}&fromlength=${fromlength}&tolength=${tolength}&fromwidth=${fromwidth}&towidth=${towidth}&fromheight=${fromheight}&toheight=${toheight}&channel=${channel}&sku=${sku}`,
      {},
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  getSettinginvoice() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Settinginvoice[]>("/updateshippingrules", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getUsersData() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<UsersData[]>("/user", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getMailSetting() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/emailsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getAccountSetting() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/accountsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSupplierSearch(searchvalue: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SuppliersData[]>(`/new/searchSuppliers?searchvalue=${searchvalue}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSupplier() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SuppliersData[]>("new/supplier", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getFeed() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Supplierfeeds[]>("/feed", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getCustomer() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Customer[]>("/customernew", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getUserChannel() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/channeluser", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getReportorderhistory(start: string, end: string, searchdate: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Reportorderhistory[]>(
      `/orderhistory?start=${start}&end=${end}&searchdate=${searchdate}`,
      { headers: new HttpHeaders().set("Authorization", authToken) }
    );
  }

  // getReportorderhistory() {
  //   return this.http.get<Reportorderhistory[]>("/orderhistory");
  // }

  // getInvoice() {
  //   let authToken = localStorage.getItem("userToken");
  //   return this.http.get("/invoice", { headers: new HttpHeaders().set('Authorization', authToken) });
  // }

  getChannelIntegrationList() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/channelintegrationsetting", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getProductCategory() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/productcategory", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getProductNew() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/productnew", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getDashboard() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/dashboardnew", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getLoadorderhistory() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/loadorderhistory", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getLoadsalebycountry() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/loadsalesbycountry", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getListRecentOrders() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/ordersummary", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getListLowStock() {
    let authToken = localStorage.getItem("userToken");
    // const result: any = this.http.get("/inventorysummary", { headers: new HttpHeaders().set('Authorization', authToken) });
    // const result2: DashboardLowStock[] = result?.lowStock || []
    // console.log("result",result)
    // return result2
    return this.http.get("/inventorysummary", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSalesbychannel() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<DashboardLowStock[]>("/loadsalesbychannel", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSubscriptionPlan(currency: string, dev: string, force: boolean, upgrade: boolean) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SubscribtionDetails[]>(`/priceplans?currency=${currency}&dev=${dev}&force=${force}&upgrade=${upgrade}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getSubscriptionData() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SubscribtionDetails[]>("/subscription", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getAccountSettings() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SubscribtionDetails[]>("/myaccountsettings", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getUseredit(id: string, kartzhubUserId: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<SubscribtionDetails[]>(`/edituser?id=${id}&kartzhubUserId=${kartzhubUserId}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getUserremove(id: string) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(`/removeuser?id=${id}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  postUserupdate(body: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/updateuser`,body, { headers: new HttpHeaders().set("Authorization", authToken),});
  }

  postChangeAdminmail(body: any) {
    let authToken = localStorage.getItem("userToken");
    let formData: any = new FormData();
    formData.append("kartzhubUsernew", body)
    return this.http.post(`/changeadminemailsubmit`,body, { headers: new HttpHeaders().set("Authorization", authToken),});
  }

  postGeneralDetails(body: any) {
    let authToken = localStorage.getItem("userToken");
    // let formData: any = new FormData();
    // formData.append("kartzhubUsernew", body)
    return this.http.post(`/savegeneraldetails`,body, { headers: new HttpHeaders().set("Authorization", authToken),});
  }

  getTestsmptcon() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/testsmtpconnection", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getInvoice(params) {
    return this.http.get<InvoicesData[]>(this.BASE_URL_DUMMY + params);
  }

  getMessageCenter(channelid: string, msgStatus: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get<MessageCenter[]>(`/messages?channelid=${channelid}&msgStatus=${msgStatus}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getMessageDetails(id: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get(`/showmessagedetails?id=${id}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getMessageReply(id: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get<MessageOrderDetails[]>(`/replytomessage?id=${id}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getCreateTicket(name: string, email: string, phone: string, reason: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get(`/createticket?name=${name}&email=${email}&phone=${phone}&reason=${reason}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getPhoneSupport(name: string, email: string, phone: string, reason: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get(`/callback?name=${name}&email=${email}&phone=${phone}&reason=${reason}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getMessageOrderDetails(orderItemId: string) {
    // return this.http.get<MessageCenter[]>(this.BASE_URL_DUMMY + params);
    let authToken = localStorage.getItem("userToken");
    // const body = {ids: [ids]}
    return this.http.get<MessageOrderDetails[]>(`/viewOrderDetailsByItemId?orderItemId=${orderItemId}`, {
      headers: new  HttpHeaders().set("Authorization", authToken),
    });
  }

  getTemplateDesigner(params) {
    return this.http.get<TemplateDesigner[]>(this.BASE_URL_DUMMY + params);
  }

  getCreateorder() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Createorder[]>("/new/finddraftorders", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getChannelproductmodel(params) {
    return this.http.get<Channelproductmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getSendmailmodel(ids) {
    let authToken = localStorage.getItem("userToken");
    const body = {ids: [ids]}
    return this.http.post<Sendmailmodel[]>("/new/bulkemail", body, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getDownloadordermodel() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Downloadordermodel[]>("/new/downloadordersfromchannels", {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  postReDownloadordermodel(body,duration:any,downloadorders:any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/applydownloadordersfromchannelid?duration=${duration}&downloadorders=${downloadorders}`,body, { headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  getShipCourier() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<any[]>(`/shippingcourier/all`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  loadCourierShippingservice(body: any, courier: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/loadcuriershippingservices?courier=${courier}`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }
  

  getDispatchconsolenewmodel(params) {
    return this.http.get<Dispatchconsolenew[]>(this.BASE_URL_DUMMY + params);
  }

  getSyncprogressmodel(params) {
    return this.http.get<Syncprogressmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getAddtochannelmodel(params) {
    return this.http.get<Addtochannelmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getUpdateqtyproductmodel(params) {
    return this.http.get<Updateqtyproductmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getAddproductmodel(params) {
    return this.http.get<Addproductmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getManageproductmodel(params) {
    return this.http.get<ManageProductmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getSchedulinglistingmodel(params) {
    return this.http.get<Schedulinglistingmodel[]>(
      this.BASE_URL_DUMMY + params
    );
  }

  getUploadtochannelmodel(params) {
    return this.http.get<Uploadtochannelmodel[]>(this.BASE_URL_DUMMY + params);
  }

  getBulkupdatemodel(params) {
    return this.http.get<Bulkupdatemodel[]>(this.BASE_URL_DUMMY + params);
  }
  
  getPrintdefaultmodel(params) {
    return this.http.get<Bulkupdatemodel[]>(this.BASE_URL_DUMMY + params);
  }

  getSearchData(searchValue) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get("/new/searchcustomer?search="+searchValue, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }
  saveData(body) {
    let authToken = localStorage.getItem("userToken");
    // let formData: any = new FormData();
    return this.http.post(`/new/updatecustomerfororder`,body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }
  /********************Start Common Post Http *******************/
  postHTTPResponseWithToken(url, data) {
    let authToken = localStorage.getItem("userToken");
    //console.log("http send data ", JSON.stringify(data), headers);
    // return this.http.post(this.BASE_URL+url, data, {
    //   headers: new HttpHeaders().set("Authorization", authToken),
    // });
    return this.http.post(url, data, { headers: new HttpHeaders().set("Authorization", authToken) });
  }
/******************** End Common Post Http *******************/
/******************** Start Common Get Http ******************/
  getHTTPResponseWithToken(url) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get(url, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  postConfirmShipment(body) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/confirmshipment`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  getPrintMenu(channelSale) { 
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/loadcuriershippingservices`, channelSale, { headers: new HttpHeaders().set("Authorization", authToken) });
  }
  
  getTaxratemodel(params) {
    return this.http.get<Taxratemodel[]>(this.BASE_URL_DUMMY + params);
  }
  
  getCancelordermodel(ids: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<Cancelordermodel[]>(`/new/findordersforcancel?ids=${ids}`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }

  findOrdersForShipmentByFba(body: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/findordersforshipmentbyfba`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  postPreviewFbaOrders(body: any, centerid: number) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/previewfbaorders?centerid=${centerid}`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  confirmShipmentViaFba(body: any) {
    let authToken = localStorage.getItem("userToken");
    return this.http.post(`/new/confirmshipmentviafba`, body, { headers: new HttpHeaders().set("Authorization", authToken) });
  }

  findUnshippedOrders() {
    let authToken = localStorage.getItem("userToken");
    return this.http.get<any[]>(`/new/findunshippedorders`, {
      headers: new HttpHeaders().set("Authorization", authToken),
    });
  }
  
  getVariationaddproduct(params) {
    return this.http.get<Variationaddproduct[]>(this.BASE_URL_DUMMY + params);
  }
  
  getAttributeaddproduct(params) {
    return this.http.get<Attributeaddproduct[]>(this.BASE_URL_DUMMY + params);
  }
  
  getLinkedproductmodel(params) {
    return this.http.get<Linkedproductmodel[]>(this.BASE_URL_DUMMY + params);
  }
}
