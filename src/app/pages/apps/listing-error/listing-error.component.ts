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
import { Listingerror } from 'src/app/services/listingerror';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import faList from '@iconify/icons-fa-solid/list';
import { MatDialog } from '@angular/material/dialog';
import { UpdateqtyproductsModelComponent } from 'src/app/pages/apps/updateqtyproducts-model/updateqtyproducts-model.component';

@Component({
  selector: 'vex-listing-error',
  templateUrl: './listing-error.component.html',
  styleUrls: ['./listing-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingErrorComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icArrowRight = icArrowRight;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  faList = faList;

  subject$: ReplaySubject<Listingerror[]> = new ReplaySubject<Listingerror[]>(1);
  data$: Observable<Listingerror[]> = this.subject$.asObservable();
  listingerror: Listingerror[];

  @Input()
  columns: TableColumn<Listingerror>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'image', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Selling Price', property: 'selling_price', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'button', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'button', visible: true },
    { label: 'Listing Quantity', property: 'listing_quantity', type: 'text', visible: true },
    { label: 'Product ID', property: 'product_id', type: 'text', visible: true },
    { label: 'Errors', property: 'errors', type: 'button', visible: true },
    { label: 'Time', property: 'time', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];
  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Listingerror> | null;
  selection = new SelectionModel<Listingerror>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getListingerror('')
      .subscribe((listingerror) => {
        this.subject$.next(listingerror);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Listingerror[]>(Boolean)
    ).subscribe(listingerror => {
      this.listingerror = listingerror;
      this.dataSource.data = listingerror;
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
