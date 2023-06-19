import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MessageCenter } from 'src/app/services/message-center';
import { UrlAPIService } from 'src/app/services/url-api.service';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { McfOrder } from 'src/app/services/mcf-orders';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import { MatDialog } from '@angular/material/dialog';
import { ViewmessageModalComponent } from '../viewmessage-modal/viewmessage-modal.component';
import { ReplymessageModalComponent } from '../replymessage-modal/replymessage-modal.component';
import { MsgorderdetailsModelComponent } from '../msgorderdetails-model/msgorderdetails-model.component'; 

@Component({
  selector: 'vex-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MessageCenterComponent implements OnInit {

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
  showStatus;
  showChannel;
  elseBlock: any;
  thenBlock: any;

  subject$: ReplaySubject<MessageCenter[]> = new ReplaySubject<MessageCenter[]>(1);
  data$: Observable<MessageCenter[]> = this.subject$.asObservable();
  msg_center: MessageCenter[];

  @Input()
  columns: TableColumn<MessageCenter>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Channel', property: 'channel', type: 'image', visible: true, cssClasses: ['font-medium'] },
    { label: 'Item Ref', property: 'itemId', type: 'button', visible: true },
    { label: 'Message From', property: 'messageFrom', type: 'text', visible: true },
    { label: 'Subject', property: 'messageSubject', type: 'text', visible: true },
    { label: 'Received On', property: 'createdDate', type: 'button', visible: true },
    { label: 'Details', property: 'details', type: 'button', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<MessageCenter> | null;
  selection = new SelectionModel<MessageCenter>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getMessageCenter('','')
      .subscribe((msg_center:any) => {
        // this.subject$.next(msg_center);
        try{
          console.log("temp", msg_center);
          const result: MessageCenter[] = msg_center?.filteredMessages || [];
          console.log("result", result);
          this.subject$.next(result);
        }
        catch(err){
          console.log("errr",err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<MessageCenter[]>(Boolean)
    ).subscribe(msg_center => {
      this.msg_center = msg_center;
      this.dataSource.data = msg_center;
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

  openViewMessage(id, params, subject, from, msgtext, date, channel, replied) {
    this.dialog.open(ViewmessageModalComponent, {
      width: '100%',
      maxWidth: 750,
      data: { id: id, ids: params, msg_subject: subject, msg_from: from, msgtext: msgtext, date: date, channel: channel, reply: replied }
    });
  }

  openReplyModal(params, subject, from) {
    this.dialog.open(ReplymessageModalComponent, {
      width: '100%',
      maxWidth: 550,
      data: { id: params, msg_subject: subject, msg_from: from }
    });
  }

  openOrderDetailsModal(param) {
    this.dialog.open(MsgorderdetailsModelComponent, {
      width: '100%',
      maxWidth: 850,
      data: { id: param }
    });
  }

  onSearchByStatus(e){
    this.showStatus = e;
    console.log(this.showStatus);
    this.urlApi.getMessageCenter('',this.showStatus)
    .subscribe((msg_center:any) => {
      // this.subject$.next(msg_center);
      try{
        console.log("temp", msg_center);
        const result: MessageCenter[] = msg_center?.filteredMessages || [];
        console.log("msg", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }

  onSearchByChannel(e){
    this.urlApi.getMessageCenter('','')
    .subscribe((msg_center:any) => {
      // this.subject$.next(msg_center);
      try{
        console.log("temp", msg_center);
        const result: MessageCenter[] = msg_center?.msgStatuses || [];
        console.log("msg", result);
        this.subject$.next(result);
      }
      catch(err){
        console.log("errr",err);
      }
  });
  }
}
