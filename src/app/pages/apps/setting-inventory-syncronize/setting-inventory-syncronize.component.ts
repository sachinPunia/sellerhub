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
import { Settingexcludesync } from 'src/app/services/setting_exclude_sync';  
import { Settingsyncchanel } from 'src/app/services/setting_sync_channel'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icCheckcircle from '@iconify/icons-ic/check-circle';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-setting-inventory-syncronize',
  templateUrl: './setting-inventory-syncronize.component.html',
  styleUrls: ['./setting-inventory-syncronize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SettingInventorySyncronizeComponent implements OnInit {

  // settingsyncchanel: Settingsyncchanel[];
  // settingexcludesync: Settingexcludesync[];

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
  icCheckcircle = icCheckcircle;
  selectedRow = {};
  rows = [];


  subject$: ReplaySubject<Settingsyncchanel[]> = new ReplaySubject<Settingsyncchanel[]>(1);
  data$: Observable<Settingsyncchanel[]> = this.subject$.asObservable();
  settingsyncchanel: Settingsyncchanel[];

  subject_new$: ReplaySubject<Settingexcludesync[]> = new ReplaySubject<Settingexcludesync[]>(1);
  data_new$: Observable<Settingexcludesync[]> = this.subject_new$.asObservable();
  settingexcludesync: Settingexcludesync[];

  columns: TableColumn<Settingsyncchanel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    // { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'Channel Name', property: 'type', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Synchronize', property: 'enable', type: 'button', visible: true },
  ];

  columns_new: TableColumn<Settingexcludesync>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    // { label: 'Rules', property: 'rules', type: 'button', visible: true },
    // { label: 'Status', property: 'status', type: 'text', visible: true },
    // { label: 'Feed URL', property: 'supplier_name', type: 'text', visible: true },
    { label: 'Remove', property: 'remove', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settingsyncchanel> | null;
  selection = new SelectionModel<Settingsyncchanel>(true, []);

  dataSource_1: MatTableDataSource<Settingexcludesync> | null;
  selection_1 = new SelectionModel<Settingexcludesync>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( private urlApi: UrlAPIService, private router: Router ) { }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  get visibleColumns_new() {
    return this.columns_new.filter(column1 => column1.visible).map(column1 => column1.property);
  }
  ngOnInit(): void {
    this.getSettingsyncchannel();
    this.getSettingorders();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource_1.paginator = this.paginator;
    this.dataSource_1.sort = this.sort;
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

  getSettingsyncchannel() {
    this.urlApi.getSettingsyncchannel()
    .subscribe((settingsyncchanel:any) => {
      // this.subject$.next(settingsyncchanel);
      try{
        console.log("temp", settingsyncchanel);
        const result_1: Settingsyncchanel[] = settingsyncchanel?.channelUsersall || [];
        console.log("result", result_1);
        this.subject$.next(result_1);
      }
      catch(err){
        console.log("errr",err);
      }
  });

  this.dataSource = new MatTableDataSource();
  
  this.data$.pipe(
    filter<Settingsyncchanel[]>(Boolean)
  ).subscribe(settingsyncchanel => {
    this.settingsyncchanel = settingsyncchanel;
    this.dataSource.data = settingsyncchanel;
  });

    
  }

  getSettingorders() {

    this.urlApi.getSettingexcludesync()
      .subscribe((settingexcludesync:any) => {
        // this.subject_new$.next(settingexcludesync);
        try{
          console.log("temp", settingexcludesync);
          const res: Settingexcludesync[] = settingexcludesync?.listOfSku || [];
          console.log("result_1", res);
          this.subject_new$.next(res);
        }
        catch(err){
          console.log("errr",err);
        }
    });

    this.dataSource_1 = new MatTableDataSource();
    
    this.data_new$.pipe(
      filter<Settingexcludesync[]>(Boolean)
    ).subscribe(settingexcludesync => {
      this.settingexcludesync = settingexcludesync;
      this.dataSource_1.data = settingexcludesync;
    });
  }

  setSelectedRow(row, e) {
    this.selectedRow = e.checked ? row : undefined;
    console.log('selected row', this.selectedRow['id']);
    this.rows.push(this.selectedRow);
    console.log('rows array', this.rows);
  }
}
