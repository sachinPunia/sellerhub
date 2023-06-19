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
import { Fabsendtofba } from 'src/app/services/fabsendtofba';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';

@Component({
  selector: 'vex-listing-send-producttofba',
  templateUrl: './listing-send-producttofba.component.html',
  styleUrls: ['./listing-send-producttofba.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ListingSendProducttofbaComponent implements OnInit {

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

  subject$: ReplaySubject<Fabsendtofba[]> = new ReplaySubject<Fabsendtofba[]>(1);
  data$: Observable<Fabsendtofba[]> = this.subject$.asObservable();
  fabsendtofba: Fabsendtofba[];

  @Input()
  columns: TableColumn<Fabsendtofba>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Shipment ID', property: 'shipment_id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Name', property: 'channel', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'From Address', property: 'order_date', type: 'text', visible: true },
    { label: 'Destination Fulfillment Center', property: 'destination', type: 'text', visible: true },
    { label: 'Status', property: 'item', type: 'text', visible: true },
    { label: 'Label Preptype', property: 'label_preptype', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Fabsendtofba> | null;
  selection = new SelectionModel<Fabsendtofba>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getFabsendtofba("fab-sendtofba.json")
      .subscribe((fabsendtofba) => {
        this.subject$.next(fabsendtofba);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Fabsendtofba[]>(Boolean)
    ).subscribe(fabsendtofba => {
      this.fabsendtofba = fabsendtofba;
      this.dataSource.data = fabsendtofba;
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
