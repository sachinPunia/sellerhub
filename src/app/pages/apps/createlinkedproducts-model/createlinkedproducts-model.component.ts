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
// import { Createlinkedproductsmodel } from 'src/app/services/downloadorder-model';
import { Createlinkedproductsmodel } from 'src/app/services/createlinkedproducts-model';
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
import icRight from '@iconify/icons-ic/chevron-right';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateqtyproductsModelComponent } from 'src/app/pages/apps/updateqtyproducts-model/updateqtyproducts-model.component';

@Component({
  selector: 'vex-createlinkedproducts-model',
  templateUrl: './createlinkedproducts-model.component.html',
  styleUrls: ['./createlinkedproducts-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CreatelinkedproductsModelComponent implements OnInit {

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
  icRight = icRight;
  orderid;

  subject$: ReplaySubject<Createlinkedproductsmodel[]> = new ReplaySubject<Createlinkedproductsmodel[]>(1);
  data$: Observable<Createlinkedproductsmodel[]> = this.subject$.asObservable();
  Createlinkedproductsmodel: Createlinkedproductsmodel[];

  @Input()
  columns: TableColumn<Createlinkedproductsmodel>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Linked SKU', property: 'linkSku', type: 'text', visible: true },
    { label: 'Edit', property: 'edit', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Createlinkedproductsmodel> | null;
  selection = new SelectionModel<Createlinkedproductsmodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void { 
    this.orderid = this.data.orderid;
    console.log("linkid",this.orderid);

    this.urlApi.getCreatelinkedproductmodel(this.orderid)
      .subscribe((Createlinkedproductsmodel:any) => {
        // this.subject$.next(Createlinkedproductsmodel);
        try {
          const result: Createlinkedproductsmodel[] = Createlinkedproductsmodel?.kartzhubProducts || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Createlinkedproductsmodel[]>(Boolean)
    ).subscribe(Createlinkedproductsmodel => {
      this.Createlinkedproductsmodel = Createlinkedproductsmodel;
      this.dataSource.data = Createlinkedproductsmodel;
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

  openUpdateqtyproductsModal(){
    this.dialog.open(UpdateqtyproductsModelComponent, {
      width: '100%',
      maxWidth: 950
    })
  }

}
