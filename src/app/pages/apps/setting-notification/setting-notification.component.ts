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
import { Settingnotification } from 'src/app/services/setting_notification'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icSetting from '@iconify/icons-ic/settings';
import { NotificationsettingModelComponent } from 'src/app/pages/apps/notificationsetting-model/notificationsetting-model.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Notificationsetting1ModelComponent } from 'src/app/pages/apps/notificationsetting1-model/notificationsetting1-model.component';
import { Notificationsetting0ModelComponent } from 'src/app/pages/apps/notificationsetting0-model/notificationsetting0-model.component';



@Component({
  selector: 'vex-setting-notification',
  templateUrl: './setting-notification.component.html',
  styleUrls: ['./setting-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SettingNotificationComponent implements OnInit {

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
  icSetting = icSetting;

  subject$: ReplaySubject<Settingnotification[]> = new ReplaySubject<Settingnotification[]>(1);
  data$: Observable<Settingnotification[]> = this.subject$.asObservable();
  settingnotification: Settingnotification[];

  @Input()
  columns: TableColumn<Settingnotification>[] = [
    { label: 'Notification Type', property: 'notification_type', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settingnotification> | null;
  selection = new SelectionModel<Settingnotification>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( private urlApi: UrlAPIService, private router: Router, private dialog: MatDialog ) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getSettingnotification("setting_notification.json")
      .subscribe((settingnotification) => {
        this.subject$.next(settingnotification);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Settingnotification[]>(Boolean)
    ).subscribe(settingnotification => {
      this.settingnotification = settingnotification;
      this.dataSource.data = settingnotification;
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

  notificationsettingmodel(){
    this.dialog.open(NotificationsettingModelComponent, {
      width: '100%',
      maxWidth: 850
    })
}

notificationsetting1model(){
  this.dialog.open(Notificationsetting1ModelComponent, {
    width: '100%',
    maxWidth: 850
  })
}

notificationsetting0model(){
  this.dialog.open(Notificationsetting0ModelComponent, {
    width: '100%',
    maxWidth: 850
  })
}


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

      
  }
}
