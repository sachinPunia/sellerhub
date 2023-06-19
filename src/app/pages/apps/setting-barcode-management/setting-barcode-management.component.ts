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
import icEdit from '@iconify/icons-fa-solid/pencil-alt';
import icRemove from '@iconify/icons-fa-solid/trash';
import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';
import icCheck from '@iconify/icons-ic/check';
import { Settingunusedbarcode } from 'src/app/services/setting_unused_barcode'; 
import { Settingusedbarcode } from 'src/app/services/setting_used_barcode';  
import { Settingskubarcode } from 'src/app/services/setting_sku_barcode'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icCloudupload from '@iconify/icons-ic/cloud-upload';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ConvertskuModelComponent } from 'src/app/pages/apps/convertsku-model/convertsku-model.component';

@Component({
  selector: 'vex-setting-barcode-management',
  templateUrl: './setting-barcode-management.component.html',
  styleUrls: ['./setting-barcode-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SettingBarcodeManagementComponent implements OnInit {

  // settingunusedbarcode: Settingunusedbarcode[];
  // settingusedbarcode: Settingusedbarcode[];

  icEdit = icEdit;
  icRemove = icRemove;
  icArrowRight = icArrowRight;
  icCheck = icCheck;
  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icCloudupload = icCloudupload


  subject$: ReplaySubject<Settingunusedbarcode[]> = new ReplaySubject<Settingunusedbarcode[]>(1);
  data$: Observable<Settingunusedbarcode[]> = this.subject$.asObservable();
  settingunusedbarcode: Settingunusedbarcode[];

  subject_new$: ReplaySubject<Settingusedbarcode[]> = new ReplaySubject<Settingusedbarcode[]>(1);
  data_new$: Observable<Settingusedbarcode[]> = this.subject_new$.asObservable();
  settingusedbarcode: Settingusedbarcode[];

  subject_2$: ReplaySubject<Settingskubarcode[]> = new ReplaySubject<Settingskubarcode[]>(1);
  data_2$: Observable<Settingskubarcode[]> = this.subject_2$.asObservable();
  settingskubarcode: Settingskubarcode[];

  columns: TableColumn<Settingunusedbarcode>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    // { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'UPC', property: 'upc', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'EAN', property: 'ean', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Status', property: 'status', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Download', property: 'download', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  columns_new: TableColumn<Settingusedbarcode>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Assigned SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'UPC ', property: 'upc', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'EAN', property: 'ean', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Download', property: 'download', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  columns_2: TableColumn<Settingskubarcode>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'UPC ', property: 'upc', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Barcode', property: 'linkSku', type: 'button', visible: true},
    // { label: 'Download', property: 'download', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settingunusedbarcode> | null;
  selection = new SelectionModel<Settingunusedbarcode>(true, []);

  dataSource_1: MatTableDataSource<Settingusedbarcode> | null;
  selection_1 = new SelectionModel<Settingusedbarcode>(true, []);

  dataSource_2: MatTableDataSource<Settingskubarcode> | null;
  selection_2 = new SelectionModel<Settingskubarcode>(true, []);
  Barcode='';
  BarcoeManagement="";
  toSearchtext='';
  toValue='';
  toValueSKU='';



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( private urlApi: UrlAPIService, private router: Router, private dialog: MatDialog ) { }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  get visibleColumns_new() {
    return this.columns_new.filter(column1 => column1.visible).map(column1 => column1.property);
  }

  get visibleColumns_2() {
    return this.columns_2.filter(column2 => column2.visible).map(column2 => column2.property);
  }

  ngOnInit(): void {

    this.getSettingunusedbarcode();
    this.getSettingusedbarcode();
    this.getSettingskubarcode();

    // this.urlApi.getSettingunusedbarcode('')
    //   .subscribe((findbarcodes:any) => {
        // this.subject$.next(stockvreport);
        // try{
        //   // console.log("temp", reportbyproduct);
        //   const result: Settingusedbarcode[] = findbarcodes?.barcodes || [];
        //   debugger;
        //   console.log("result", result);
        //   this.subject$.next(result);

        //   // this.totalStockValue=stockvreport[``]
        // }
        // catch(err){
        //   debugger;
        //   console.log("err1r",err);
        // }
    // });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Settingusedbarcode[]>(Boolean)
    ).subscribe(stockvreport => {
      // this.stockvreport = stockvreport;
      stockvreport.push(stockvreport[0]);
      console.log(stockvreport);
      this.dataSource.data = stockvreport;
    });
}

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource_1.paginator = this.paginator;
    this.dataSource_1.sort = this.sort;

    this.dataSource_2.paginator = this.paginator;
    this.dataSource_2.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
    isAllSelected_new() {
    const numSelected_1 = this.selection_1.selected.length;
    const numRows_1 = this.dataSource_1.data.length;
    return numSelected_1 === numRows_1;
  }
  isAllSelected_2() {
  const numSelected_2 = this.selection_2.selected.length;
  const numRows_2 = this.dataSource_2.data.length;
  return numSelected_2 === numRows_2;
}

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  masterToggle_new() {
    this.isAllSelected_new() ?
      this.selection_1.clear() :
      this.dataSource_1.data.forEach(row => this.selection_1.select(row));
  }

  masterToggle_2() {
    this.isAllSelected_new() ?
      this.selection_2.clear() :
      this.dataSource_2.data.forEach(row => this.selection_2.select(row));
  }

  getSettingunusedbarcode() {
    this.urlApi.getSettingunusedbarcode(1, this.toSearchtext)
    .subscribe((settingunusedbarcode:any) => {
      // this.subject$.next(settingunusedbarcode);
      try{
        // console.log("temp", reportbyproduct);
        const result: Settingusedbarcode[] = settingunusedbarcode?.barcodes || [];
        debugger;
        console.log("result", result);
        this.subject_new$.next(result);

        // this.totalStockValue=stockvreport[``]
      }
      catch(err){
        debugger;
        console.log("err1r",err);
      }
  });

  this.dataSource = new MatTableDataSource();
  
  this.data$.pipe(
    filter<Settingunusedbarcode[]>(Boolean)
  ).subscribe(settingunusedbarcode => {
    this.settingunusedbarcode = settingunusedbarcode;
    this.dataSource.data = settingunusedbarcode;
  });

    
  }

  getSettingusedbarcode() {
    // this.urlApi.getSupplierfeeds("supplierfeeds.json")
    //     .subscribe((response) => {
    //       console.log(response);
    //       this.supplierfeeds = response;
    //     })

    this.urlApi.getSettingusedbarcode(1,this.Barcode)
      .subscribe((settingusedbarcode:any) => {
        // this.subject_new$.next(settingusedbarcode);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingusedbarcode[] = settingusedbarcode?.barcodes || [];
          debugger;
          console.log("result", result);
          this.subject_new$.next(result);

          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
          debugger;
          console.log("err1r",err);
        }
    });

    this.dataSource_1 = new MatTableDataSource();
    
    this.data_new$.pipe(
      filter<Settingusedbarcode[]>(Boolean)
    ).subscribe(settingusedbarcode => {
      // this.settingusedbarcode = settingusedbarcode;
      settingusedbarcode.push(settingusedbarcode[0]);
      this.dataSource_1.data = settingusedbarcode;
    });
  }


  toSearchbyvalue='';
    
  SearchByValue(e){
    this.Barcode = e.target.value;
    console.log("SeachByValue", this.Barcode)
  }

  SearchByValueNew(e){
    this.toSearchtext = e.target.value;
    console.log("SeachByValue", this.toSearchtext)

  }

  onSearchNew(){
    this.urlApi.getSettingunusedbarcode(1, this.toSearchtext)
    .subscribe((settingunusedbarcode:any) => {
      // this.subject$.next(settingunusedbarcode);
      try{
        // console.log("temp", reportbyproduct);
        const result: Settingusedbarcode[] = settingunusedbarcode?.barcodes || [];
        debugger;
        console.log("result", result);
        this.subject_new$.next(result);

        // this.totalStockValue=stockvreport[``]
      }
      catch(err){
        debugger;
        console.log("err1r",err);
      }
  });
  }

  onSearch(){
    this.urlApi.getSettingusedbarcode(1,this.Barcode)
    .subscribe((settingusedbarcode:any) => {
      // this.subject_new$.next(settingusedbarcode);
      try{
        // console.log("temp", reportbyproduct);
        const result: Settingusedbarcode[] = settingusedbarcode?.barcodes || [];
        debugger;
        console.log("result", result);
        this.subject_new$.next(result);

        // this.totalStockValue=stockvreport[``]
      }
      catch(err){
        debugger;
        console.log("err1r",err);
      }
  });
  }

  SearchByValueSKU(e){
    this.toValueSKU = e.target.value;
    console.log("SeachByValueSKU", this.toValueSKU)
    
  }

  onSearchSKU(){
    console.log("SeachByValueSKU", this.toValueSKU)
    this.urlApi.getSettingskubarcode(1, 100, this.toValueSKU)
      .subscribe((settingskubarcode:any) => {
        // this.subject_2$.next(settingskubarcode);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingskubarcode[] = settingskubarcode?.products || [];
          debugger;
          console.log("result", result);
          this.subject_2$.next(result);
  
          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
          debugger;
          console.log("err1r",err);
        }
    });
  }

  getSettingskubarcode() {
    

    this.urlApi.getSettingskubarcode(1, 100, this.toValue)
      .subscribe((settingskubarcode:any) => {
        // this.subject_2$.next(settingskubarcode);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingskubarcode[] = settingskubarcode?.products || [];
          debugger;
          console.log("result", result);
          this.subject_2$.next(result);
  
          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
          debugger;
          console.log("err1r",err);
        }
    });

    this.dataSource_2 = new MatTableDataSource();
    
    this.data_2$.pipe(
      filter<Settingskubarcode[]>(Boolean)
    ).subscribe(settingskubarcode => {
      this.settingskubarcode = settingskubarcode;
      this.dataSource_2.data = settingskubarcode;
    });
  }
 
//   openconvertskuModal(){
//     this.dialog.open(ConvertskuModelComponent, {
//       width: '100%',
//       maxWidth: 850
//     })
// }
}
