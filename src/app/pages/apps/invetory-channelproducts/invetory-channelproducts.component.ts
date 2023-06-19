import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCheck from '@iconify/icons-ic/check';
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
import { Channelproducts } from 'src/app/services/channelroducts'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icDelete from '@iconify/icons-fa-solid/trash-alt';
import faExchange from '@iconify/icons-fa-solid/exchange-alt';
import faUpload from '@iconify/icons-fa-solid/upload';
import faClock from '@iconify/icons-fa-solid/clock';
import faList from '@iconify/icons-fa-solid/list';
import faTimes from '@iconify/icons-fa-solid/times';
import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { CurrencyconverterModelComponent } from 'src/app/pages/apps/currencyconverter-model/currencyconverter-model.component';
import { SchedulelistingModelComponent } from 'src/app/pages/apps/schedulelisting-model/schedulelisting-model.component';
import { ListnowModelComponent } from 'src/app/pages/apps/listnow-model/listnow-model.component';
import { UpdateqtyproductsModelComponent } from 'src/app/pages/apps/updateqtyproducts-model/updateqtyproducts-model.component';


@Component({
  selector: 'vex-invetory-channelproducts',
  templateUrl: './invetory-channelproducts.component.html',
  styleUrls: ['./invetory-channelproducts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class InvetoryChannelproductsComponent implements OnInit {

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
  icCheck = icCheck;
  icDelete = icDelete;
  faExchange = faExchange;
  faUpload = faUpload;
  faClock = faClock;
  faList = faList;
  faTimes = faTimes;
  icArrowRight = icArrowRight;
  searchBy = '0';
  searchByInput = '';
  reviseInput = '';
  selectedRow = {};
  selectedId = '';
  priceType = '';
  Orderid;
  showMe:boolean=false;


  subject$: ReplaySubject<Channelproducts[]> = new ReplaySubject<Channelproducts[]>(1);
  data$: Observable<Channelproducts[]> = this.subject$.asObservable();
  channelproducts: Channelproducts[];

  @Input()
  columns: TableColumn<Channelproducts>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'image_data', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true },
    { label: 'Product ID', property: 'product_id', type: 'text', visible: true },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Selling Price', property: 'sellingPrice', type: 'text', visible: true },
    { label: 'Channel', property: 'channel', type: 'image', visible: true },
    { label: 'Total Quantity', property: 'total_quantity', type: 'button', visible: true },
    { label: 'Listing Quantity', property: 'listingQty', type: 'text', visible: true },
    // { label: 'Listing Status', property: 'listing_status', type: 'text', visible: true },
    { label: 'Modified Date', property: 'modifiedDate', type: 'button', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Channelproducts> | null;
  selection = new SelectionModel<Channelproducts>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog, private snackbar: MatSnackBar) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getChannelproducts(1,10000,10000,'0','')
      .subscribe((channelproducts:any) => {
        // this.subject$.next(channelproducts);
        try {
          const result: Channelproducts[] = channelproducts?.channelProducts || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Channelproducts[]>(Boolean)
    ).subscribe(channelproducts => {
      this.channelproducts = channelproducts;
      this.dataSource.data = channelproducts;
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

  openCurrencyConverterModal(){
    this.dialog.open(CurrencyconverterModelComponent, {
      width: '100%',
      maxWidth: 550
    })
  }

  openScheduleListingModal(){
    this.dialog.open(SchedulelistingModelComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  openListnowModal(){
    this.dialog.open(ListnowModelComponent, {
      width: '100%',
      maxWidth: 650
    })
  }

  openUpdateqtyproductsModal(){
    this.dialog.open(UpdateqtyproductsModelComponent, {
      width: '100%',
      maxWidth: 950
    })
  }

  toggleTag(){
    this.showMe =! this.showMe
  }

  onSearchByChange(e) {
    this.searchBy = e;
  }

  onSearch() {
    console.log(this.searchBy);
    console.log(this.searchByInput);
    this.urlApi.getChannelproducts(1,10000,10000,this.searchBy,this.searchByInput)
      .subscribe((channelproducts:any) => {
        // this.subject$.next(channelproducts);
        try {
          const result: Channelproducts[] = channelproducts?.channelProducts || [];
          console.log("result", result);
          this.subject$.next(result);
  
        } catch (err) {
          console.log("errr", err);
        }
    });
  }

  setSelectedRow(row, e) {
    this.selectedRow = e.checked ? row : undefined;
    this.selectedId = this.selectedRow['id'];
    console.log('selected row', this.selectedId);
  }

  onPricetype(e){
    this.priceType = e;
  }

  onIncreaseBulkreviseprice(){
    console.log('revise',this.reviseInput);
    console.log('id',this.selectedId);
    console.log('type',this.priceType);
    this.urlApi.getBulkreviseprice(this.selectedId,'increase',this.reviseInput,this.priceType,'1','100')
      .subscribe((channelproducts:any) => {
        this.subject$.next(channelproducts);
        console.log(channelproducts);
        this.snackbar.open(channelproducts.data, "Ok", {
          duration: 10000,
        });
        setTimeout(()=>{
            
          }, 3000);
    });
  }

  onDecreaseBulkreviseprice(){
    console.log('revise',this.reviseInput);
    console.log('id',this.selectedId);
    console.log('type',this.priceType);
    this.urlApi.getBulkreviseprice(this.selectedId,'decrease',this.reviseInput,this.priceType,'1','100')
      .subscribe((channelproducts:any) => {
        this.subject$.next(channelproducts);
        console.log(channelproducts);
        this.snackbar.open(channelproducts.data, "Ok", {
          duration: 10000,
        });
        setTimeout(()=>{
            
          }, 3000);
    });
  }
}
