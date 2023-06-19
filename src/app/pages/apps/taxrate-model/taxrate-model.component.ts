import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
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
// import { Taxratemodel } from 'src/app/services/sendmail-model'; 
import { Taxratemodel } from 'src/app/services/taxrate-model';
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
import icAddcircle from '@iconify/icons-ic/add-circle';
import faRightangle from '@iconify/icons-fa-solid/angle-right';
import faEdit from '@iconify/icons-fa-solid/edit';
import faTimes from '@iconify/icons-fa-solid/times';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'vex-taxrate-model',
  templateUrl: './taxrate-model.component.html',
  styleUrls: ['./taxrate-model.component.scss']
})
export class TaxrateModelComponent implements OnInit {

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
  icAddcircle = icAddcircle;
  faRightangle = faRightangle;
  faEdit = faEdit;
  faTimes = faTimes;
  selected = {};
  showMe:boolean = false;
  showMenot:boolean = true;

  subject$: ReplaySubject<Taxratemodel[]> = new ReplaySubject<Taxratemodel[]>(1);
  data$: Observable<Taxratemodel[]> = this.subject$.asObservable();
  Taxratemodel: Taxratemodel[];

  @Input()
  columns: TableColumn<Taxratemodel>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Tax Name', property: 'tax_name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Rate', property: 'rate', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true }
  ];

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Taxratemodel> | null;
  selection = new SelectionModel<Taxratemodel>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef, private urlApi: UrlAPIService, private snackbar: MatSnackBar) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  Orderid;

  ngOnInit(): void {
    this.urlApi.getTaxratemodel("taxrate-model.json")
      .subscribe((Taxratemodel) => {
        this.subject$.next(Taxratemodel);
    });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Taxratemodel[]>(Boolean)
    ).subscribe(Taxratemodel => {
      this.Taxratemodel = Taxratemodel;
      this.dataSource.data = Taxratemodel;
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

  setSelectedRow(){
    this.showMe =! this.showMe;
    this.showMenot =! this.showMenot
    console.log(this.showMe);
  }

}
