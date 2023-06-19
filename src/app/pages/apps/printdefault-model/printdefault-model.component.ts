// import { Component, OnInit } from '@angular/core';



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
// import { Printdefaultmodel } from 'src/app/services/downloadorder-model';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icAddcircle from '@iconify/icons-ic/add-circle';
import icUparrow from '@iconify/icons-ic/keyboard-arrow-up';
// import { Printdefaultmodel } from 'src/app/services/Printdefaultmodel';
import { Printdefaultmodel } from 'src/app/services/printdefault-model';

@Component({
  selector: 'vex-printdefault-model',
  templateUrl: './printdefault-model.component.html',
  styleUrls: ['./printdefault-model.component.scss'],

  
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PrintdefaultModelComponent implements OnInit {


  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icSearch = icSearch;
  icRefresh = icRefresh;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  icAddcircle = icAddcircle;
  icUparrow = icUparrow;


  subject$: ReplaySubject<Printdefaultmodel[]> = new ReplaySubject<Printdefaultmodel[]>(1);
  data$: Observable<Printdefaultmodel[]> = this.subject$.asObservable();
  Printdefaultmodel: Printdefaultmodel[];



  
  @Input()
  columns: TableColumn<Printdefaultmodel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Channel', property: 'channel', type: 'image', visible: true, cssClasses: ['font-medium'] },
    { label: 'To Email Address', property: 'email', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Enable', property: 'select', type: 'button', visible: true },
    // { label: 'text', property: 'text', type: 'text', visible: true },
    // { label: 'Attachments', property: 'attachments', type: 'text', visible: true }
  ];
    
    // { label: 'Attachments', property: 'attachments', type: 'text', visible: true }
 

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Printdefaultmodel> | null;
  selection = new SelectionModel<Printdefaultmodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  toType = '';
  toText = '';

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getPrintdefaultmodel("printdefault-model.json")
      .subscribe((Printdefaultmodel:any) => {
        this.subject$.next(Printdefaultmodel);
        try{
          console.log("Printdefaultmodel",Printdefaultmodel);
          const result: Printdefaultmodel[] = Printdefaultmodel?.users || [];
          console.log("result", result);
          this.subject$.next(result);

          // this.toText = Printdefaultmodel['name'];

          }
          catch(err){
            console.log("errr", err);
          }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Printdefaultmodel[]>(Boolean)
    ).subscribe(Printdefaultmodel => {
      this.Printdefaultmodel = Printdefaultmodel;
      this.dataSource.data = Printdefaultmodel;
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

}

