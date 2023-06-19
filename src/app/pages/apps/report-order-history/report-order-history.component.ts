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
import { Reportorderhistory } from 'src/app/services/reportorderhistory';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vex-report-order-history',
  templateUrl: './report-order-history.component.html',
  styleUrls: ['./report-order-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ReportOrderHistoryComponent implements OnInit {

  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;

  subject$: ReplaySubject<Reportorderhistory[]> = new ReplaySubject<Reportorderhistory[]>(1);
  data$: Observable<Reportorderhistory[]> = this.subject$.asObservable();
  historyreportorder: Reportorderhistory[];

  reportData;
  reportDatas;
  reportStructure: Reportorderhistory[];
  @Input()
  columns: TableColumn<Reportorderhistory>[] = [
    { label: 'Date', property: 'date', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Sub Total', property: 'subtotal', type: 'text', visible: true },
    { label: 'S&H', property: 'shipping', type: 'text', visible: true },
    { label: 'Discount', property: 'discount', type: 'text', visible: false },
    { label: 'Tax', property: 'tax', type: 'text', visible: true },
    { label: 'Total', property: 'total', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Total %', property: 'totalpercent', type: 'button', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Total (INC TAX)', property: 'totalextax', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Units', property: 'units', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Unit %', property: 'unitspercent', type: 'button', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Price/Units', property: 'price', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Reportorderhistory> | null;
  selection = new SelectionModel<Reportorderhistory>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  searchFrom = '';
  searchTo = '';
  searchDate = '';
  toTotalordervalue;
  toTotalunits;
  toNumberorder;
  toTotalcustomer;
  fromDate;
  toDate;
  searchvalueDate;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  

  ngOnInit(): void {
    this.urlApi.getReportorderhistory(this.searchFrom,this.searchTo,this.searchDate)
      .subscribe((historyreportorder:any) => {
        // this.subject$.next(historyreportorder);
        try{
          console.log("temp", historyreportorder);
          const result: Reportorderhistory[] = historyreportorder?.orderReports || [];
          console.log("result", result);
          this.subject$.next(result);

          this.toTotalordervalue = historyreportorder['totalordervalue'];
          this.toTotalunits = historyreportorder['totalunits'];
          this.toNumberorder = historyreportorder['totalorders'];
          this.toTotalcustomer = historyreportorder['numbercustomers'];
        }
        catch(err){
          console.log("errr",err);
        }
    });
    

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Reportorderhistory[]>(Boolean)
    ).subscribe(historyreportorder => {
      // this.historyreportorder = historyreportorder;
      historyreportorder.push(historyreportorder[0]);
      this.dataSource.data = historyreportorder;
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

  onSearchByFrom(e){
    this.searchFrom = e.target.value.format('YYYY/MM/DD')
  }

  onSearchByTo(e){
    this.searchTo = e.target.value.format('YYYY/MM/DD')
  }

  onSearchByDate(e){
    this.searchDate = e.target.value.format('YYYY/MM/DD')
  }

  onSearch(){
    console.log(this.searchFrom);
    console.log(this.searchTo);
    console.log(this.searchDate)
    this.urlApi.getReportorderhistory(this.searchFrom,this.searchTo,this.searchDate)
      .subscribe((historyreportorder:any) => {
        // this.subject$.next(historyreportorder);
        try{
          console.log("temp", historyreportorder);
          const result: Reportorderhistory[] = historyreportorder?.orderReports || [];
          console.log("result", result);
          this.subject$.next(result);

          this.toTotalordervalue = historyreportorder['totalordervalue'];
          this.toTotalunits = historyreportorder['totalunits'];
          this.toNumberorder = historyreportorder['totalorders'];
          this.toTotalcustomer = historyreportorder['numbercustomers'];
        }
        catch(err){
          console.log("errr",err);
        }
    });
  }

  resetForm() {
    this.fromDate = undefined;
    this.toDate = undefined;
    this.searchvalueDate = undefined;
    window.location.reload();
  };

}
