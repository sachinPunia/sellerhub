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
import { MatDialog } from '@angular/material/dialog';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { Products } from 'src/app/services/product';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icEdit from '@iconify/icons-ic/edit';

import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';
import icMoney from '@iconify/icons-ic/monetization-on'
import icProcess from '@iconify/icons-ic/all-inclusive';
import icTruck from '@iconify/icons-ic/track-changes';
import icList from '@iconify/icons-ic/list';
import icCube from '@iconify/icons-ic/account-box';
import icDelete from '@iconify/icons-fa-solid/trash-alt';
import icAdd1 from '@iconify/icons-ic/add';

import { SyncprogressModelComponent } from 'src/app/pages/apps/syncprogress-model/syncprogress-model.component';
import { AddtochannelModelComponent } from 'src/app/pages/apps/addtochannel-model/addtochannel-model.component';
import { CreatelinkedproductsModelComponent } from 'src/app/pages/apps/createlinkedproducts-model/createlinkedproducts-model.component';
import { AddproductModelComponent } from 'src/app/pages/apps/addproduct-model/addproduct-model.component';
import { ManageproductModelComponent } from 'src/app/pages/apps/manageproduct-model/manageproduct-model.component';
import { LinkedproductsModelComponent } from 'src/app/pages/apps/linkedproducts-model/linkedproducts-model.component';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'vex-invetory-products',
  templateUrl: './invetory-products.component.html',
  styleUrls: ['./invetory-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class InvetoryProductsComponent implements OnInit {

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
  icEdit = icEdit;
  icArrowRight = icArrowRight;
  icMoney = icMoney;
  icProcess = icProcess;
  icTruck = icTruck;
  icList = icList;
  icCube = icCube;
  icDelete = icDelete;
  icAdd1 = icAdd1;
  selectedRow = {};
  selectedId = '';
  searchBy = '';
  searchByInput = '';
  toChannel;
  showChannel;
  showChannelId;

  subject$: ReplaySubject<Products[]> = new ReplaySubject<Products[]>(1);
  data$: Observable<Products[]> = this.subject$.asObservable();
  list_products: Products[];

  @Input()
  columns: TableColumn<Products>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'VARIATIONS', property: 'variations', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'button', visible: true },
    { label: 'TITLE', property: 'title', type: 'text', visible: true },
    { label: 'QTY', property: 'qty', type: 'text', visible: true },
    { label: 'PRICE', property: 'sellingPrice', type: 'text', visible: true },
    { label: 'LAST UPDATE', property: 'lastModifiedDate', type: 'button', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Products> | null;
  selection = new SelectionModel<Products>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog, private snackbar: MatSnackBar) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getProducts(1,10000,10000,'all',0,'0','','all','all','all_supplier',false,false,true,false)
      .subscribe((list_products:any) => {
        // this.subject$.next(list_products);
        try {
          const result: Products[] = list_products?.products || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
    this.getShippingCourier();
    this.getChannel();

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Products[]>(Boolean)
    ).subscribe(list_products => {
      this.list_products = list_products;
      this.dataSource.data = list_products;
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

  setSelectedRow(row, e) {
    this.selectedRow = e.checked ? row : undefined;
    this.selectedId = this.selectedRow['id'];
    console.log('selected row', this.selectedId);
  }

  excludeSKU(){
    if(Object.keys(this.selectedRow).length == 0){
      alert('Please select an Order');
    }
    else{
      this.urlApi.getExcludeSku(this.selectedId, '')
        .subscribe((list_products:any) => {
          this.subject$.next(list_products);
          console.log(list_products);
         
      });

      this.urlApi.getProducts(1,10000,10000,'all',0,'0','','all','all','all_supplier',false,false,true,false)
      .subscribe((list_products:any) => {
        // this.subject$.next(list_products);
        try {
          const result: Products[] = list_products?.products || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
    }
  }

  removeProduct(){
    if(Object.keys(this.selectedRow).length == 0){
      alert('Please select an Order');
    }
    else{
      this.urlApi.postRemoveproduct(this.selectedId, '1', '100', false).subscribe((res:any) => {
        console.log(res);
        this.snackbar.open(res.data, "Ok", {
          duration: 10000,
        });
        this.urlApi.getProducts(1,10000,10000,'all',0,'0','','all','all','all_supplier',false,false,true,false)
        .subscribe((list_products:any) => {
          // this.subject$.next(list_products);
          try {
            const result: Products[] = list_products?.products || [];
            console.log("result", result);
            this.subject$.next(result);
    
          } catch (err) {
            console.log("errr", err);
          }
        });
      })
    }
  }

  onSearchByChange(e) {
    this.searchBy = e;
  }

  onSearch() {
    console.log(this.searchBy);
    console.log(this.searchByInput);
    this.urlApi.getProducts(1,10000,10000,'all',0,this.searchBy,this.searchByInput,'all','all','all_supplier',false,false,true,false)
      .subscribe((list_products:any) => {
        // this.subject$.next(list_products);
        try {
          const result: Products[] = list_products?.products || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
  }

  onSearchByChannel(e){
    this.toChannel= e;
    // alert(this.toChannel);
    this.urlApi.getProducts(1,10000,10000,'all',0,this.searchBy,this.searchByInput,'all','all','all_supplier',false,false,true,false)
      .subscribe((list_products:any) => {
        // this.subject$.next(list_products);
        try {
          const result: Products[] = list_products?.products || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });

  }

  getShippingCourier(){
    // this.urlApi.getUserChannel().subscribe((cur) => {
    //   // const result = cur;
      
    //   this.showChannel = cur;
    //   this.showChannelId = cur['type'];
    //   console.log("channel",this.showChannel);
    //   console.log("id",this.showChannelId);
    // });
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

  openSyncprogressModal(){
    this.dialog.open(SyncprogressModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openAddtochannelModal(){
    this.dialog.open(AddtochannelModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openCreatelinkedproductModal(orderid){
    this.dialog.open(CreatelinkedproductsModelComponent, {
      width: '100%',
      maxWidth: 850,
      data: { orderid: orderid }
    })
  }

  openAddproductModal(){
    this.dialog.open(AddproductModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openManageproductModal(){
    this.dialog.open(ManageproductModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openLinkedProductModal(){
    this.dialog.open(LinkedproductsModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }
}
