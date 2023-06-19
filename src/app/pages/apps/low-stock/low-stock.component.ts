import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { LowStock } from 'src/app/services/low-stock';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vex-low-stock',
  templateUrl: './low-stock.component.html',
  styleUrls: ['./low-stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LowStockComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;

  subject$: ReplaySubject<LowStock[]> = new ReplaySubject<LowStock[]>(1);
  data$: Observable<LowStock[]> = this.subject$.asObservable();
  LowStock: LowStock[];

  reportData;
  reportDatas;
  // reportStructure: LowStock[];
  @Input()
  columns: TableColumn<LowStock>[] = [
    { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Product', property: 'title', type: 'text', visible: true },
    { label: 'Available Stock', property: 'qty', type: 'text', visible: true },
    { label: 'Low Alert Level', property: 'minimumQty', type: 'text', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<LowStock> | null;
  selection = new SelectionModel<LowStock>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  toSearchbyValue = '';

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getReportlowStock(1, 100000, this.toSearchbyValue)
      .subscribe((LowStock:any) => {
        try{
          console.log("temp", LowStock);
          const result: LowStock[] = LowStock?.productReports || [];
          console.log("result", result);
          this.subject$.next(result);
        }
        catch(err){
          console.log("errr",err);
        }
    });

    this.dataSource = new MatTableDataSource();
    // this.dataSource.LowStock = LowStock['productReportsobj']
  
    this.data$.pipe(
      filter<LowStock[]>(Boolean)
    ).subscribe(LowStock => {
      // this.LowStock = LowStock;
      LowStock.push(LowStock[0]);
      this.dataSource.data = LowStock;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  onSearchValueChange(e){
    this.toSearchbyValue = e.target.value;
    console.log("value", this.toSearchbyValue);
  }

  onSearch(){
    console.log("onSearch", this.toSearchbyValue);
    this.urlApi.getReportlowStock(1, 100, this.toSearchbyValue)
      .subscribe((LowStock:any) => {
        try{
          console.log("temp", LowStock);
          const result: LowStock[] = LowStock?.productReports || [];
          console.log("result", result);
          this.subject$.next(result);
        }
        catch(err){
          console.log("errr",err);
        }
    });
  }
  
}
