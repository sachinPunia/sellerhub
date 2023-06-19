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
import { Settingtax } from 'src/app/services/setting_tax';  
import { Settingorders } from 'src/app/services/settingorders';  
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRight from '@iconify/icons-ic/round-arrow-right';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-setting-general-setting',
  templateUrl: './setting-general-setting.component.html',
  styleUrls: ['./setting-general-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SettingGeneralSettingComponent implements OnInit {

  // settingtax: Settingtax[];
  // settingorders: Settingorders[];

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
  icRight = icRight;

  subject$: ReplaySubject<Settingtax[]> = new ReplaySubject<Settingtax[]>(1);
  data$: Observable<Settingtax[]> = this.subject$.asObservable();
  settingtax: Settingtax[];

  subject_new$: ReplaySubject<Settingorders[]> = new ReplaySubject<Settingorders[]>(1);
  data_new$: Observable<Settingorders[]> = this.subject_new$.asObservable();
  settingorders: Settingorders[];

  columns: TableColumn<Settingtax>[] = [
    { label: 'Tax Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Rate', property: 'rate', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  columns_new: TableColumn<Settingorders>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Name', property: 'name', type: 'text', visible: true },
    // { label: 'Feed Format', property: 'feed_format', type: 'text', visible: true },
    // { label: 'Rules', property: 'rules', type: 'button', visible: true },
    // { label: 'Status', property: 'status', type: 'text', visible: true },
    // { label: 'Feed URL', property: 'supplier_name', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settingtax> | null;
  selection = new SelectionModel<Settingtax>(true, []);

  dataSource_1: MatTableDataSource<Settingorders> | null;
  selection_1 = new SelectionModel<Settingorders>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  generalSetting;
  showGeneralSetting;
  showCurrency;

  weightKg;
  weightLb;
  lengths;
  heights;
  dimensionUnit;
  widths;
  constructor( private urlApi: UrlAPIService, private router: Router ) { }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  get visibleColumns_new() {
    return this.columns_new.filter(column1 => column1.visible).map(column1 => column1.property);
  }
  ngOnInit(): void {
    this.getSettingtax();
    this.getSettingorders();
    this.getDefaultSetting();
    this.getCurrency();
  }

  getDefaultSetting(){
    this.generalSetting = this.urlApi.getGeneralSetting().subscribe((setting) => {
      this.showGeneralSetting = setting['defaultsetting'];
      console.log(this.showGeneralSetting);
      if (this.showGeneralSetting.weightKg == null){
        this.weightKg = 0;
      }
      else{
        this.weightKg = this.showGeneralSetting.weightKg;
      }
      
      if(this.showGeneralSetting.weightLb == null){
        this.weightLb = 0;
      }
      else{
        this.weightLb = this.showGeneralSetting.weightLb;
      }
      
      if(this.showGeneralSetting.lengths == null){
        this.lengths  = 0;
      }
      else{
        this.lengths  = this.showGeneralSetting.lengths;
      }
      
      if(this.showGeneralSetting.heights == null){
        this.heights  = 0;
      }
      else{
        this.heights  = this.showGeneralSetting.heights;
      }

      if(this.showGeneralSetting.widths == null){
        this.widths   = 0;
      }
      else{
        this.widths   = this.showGeneralSetting.widths;
      }
      this.dimensionUnit = this.showGeneralSetting.dimensionUnit;
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource_1.paginator = this.paginator;
    this.dataSource_1.sort = this.sort;
    this.getDefaultSetting();
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

  getSettingtax() {
    this.urlApi.getSettingtax().subscribe((settingtax) => {
      this.subject$.next(settingtax['taxRates']);
  });

  this.dataSource = new MatTableDataSource();
  
  this.data$.pipe(
    filter<Settingtax[]>(Boolean)
  ).subscribe(settingtax => {
    this.settingtax = settingtax;
    this.dataSource.data = settingtax;
  });

    
  }

  getSettingorders() {
    this.urlApi.getSettingorders("settingorders.json")
      .subscribe((settingorders) => {
        this.subject_new$.next(settingorders);
    });

    this.dataSource_1 = new MatTableDataSource();
    
    this.data_new$.pipe(
      filter<Settingorders[]>(Boolean)
    ).subscribe(settingorders => {
      this.settingorders = settingorders;
      this.dataSource_1.data = settingorders;
    });
  }

  getCurrency(){
    this.urlApi.getGeneralSetting().subscribe((cur) => {
      this.showCurrency = cur['currencyList'];
    });
  }

  isCur;


  onCurrencychange(e){
    this.isCur = e;
    console.log(e);
  }

  saveCurrency(){
    this.urlApi.getSettingcurrency(this.isCur).subscribe((res) => {
      // const result = res;
      console.log(res);
      debugger;
    });
  }

}
