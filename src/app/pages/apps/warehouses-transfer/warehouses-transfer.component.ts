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
import { Transfer } from 'src/app/services/transfer'; 
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-warehouses-transfer',
  templateUrl: './warehouses-transfer.component.html',
  styleUrls: ['./warehouses-transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class WarehousesTransferComponent implements OnInit {

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

  subject$: ReplaySubject<Transfer[]> = new ReplaySubject<Transfer[]>(1);
  data$: Observable<Transfer[]> = this.subject$.asObservable();
  transfer: Transfer[];

  @Input()
  columns: TableColumn<Transfer>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Image', property: 'imageUrl', type: 'button', visible: true },
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Title', property: 'title', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Source', property: 'srcwarehousename', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Destination', property: 'dstwarehousename', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Quantity', property: 'transferQuantity', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Initiated On', property: 'inititateDate', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Status', property: 'status', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Transfer> | null;
  selection = new SelectionModel<Transfer>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getTransfer(1,100,100)
      .subscribe((transfer:any) => {
        // this.subject$.next(transfer);
        try {
          // console.log("subscription", subscription);
          const result: any = transfer?.transfers || [];
          console.log("result", result);
          this.subject$.next(result);
          debugger;
        } catch (err) {
          console.log("errr", err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Transfer[]>(Boolean)
    ).subscribe(transfer => {
      this.transfer = transfer;
      this.dataSource.data = transfer;
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
