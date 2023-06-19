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
import { Settingattribute } from "src/app/services/setting_attributes";
import { Settingset } from "src/app/services/setting_set";
import icExcel from "@iconify/icons-ic/bookmark-border";
import icPrint from "@iconify/icons-ic/twotone-print";
import { Router } from "@angular/router";

@Component({
  selector: "vex-setting-products-attributes",
  templateUrl: "./setting-products-attributes.component.html",
  styleUrls: ["./setting-products-attributes.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
})
export class SettingProductsAttributesComponent implements OnInit {
  // settingattribute: Settingattribute[];
  // settingset: Settingset[];

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

  subject$: ReplaySubject<Settingattribute[]> = new ReplaySubject<
    Settingattribute[]
  >(1);
  data$: Observable<Settingattribute[]> = this.subject$.asObservable();
  settingattribute: Settingattribute[];

  subject_new$: ReplaySubject<Settingset[]> = new ReplaySubject<Settingset[]>(
    1
  );
  data_new$: Observable<Settingset[]> = this.subject_new$.asObservable();
  settingset: Settingset[];

  columns: TableColumn<Settingattribute>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    // { label: 'Image', property: 'image_data', type: 'button', visible: true },
    {
      label: "Sellershub Name",
      property: "name",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Channel Display Name",
      property: "value1",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Default Value",
      property: "value2",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  columns_new: TableColumn<Settingset>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    {
      label: "Attribute Set Name",
      property: "set_name",
      type: "text",
      visible: true,
    },
    // { label: 'Feed Format', property: 'feed_format', type: 'text', visible: true },
    // { label: 'Rules', property: 'rules', type: 'button', visible: true },
    // { label: 'Status', property: 'status', type: 'text', visible: true },
    // { label: 'Feed URL', property: 'supplier_name', type: 'text', visible: true },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Settingattribute> | null;
  selection = new SelectionModel<Settingattribute>(true, []);

  dataSource_1: MatTableDataSource<Settingset> | null;
  selection_1 = new SelectionModel<Settingset>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  toAtt = "";
  toAttset = "";

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
    this.urlApi.getSettingattribute().subscribe((settingattribute: any) => {
      // this.subject$.next(settingattribute);
      try {
        console.log("temp", settingattribute);
        const result: Settingattribute[] = settingattribute?.attributes || [];
        console.log("result", result);
        this.subject$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<Settingattribute[]>(Boolean))
      .subscribe((settingattribute) => {
        this.settingattribute = settingattribute;
        this.dataSource.data = settingattribute;
      });
  }

  getSettingorders() {
    // this.urlApi.getSupplierfeeds("supplierfeeds.json")
    //     .subscribe((response) => {
    //       console.log(response);
    //       this.supplierfeeds = response;
    //     })

    this.urlApi.getSettingset().subscribe((settingset: any) => {
      // this.subject_new$.next(settingset);
      try {
        console.log("temp", settingset);
        const result: Settingset[] = settingset?.attributeSets || [];
        console.log("result", result);
        this.subject_new$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });

    this.dataSource_1 = new MatTableDataSource();

    this.data_new$
      .pipe(filter<Settingset[]>(Boolean))
      .subscribe((settingset) => {
        this.settingset = settingset;
        this.dataSource_1.data = settingset;
      });
  }

  editAttribute(id: number) {
    this.router.navigate(['/apps/edit-formproduct'], {queryParams:{id}})
    
  }

  editAttributeSet(id: number) {
    this.router.navigate(['/apps/edit-formproduct'], {
      state: { id }
    })
  }

  removeAttributeSet(id: number) {
    this.urlApi.getRemoveattibuteset(id);
  }

  removeAttribute(id: number) {
    this.urlApi.getRemoveAttribute(id).subscribe((removeatt: any) => {
      try {
        this.urlApi.getSettingattribute().subscribe((settingattribute: any) => {
          try {
            const result: Settingattribute[] =
              settingattribute?.attributes || [];
            this.subject$.next(result);
          } catch (err) {
            console.log("errr", err);
          }
        });
      } catch (err) {
        console.log("errr", err);
      }
    });
  }

  toRefresh(){
    window.location.reload();
  }
}
