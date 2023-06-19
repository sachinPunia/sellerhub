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
import { ReportStockValue } from 'src/app/services/report-stock-value';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';

@Component({
  selector: 'vex-stock-value-report',
  templateUrl: './stock-value-report.component.html',
  styleUrls: ['./stock-value-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class StockValueReportComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;

  subject$: ReplaySubject<ReportStockValue[]> = new ReplaySubject<ReportStockValue[]>(1);
  data$: Observable<ReportStockValue[]> = this.subject$.asObservable();
  stockvreport: ReportStockValue[];

  @Input()
  columns: TableColumn<ReportStockValue>[] = [
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Title', property: 'title', type: 'text', visible: true },
    { label: 'Available Qty', property: 'qty', type: 'text', visible: true },
    { label: 'ITEM COST', property: 'costPrice', type: 'button', visible: true },
    { label: 'Stock Value', property: 'stockValue', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<ReportStockValue> | null;
  selection = new SelectionModel<ReportStockValue>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  toSearchVaule = '';
  toValue;
  pageNumber = 1;
  listLength


  ngOnInit(): void {
    this.loadStockvalue();
    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<ReportStockValue[]>(Boolean)
    ).subscribe(stockvreport => {
      this.stockvreport = stockvreport;
      console.log(stockvreport);
      this.dataSource.data = stockvreport;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPaginateChange(e){
    // debugger;
    this.pageNumber = e.pageIndex + 1;
    this.loadStockvalue();
  }

  loadStockvalue(){
    this.urlApi.getStockValueReport(this.pageNumber,10,10000,this.toSearchVaule)
      .subscribe((stockvreport:any) => {
        this.listLength = stockvreport.page.totalResults
        // this.subject$.next(stockvreport);
        try{
          // console.log("temp", reportbyproduct);
          const result: ReportStockValue[] = stockvreport?.products || [];
          // debugger;
          console.log("result", result);
          this.subject$.next(result);
          this.toValue = stockvreport.page.totalResults;
        }
        catch(err){
          // debugger;
          console.log("errr",err);
        }
    });
  }

  SearchByValue(e){
    this.toSearchVaule = e.target.value;
    console.log("SeachByValue", this.toSearchVaule)
  }

  onSearch(){
    this.urlApi.getStockValueReport(1,100,100,this.toSearchVaule)
    .subscribe((stockvreport:any) => {
      // this.subject$.next(stockvreport);
      try{
        // console.log("temp", reportbyproduct);
        const result: ReportStockValue[] = stockvreport?.products || [];
        // debugger;
        console.log("result", result);
        this.subject$.next(result);
      }
      catch(err){
        // debugger;
        console.log("errr",err);
      }
  });
  }

}
