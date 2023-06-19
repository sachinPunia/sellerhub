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
// import { Uploadtochannelmodel } from 'src/app/services/Uploadtochannelmodel'; 
import { Uploadtochannelmodel } from 'src/app/services/uploadtochannel-model';
// import { Uploadtochannelmodel } from 'src/app/services/updateqtyproducts-model';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icClose from '@iconify/icons-ic/twotone-close';
import icCancel from '@iconify/icons-ic/cancel';

@Component({
  selector: 'vex-uploadtochannel-model',
  templateUrl: './uploadtochannel-model.component.html',
  styleUrls: ['./uploadtochannel-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class UploadtochannelModelComponent implements OnInit {

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
  icClose = icClose;
  icCancel = icCancel;

  subject$: ReplaySubject<Uploadtochannelmodel[]> = new ReplaySubject<Uploadtochannelmodel[]>(1);
  data$: Observable<Uploadtochannelmodel[]> = this.subject$.asObservable();
  Uploadtochannelmodel: Uploadtochannelmodel[];

  @Input()
  columns: TableColumn<Uploadtochannelmodel>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'image', property: 'image_date', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Title', property: 'title', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Selling Price', property: 'sellin_price', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Listing Template', property: 'listing_template', type: 'button', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Status', property: 'status', type: 'text', visible: true },
    // { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Uploadtochannelmodel> | null;
  selection = new SelectionModel<Uploadtochannelmodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getUploadtochannelmodel("uploadtochannel-model.json")
      .subscribe((Uploadtochannelmodel) => {
        this.subject$.next(Uploadtochannelmodel);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Uploadtochannelmodel[]>(Boolean)
    ).subscribe(Uploadtochannelmodel => {
      this.Uploadtochannelmodel = Uploadtochannelmodel;
      this.dataSource.data = Uploadtochannelmodel;
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
