import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icCheck from '@iconify/icons-ic/check';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { Purchaseorder } from 'src/app/services/purchaseorder'; 
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vex-invetory-purchaseorder',
  templateUrl: './invetory-purchaseorder.component.html',
  styleUrls: ['./invetory-purchaseorder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class InvetoryPurchaseorderComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icCheck= icCheck;

  subject$: ReplaySubject<Purchaseorder[]> = new ReplaySubject<Purchaseorder[]>(1);
  data$: Observable<Purchaseorder[]> = this.subject$.asObservable();
  Purchaseorder: Purchaseorder[];

  reportData;
  reportDatas;
  reportStructure: Purchaseorder[];
  @Input()
  columns: TableColumn<Purchaseorder>[] = [
    { label: 'Order ID', property: 'order_id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Supplier Email', property: 'supplier_email', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Order Status', property: 'order_status', type: 'text', visible: true },
    { label: 'Order Placed Date', property: 'order_placed_on', type: 'text', visible: true },
    { label: 'Stock Expected On', property: 'stock_expected_on', type: 'text', visible: true },
    { label: 'Amount', property: 'amount', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Purchaseorder> | null;
  selection = new SelectionModel<Purchaseorder>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getPurchaseorder("purchaseorder.json")
      .subscribe((Purchaseorder) => {
        this.subject$.next(Purchaseorder);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Purchaseorder[]>(Boolean)
    ).subscribe(Purchaseorder => {
      this.Purchaseorder = Purchaseorder;
      this.dataSource.data = Purchaseorder;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}
