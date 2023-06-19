import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';

import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import { Observable, ReplaySubject } from 'rxjs';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { Customer } from 'src/app/services/customer';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'vex-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

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

  subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
  data$: Observable<Customer[]> = this.subject$.asObservable();
  customer: Customer[];

  @Input()
  columns: TableColumn<Customer>[] = [
 
    { label: 'PRIORITY', property: 'priority', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'EMAIL', property: 'email', type: 'text', visible: true },
    { label: 'NAME', property: 'firstName', type: 'text', visible: true },
    { label: 'ADDRESS', property: 'addressline1', type: 'text', visible: true },
    { label: 'COUNTRY', property: 'country', type: 'text', visible: true },
    { label: 'NOTES', property: 'notes', type: 'text', visible: true },
    { label: 'ACTIONS', property: 'action', type: 'button', visible: true },
   
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Customer> | null;
  selection = new SelectionModel<Customer>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  ngOnInit(): void {
    this.urlApi.getCustomer()
      .subscribe((customer) => {
        this.subject$.next(customer);
        console.log(customer);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Customer[]>(Boolean)
    ).subscribe(customer => {
      this.customer = customer;
      this.dataSource.data = customer;
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
