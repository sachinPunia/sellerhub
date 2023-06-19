import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icExcel  from '@iconify/icons-ic/bookmark-border'
import icPrint from '@iconify/icons-ic/twotone-print';
import icRemove from '@iconify/icons-ic/remove-shopping-cart';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icRefresh from '@iconify/icons-ic/refresh';
import icSearch from '@iconify/icons-ic/search';
import icDownload from '@iconify/icons-ic/cloud-download';
import icAdd from '@iconify/icons-ic/twotone-add';
import faUpload from '@iconify/icons-fa-solid/upload';
import { Schedulinglistingmodel } from 'src/app/services/schedulinglisting-model';
import { Observable, ReplaySubject } from 'rxjs';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vex-schedulelisting-model',
  templateUrl: './schedulelisting-model.component.html',
  styleUrls: ['./schedulelisting-model.component.scss']
})
export class SchedulelistingModelComponent implements OnInit {

  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icSearch = icSearch;
  icRefresh = icRefresh;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  icRemove = icRemove;
  faUpload = faUpload;

  subject$: ReplaySubject<Schedulinglistingmodel[]> = new ReplaySubject<Schedulinglistingmodel[]>(1);
  data$: Observable<Schedulinglistingmodel[]> = this.subject$.asObservable();
  Schedulinglistingmodel: Schedulinglistingmodel[];

  @Input()
  columns: TableColumn<Schedulinglistingmodel>[] = [
    { label: 'Schedule Date', property: 'schedule_date', type: 'button', visible: true, cssClasses: ['font-medium'] },
    { label: 'Time(Hour)', property: 'hour', type: 'button', visible: true },
    { label: 'Time(Minute)', property: 'min', type: 'button', visible: true },
    { label: 'Time Zone', property: 'time_zone', type: 'button', visible: true }
  ];
  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Schedulinglistingmodel> | null;
  selection = new SelectionModel<Schedulinglistingmodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.urlApi.getSchedulinglistingmodel("schedulinglisting-model.json")
      .subscribe((Schedulinglistingmodel) => {
        this.subject$.next(Schedulinglistingmodel);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Schedulinglistingmodel[]>(Boolean)
    ).subscribe(Schedulinglistingmodel => {
      this.Schedulinglistingmodel = Schedulinglistingmodel;
      this.dataSource.data = Schedulinglistingmodel;
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
