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
import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';
import { Listedproduct } from 'src/app/services/listedproduct';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import faFile from '@iconify/icons-fa-solid/file';
import faExcel from '@iconify/icons-fa-solid/file-excel';
import faPluscircle from '@iconify/icons-fa-solid/plus-circle';
import faCloudupload from '@iconify/icons-fa-solid/cloud-upload-alt';
import faSitemap from '@iconify/icons-fa-solid/sitemap';
import faMoney from '@iconify/icons-fa-solid/money-bill';
import faSlider from '@iconify/icons-fa-solid/sliders-h';
import { MatDialog } from '@angular/material/dialog';
import { AddtochannelModelComponent } from 'src/app/pages/apps/addtochannel-model/addtochannel-model.component';
import { UploadtochannelModelComponent } from 'src/app/pages/apps/uploadtochannel-model/uploadtochannel-model.component';
import { BulkupdateModelComponent } from 'src/app/pages/apps/bulkupdate-model/bulkupdate-model.component';

@Component({
  selector: 'vex-listing-listed-product',
  templateUrl: './listing-listed-product.component.html',
  styleUrls: ['./listing-listed-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingListedProductComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icArrowRight = icArrowRight;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  faFile = faFile;
  faExcel = faExcel;
  faPluscircle = faPluscircle;
  faCloudupload = faCloudupload;
  faSitemap = faSitemap;
  faMoney = faMoney;
  faSlider = faSlider;

  showMe:boolean=false;
  showMetoo:boolean=false;

  subject$: ReplaySubject<Listedproduct[]> = new ReplaySubject<Listedproduct[]>(1);
  data$: Observable<Listedproduct[]> = this.subject$.asObservable();
  listedproduct: Listedproduct[];

  @Input()
  columns: TableColumn<Listedproduct>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image', type: 'text', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Selling Price', property: 'selling_price', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'image', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'text', visible: true },
    { label: 'Listing Quantity', property: 'listing_quantity', type: 'text', visible: true },
    { label: 'Product ID', property: 'product_id', type: 'text', visible: true },
    { label: 'Listing Status', property: 'listing_status', type: 'text', visible: true },
    { label: 'Time', property: 'time', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Listedproduct> | null;
  selection = new SelectionModel<Listedproduct>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getListedproduct('')
      .subscribe((listedproduct) => {
        this.subject$.next(listedproduct);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Listedproduct[]>(Boolean)
    ).subscribe(listedproduct => {
      this.listedproduct = listedproduct;
      this.dataSource.data = listedproduct;
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

  openAddtochannelModal(){
    this.dialog.open(AddtochannelModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openUploadtochannelModal(){
    this.dialog.open(UploadtochannelModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openBulkupdatesModal(){
    this.dialog.open(BulkupdateModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  toggleTag(){
    this.showMe =! this.showMe;
  }

  toggleTagnew(){
    this.showMetoo =! this.showMetoo;
  }

}
