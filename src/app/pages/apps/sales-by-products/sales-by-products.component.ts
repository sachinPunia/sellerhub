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
import { ReportByProduct } from 'src/app/services/report-by-product';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vex-sales-by-products',
  templateUrl: './sales-by-products.component.html',
  styleUrls: ['./sales-by-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})



export class SalesByProductsComponent implements OnInit {
  
  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;

  subject$: ReplaySubject<ReportByProduct[]> = new ReplaySubject<ReportByProduct[]>(1);
  data$: Observable<ReportByProduct[]> = this.subject$.asObservable();
  reportbyproduct: ReportByProduct[];

  reportData;
  reportDatas;
  reportStructure: ReportByProduct[];
  @Input()
  columns: TableColumn<ReportByProduct>[] = [
    { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Product', property: 'title', type: 'text', visible: true },
    { label: 'Total', property: 'totalprice', type: 'text', visible: true },
    { label: 'Total %', property: 'pricePercent', type: 'text', visible: true },
    { label: 'Unit', property: 'qty', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Unit %', property: 'qtyPercent', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Price/Units', property: 'price', type: 'text', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<ReportByProduct> | null;
  selection = new SelectionModel<ReportByProduct>(true, []);
  searchBy = '';
  searchValue = '';
  searchFrom = '';
  searchTo = '';
  fromDate;
  toDate;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  toPercentsale;
  toProductsales;
  toPercentsale_new;  
  toUnits;
  toTopproduct;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  

  ngOnInit(): void {
    this.urlApi.getReportByProduct(1, 100, this.searchValue, this.searchBy,this.searchFrom,this.searchTo)
      .subscribe((reportbyproduct: any) => {
        try{
          // console.log("temp", reportbyproduct);
          const result: ReportByProduct[] = reportbyproduct?.productReports || [];
          console.log("result", result);
          this.subject$.next(result);


          console.log(reportbyproduct);
          this.toPercentsale = reportbyproduct['topsalepercent'];
          this.toProductsales    = reportbyproduct['topsalevalue'];
          this.toPercentsale_new         = reportbyproduct['topproductpercent'];
          this.toUnits         = reportbyproduct['topproductunits'];
          this.toTopproduct         = reportbyproduct['topproduct'];
        }
        catch(err){
          console.log("errr",err);
        }
    });

    // this.urlApi.getReportByProduct(1, 100, this.searchValue, this.searchBy).subscribe((reportbyproduct_new) => {
    //   console.log(reportbyproduct_new);
    //   this.toPercentsale = reportbyproduct_new['topsalepercent'];
    //   this.toProductsales    = reportbyproduct_new['topsalevalue'];
    //   this.toPercentsale_new         = reportbyproduct_new['topproductpercent'];
    //   this.toUnits         = reportbyproduct_new['topproductunits'];
    // });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<ReportByProduct[]>(Boolean)
    ).subscribe(reportbyproduct => {
      //this.reportbyproduct = reportbyproduct;
      reportbyproduct.push(reportbyproduct[0]);
      console.log(reportbyproduct);
      this.dataSource.data = reportbyproduct;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSearchByFrom(e){
    this.searchFrom = e.target.value.format('YYYY/MM/DD')
  }

  onSearchByTo(e){
    this.searchTo = e.target.value.format('YYYY/MM/DD')
  }

  onSearchByChange(e) {
    this.searchBy = e;
  }

  onSearchValueChange(e) {
    this.searchValue = e.target.value;
  }

  onSearch() {
    console.log('search by', this.searchBy);
    console.log('search value', this.searchValue);
    console.log('search from', this.searchFrom);
    console.log('search to', this.searchTo);
    this.urlApi.getReportByProduct(1, 100, this.searchValue,this.searchBy,this.searchFrom,this.searchTo)
      .subscribe((reportbyproduct:any) => {
        console.log('data', reportbyproduct);
        // this.subject$.next(reportbyproduct);
        try{
          // console.log("temp", reportbyproduct);
          const result: ReportByProduct[] = reportbyproduct?.productReports || [];
          // console.log("result", result);
          this.subject$.next(result);
          // console.log(reportbyproduct);
          this.toPercentsale = reportbyproduct['topsalepercent'];
          this.toProductsales    = reportbyproduct['topsalevalue'];
          this.toPercentsale_new         = reportbyproduct['topproductpercent'];
          this.toUnits         = reportbyproduct['topproductunits'];
          this.toTopproduct         = reportbyproduct['topproduct'];
        }
        catch(err){
          console.log("errr",err);
        }
    });
  }

  

  resetForm() {
    this.fromDate = undefined;
    this.toDate = undefined;
  };

  // onGenerateReport(){
  //   console.log('search from', this.searchFrom)
  //   console.log('search to', this.searchTo )
  // }

}