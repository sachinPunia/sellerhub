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
import { Settinginvoice } from 'src/app/services/setting-invoice'; 
import { filter } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import icEdit from '@iconify/icons-ic/edit';


@Component({
  selector: 'vex-setting-invoice',
  templateUrl: './setting-invoice.component.html',
  styleUrls: ['./setting-invoice.component.scss']
})
export class SettingInvoiceComponent implements OnInit {

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
  icEdit = icEdit;

  subject$: ReplaySubject<Settinginvoice[]> = new ReplaySubject<Settinginvoice[]>(1);
  data$: Observable<Settinginvoice[]> = this.subject$.asObservable();
  Settinginvoice: Settinginvoice[];

  @Input()
  columns: TableColumn<Settinginvoice>[] = [
    { label: 'RULE NAME', property: 'ruleName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'MODIFED DATE', property: 'modifiedDate', type: 'text', visible: true },
    { label: 'COURIER', property: 'carrier', type: 'text', visible: true },
    { label: 'SERVICE', property: 'service', type: 'text', visible: true },
    { label: 'STATUS', property: 'status', type: 'text', visible: true },
    { label: 'ACTION', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settinginvoice> | null;
  selection = new SelectionModel<Settinginvoice>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getSettinginvoice()
      .subscribe((Settinginvoice:any) => {
        // this.subject$.next(Settinginvoice);
        try{
          console.log("temp", Settinginvoice);
          const result: Settinginvoice[] = Settinginvoice?.shippingRulesList || [];
          console.log("result", result);
          this.subject$.next(result);
        }
        catch(err){
          console.log("errr",err);
        }
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Settinginvoice[]>(Boolean)
    ).subscribe(Settinginvoice => {
      this.Settinginvoice = Settinginvoice;
      this.dataSource.data = Settinginvoice;
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
