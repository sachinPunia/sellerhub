import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
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
import { Downloadordermodel } from 'src/app/services/downloadorder-model';
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
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-downloadorder-model',
  templateUrl: './downloadorder-model.component.html',
  styleUrls: ['./downloadorder-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DownloadorderModelComponent implements OnInit {

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

  subject$: ReplaySubject<Downloadordermodel[]> = new ReplaySubject<Downloadordermodel[]>(1);
  data$: Observable<Downloadordermodel[]> = this.subject$.asObservable();
  downloadordermodel: Downloadordermodel[];

  @Input()
  columns: TableColumn<Downloadordermodel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Channel', property: 'type', type: 'image', visible: true, cssClasses: ['font-medium'] },
    { label: 'Name', property: 'name', type: 'text', visible: true },
    { label: 'Select', property: 'select', type: 'button', visible: true },
    // { label: 'Attachments', property: 'attachments', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Downloadordermodel> | null;
  selection = new SelectionModel<Downloadordermodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private cd: ChangeDetectorRef, private urlApi: UrlAPIService,
  private snackbar: MatSnackBar) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  orderid;
  toType;
  selectedRow = {};

  setSelectedRow(row, e) {
    this.selectedRow = e.checked ? row : undefined;
    console.log('selected order', this.selectedRow)
  }

  ngOnInit(): void {
    this.orderid = this.data.orderid;
    console.log("downorder",this.orderid);
    this.urlApi.getDownloadordermodel()
      .subscribe((downloadordermodel) => {
        this.subject$.next(downloadordermodel);

        this.toType = downloadordermodel['type'];
    });


    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Downloadordermodel[]>(Boolean)
    ).subscribe(downloadordermodel => {
      this.downloadordermodel = downloadordermodel;
      this.dataSource.data = downloadordermodel;
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

  reDownload(){
    const data = {
      ids: this.selectedRow['id'],
      duration: '-1',
    };
    console.log(data);
    if(this.selectedRow['id'] == null || undefined || ''){
      alert("Please select an Order");
    }
    else{
      this.urlApi.postReDownloadordermodel(data,-1,100).subscribe((successData: any) => {
        debugger;
        // this.gotoLogin();
        this.snackbar.open(successData.message, "Ok", {
          duration: 10000,
        });
      });
    }

  }


}
