import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import icRefresh from "@iconify/icons-ic/refresh";
import icSearch from "@iconify/icons-ic/search";
import icDownload from "@iconify/icons-ic/cloud-download";
import icAdd from "@iconify/icons-ic/twotone-add";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { Observable, ReplaySubject } from "rxjs";
import { UrlAPIService } from "src/app/services/url-api.service";
import { filter } from "rxjs/operators";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMail from "@iconify/icons-ic/twotone-mail";
import icMap from "@iconify/icons-ic/twotone-map";
import icEdit from "@iconify/icons-fa-solid/pencil-alt";
import icRemove from "@iconify/icons-fa-solid/trash";
import icArrowRight from "@iconify/icons-ic/sharp-arrow-right";
import icCheck from "@iconify/icons-ic/check";
import { Settingbulkimport } from "src/app/services/setting_bulkimport";
import { Settingbulkexport } from "src/app/services/setting_bulkexport";
import icExcel from "@iconify/icons-ic/bookmark-border";
import icPrint from "@iconify/icons-ic/twotone-print";
import { Router } from "@angular/router";

@Component({
  selector: "vex-setting-bulk-actions",
  templateUrl: "./setting-bulk-actions.component.html",
  styleUrls: ["./setting-bulk-actions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
})
export class SettingBulkActionsComponent implements OnInit {
  // settingbulkimport: Settingbulkimport[];
  // settingbulkexport: Settingbulkexport[];

  icEdit = icEdit;
  icRemove = icRemove;
  icArrowRight = icArrowRight;
  icCheck = icCheck;
  icRefresh = icRefresh;
  icSearch = icSearch;
  icDownload = icDownload;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icAdd = icAdd;
  icExcel = icExcel;
  icPrint = icPrint;
  removeId;
  fileType;

  subject$: ReplaySubject<Settingbulkimport[]> = new ReplaySubject<
    Settingbulkimport[]
  >(1);
  data$: Observable<Settingbulkimport[]> = this.subject$.asObservable();
  settingbulkimport: Settingbulkimport[];

  subject_new$: ReplaySubject<Settingbulkexport[]> = new ReplaySubject<
    Settingbulkexport[]
  >(1);
  data_new$: Observable<Settingbulkexport[]> = this.subject_new$.asObservable();
  settingbulkexport: Settingbulkexport[];

  columns: TableColumn<Settingbulkimport>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    // { label: 'Image', property: 'image_data', type: 'button', visible: true },
    {
      label: "Upload File ",
      property: "fileUrl",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Upload Time",
      property: "uploadTime",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "File Type",
      property: "fileType",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Status",
      property: "status",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  columns_new: TableColumn<Settingbulkexport>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    {
      label: "Request Time ",
      property: "uploadTime",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Export Type",
      property: "exportType",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Status",
      property: "status",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Download",
      property: "downloadLink",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  fileList: any = [];

  dataSource: MatTableDataSource<Settingbulkimport> | null;
  selection = new SelectionModel<Settingbulkimport>(true, []);

  dataSource_1: MatTableDataSource<Settingbulkexport> | null;
  selection_1 = new SelectionModel<Settingbulkexport>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  toType='';
  
  constructor(private urlApi: UrlAPIService, private router: Router) {}
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumns_new() {
    return this.columns_new
      .filter((column1) => column1.visible)
      .map((column1) => column1.property);
  }
  ngOnInit(): void {
    this.getSettingtax();
    this.getSettingorders();
    this.getBulkImport();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource_1.paginator = this.paginator;
    this.dataSource_1.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  isAllSelected_new() {
    const numSelected_1 = this.selection_1.selected.length;
    const numRows_1 = this.dataSource_1.data.length;
    return numSelected_1 === numRows_1;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  masterToggle_new() {
    this.isAllSelected_new()
      ? this.selection_1.clear()
      : this.dataSource_1.data.forEach((row) => this.selection_1.select(row));
  }

  getSettingtax() {
    this.urlApi
      .getSettingbulkimport(this.toType,'','')
      .subscribe((settingbulkimport:any) => {
        // this.subject$.next(settingbulkimport);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingbulkimport[] = settingbulkimport?.importfiles || [];
           //debugger;
          console.log("result", result);
          this.subject$.next(result);

          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
           //debugger;
          console.log("err1r",err);
        }
      });

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<Settingbulkimport[]>(Boolean))
      .subscribe((settingbulkimport) => {
        this.settingbulkimport = settingbulkimport;
        this.dataSource.data = settingbulkimport;
      });
  }

  getSettingorders() {
    // this.urlApi.getSupplierfeeds("supplierfeeds.json")
    //     .subscribe((response) => {
    //       console.log(response);
    //       this.supplierfeeds = response;
    //     })

    this.urlApi
      .getSettingbulkexport(this.toType,'','')
      .subscribe((settingbulkexport:any) => {
        // this.subject_new$.next(settingbulkexport);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingbulkexport[] = settingbulkexport?.exportfiles || [];
           //debugger;
          console.log("result", result);
          this.subject_new$.next(result);

          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
           //debugger;
          console.log("err1r",err);
        }
      });

    this.dataSource_1 = new MatTableDataSource();

    this.data_new$
      .pipe(filter<Settingbulkexport[]>(Boolean))
      .subscribe((settingbulkexport) => {
        this.settingbulkexport = settingbulkexport;
        this.dataSource_1.data = settingbulkexport;
      });
  }

  selectFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.fileList = element.files;
  }

  onSearchByFileType(e){
    this.fileType = e;
    console.log(this.fileType);
  }

  uploadFile() {
    if (this.fileList.length) {
      this.urlApi.postBulkimport(this.fileType, this.fileList[0])
        .subscribe((settingbulkexport) => {
          console.log(settingbulkexport);
          this.getBulkImport();
          // this.subject_new$.next(settingbulkexport);
        });
    }
  }

  getBulkImport(){
    this.urlApi
      .getSettingbulkimport(this.toType,'','')
      .subscribe((settingbulkimport:any) => {
        // this.subject$.next(settingbulkimport);
        try{
          // console.log("temp", reportbyproduct);
          const result: Settingbulkimport[] = settingbulkimport?.importfiles || [];
           //debugger;
          console.log("result", result);
          this.subject$.next(result);

          // this.totalStockValue=stockvreport[``]
        }
        catch(err){
           //debugger;
          console.log("err1r",err);
        }
      });

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<Settingbulkimport[]>(Boolean))
      .subscribe((settingbulkimport) => {
        this.settingbulkimport = settingbulkimport;
        this.dataSource.data = settingbulkimport;
      });
    
  }

  removeBulkimport(id){
    this.removeId = id;
    console.log(this.removeId);
    this.urlApi.getRemoveBulkimportfile(this.removeId).subscribe((removeimport:any) => {
      try{
        // console.log("temp", reportbyproduct);
        const result: Settingbulkimport[] = removeimport?.importfiles || [];
         //debugger;
        console.log("result", result);
        this.subject$.next(result);

        // this.totalStockValue=stockvreport[``]
      }
      catch(err){
         //debugger;
        console.log("err1r",err);
      }
    })
  }
}
