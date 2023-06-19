import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import icGroup from "@iconify/icons-ic/twotone-group";
import icPageView from "@iconify/icons-ic/twotone-pageview";
import icCloudOff from "@iconify/icons-ic/twotone-cloud-off";
import icTimer from "@iconify/icons-ic/twotone-timer";
import icSettings from "@iconify/icons-ic/twotone-settings";
import icArchive from "@iconify/icons-ic/twotone-archive";
import icFavorite from "@iconify/icons-ic/twotone-favorite";
import icGrade from "@iconify/icons-ic/twotone-grade";
import faFacebook from "@iconify/icons-fa-brands/facebook-f";
import faTwitter from "@iconify/icons-fa-brands/twitter";
import faInstagram from "@iconify/icons-fa-brands/instagram";
import faPinterest from "@iconify/icons-fa-brands/pinterest-p";
import faGithub from "@iconify/icons-fa-brands/github";
import { defaultChartOptions } from "../../../../@vex/utils/default-chart-options";
import {
  Order,
  tableSalesData,
} from "../../../../static-data/table-sales-data";
import { TableColumn } from "../../../../@vex/interfaces/table-column.interface";
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";
import { stagger80ms } from "../../../../@vex/animations/stagger.animation";
import { scaleIn400ms } from "../../../../@vex/animations/scale-in.animation";
import { fadeInRight400ms } from "../../../../@vex/animations/fade-in-right.animation";

import icSearch from "@iconify/icons-ic/twotone-search";
import icPhoneInTalk from "@iconify/icons-ic/twotone-phone-in-talk";
import icMail from "@iconify/icons-ic/twotone-mail";
import { MatDialog } from "@angular/material/dialog";
import { trackById } from "../../../../@vex/utils/track-by";
import { stagger60ms } from "../../../../@vex/animations/stagger.animation";
import { fadeInUp400ms } from "../../../../@vex/animations/fade-in-up.animation";

import icEdit from "@iconify/icons-ic/twotone-edit";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icAdd from "@iconify/icons-ic/twotone-add";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMap from "@iconify/icons-ic/twotone-map";
import { SelectionModel } from "@angular/cdk/collections";
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icFolder from "@iconify/icons-ic/twotone-folder";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";

import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { MatSelectChange } from "@angular/material/select";

import { Observable, of, ReplaySubject } from "rxjs";
import { filter } from "rxjs/operators";

import { RecentOrders } from "./dashboard.recentorders";
import { DashboardLowStock } from "./dashboard.lowstock";

import { MatTableDataSource } from "@angular/material/table";
import { FormControl } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { UrlAPIService } from "src/app/services/url-api.service";
import { Router } from "@angular/router";
import { PopoverService } from "src/@vex/components/popover/popover.service";
import { RevenuinfoComponent } from "../../apps/revenuinfo/revenuinfo.component";

import { GlobalConstants } from "./global-constants";
import { DateTime } from "luxon";
import icDown from "@iconify/icons-ic/arrow-drop-down";

@Component({
  selector: "vex-dashboard-analytics",
  templateUrl: "./dashboard-analytics.component.html",
  styleUrls: ["./dashboard-analytics.component.scss"],
  animations: [stagger80ms, scaleIn400ms, fadeInRight400ms, fadeInUp400ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "standard",
      } as MatFormFieldDefaultOptions,
    },
  ],
})

export class DashboardAnalyticsComponent implements OnInit {
  trackById = trackById;
  icSearch = icSearch;
  icPhoneInTalk = icPhoneInTalk;
  icMail = icMail;
  icDown = icDown;
  icPhone = icPhone;
  icMap = icMap;
  icEdit = icEdit;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  globalconstants: GlobalConstants = new GlobalConstants();

  tableColumns: TableColumn<Order>[] = [
    {
      label: "",
      property: "status",
      type: "badge",
    },
    {
      label: "PRODUCT",
      property: "name",
      type: "text",
    },
    {
      label: "$ PRICE",
      property: "price",
      type: "text",
      cssClasses: ["font-medium"],
    },
    {
      label: "DATE",
      property: "timestamp",
      type: "text",
      cssClasses: ["text-secondary"],
    },
  ];
  tableData = tableSalesData;

  series: ApexAxisChartSeries = [
    {
      name: "Subscribers",
      data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44],
    },
  ];

  userSessionsSeries: ApexAxisChartSeries = [];

  salesSeries: ApexAxisChartSeries = [];

  pageViewsSeries: ApexAxisChartSeries = [
    {
      name: "Page Views",
      data: [405, 800, 200, 600, 105, 788, 600, 204],
    },
  ];

  uniqueUsersSeries: ApexAxisChartSeries = [
    {
      name: "Unique Users",
      data: [356, 806, 600, 754, 432, 854, 555, 1004],
    },
  ];

  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: "area",
      height: 100,
    },
    colors: ["#ff9800"],
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;

  icSettings = icSettings;
  icArchive = icArchive;
  icFavorite = icFavorite;
  icGrade = icGrade;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faPinterest = faPinterest;
  faInstagram = faInstagram;
  faGithub = faGithub;

  subject$: ReplaySubject<RecentOrders[]> = new ReplaySubject<RecentOrders[]>(
    1
  );
  data$: Observable<RecentOrders[]> = this.subject$.asObservable();
  recentorders: RecentOrders[];

  subject_low$: ReplaySubject<DashboardLowStock[]> = new ReplaySubject<
    DashboardLowStock[]
  >(1);
  data_low$: Observable<DashboardLowStock[]> = this.subject_low$.asObservable();
  dashboard_low_stock: DashboardLowStock[];

  @Input()
  columns: TableColumn<RecentOrders>[] = [
    {
      label: "Date",
      property: "orderDate",
      type: "button",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Status", property: "status", type: "text", visible: true },
    { label: "Channel", property: "channel", type: "text", visible: true },
    { label: "SKU", property: "sku", type: "button", visible: true },
    {
      label: "Name",
      property: "name",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "Price",
      property: "orderPrice",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
  ];

  column_low_stock: TableColumn<DashboardLowStock>[] = [
    {
      label: "ID",
      property: "id",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "SKU", property: "sku", type: "text", visible: true },
    {
      label: "Product",
      property: "title",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "Stock",
      property: "qty",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "Level",
      property: "minimumQty",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
  ];

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  pageSizeLow = 5;
  pageSizeOptionsLow: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<RecentOrders> | null;
  selection = new SelectionModel<RecentOrders>(true, []);

  dataSourceLowStock: MatTableDataSource<DashboardLowStock> | null;
  selectionLowStock = new SelectionModel<DashboardLowStock>(true, []);

  searchCtrl = new FormControl();
  dataGrid;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild("MatPaginatorLow", { static: true }) paginator_low: MatPaginator;
  @ViewChild("MatSortLow", { static: true }) sort_low: MatSort;

  @ViewChild('infoRevenue') infoRevenue: ElementRef<HTMLElement>;


  /**
   * Parameter for
   * Generate Chart
   */

  type: string;
  data: any = [];
  columnNames: any;
  options: any;
  salesSeriesOptions: any;
  userSessionsSeriesOptions: any;
  width: number;
  height: number;
  userLoginName: string;
  totSalesOrders;
  totUnitSold;
  totLow;

  toID;
  toTitle;
  toSKU;
  toQTY;
  toOrder;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private urlApi: UrlAPIService,
    private popoverService: PopoverService
  ) {}
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsLow() {
    return this.column_low_stock
      .filter((column_low_stock) => column_low_stock.visible)
      .map((column_low_stock) => column_low_stock.property);
  }

  showdata() {
    this.urlApi.getListRecentOrders().subscribe((recentorders) => {
      this.dataGrid = recentorders;
      console.log(this.dataGrid);
    });
  }
  openRevenuePopover() {
    setTimeout(() => {
      let el: HTMLElement = this.infoRevenue.nativeElement;
      el.click();
    }, 1000);
  }


  ngOnInit() {
    this.checkIsLogin();
    this.showdata();
    this.openRevenuePopover();
    this.urlApi.getDashboard().subscribe((dashboard) => {
      console.log(dashboard);
      this.totSalesOrders = dashboard["totalorders"];
      this.totUnitSold = dashboard["totalunits"];
      this.totLow = dashboard["totallowstock"];
    });
    // getLoadorderhistory
    this.urlApi.getSalesbychannel().subscribe((salebychannel: any) => {
      let chartData: any = [];
      salebychannel.dataList.forEach((element: any) => {
        chartData.push([element.channel, element.value]);
      });
      this.createChart(chartData);
    });

    this.urlApi.getLoadorderhistory().subscribe((loadorderhistory: any) => {
      console.log("loadorderhistory", loadorderhistory);
      // let chartData_new: any = [];
      // loadorderhistory.dataList.forEach((element:any) => {
      //   chartData_new.push([element.count])
      // });
      // this.createChart(chartData_new);
      this.userSessionsSeriesOptions = {
        grid: {
          show: true,
          strokeDashArray: 5,
          padding: {
            left: 20,
          },
        },
        chart: {
          type: "area",
          height: 384,
          sparkline: {
            enabled: false,
          },
          zoom: {
            enabled: true,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 90, 100],
          },
        },
        colors: ["#f0702c", "#0c1c44"],
        // labels: loadorderhistory.dataList.filter(fData=>!!fData.date).map(data=>DateTime.fromFormat(data.date, 'dd-MM-yyyy').toJSDate()),
        labels: loadorderhistory.dataList
          .filter((fData) => !!fData.date)
          .map(
            (data) =>
              +DateTime.fromFormat(data.date, "dd-MM-yyyy")
                .plus({ day: 1 })
                .toJSDate()
          ),
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: true,
          },
        },
        legend: {
          show: true,
          itemMargin: {
            horizontal: 4,
            vertical: 4,
          },
        },
      };
      this.userSessionsSeries = [
        {
          name: "Sales",
          data: loadorderhistory.dataList
            .filter((fData) => !!fData.date)
            .map((data) => data.count),
        },
      ];
      console.log("userserieslabels", this.userSessionsSeriesOptions.labels);
      console.log("userseries", this.userSessionsSeries);
    });

    this.urlApi.getLoadsalebycountry().subscribe((loadsalebycountry: any) => {
      console.log("loadsalebycountry", loadsalebycountry);
      this.salesSeriesOptions = {
        grid: {
          show: true,
          strokeDashArray: 3,
          padding: {
            left: 16,
          },
        },
        chart: {
          type: "bar",
          height: 385,
          sparkline: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          width: 2,
        },
        colors: ["#0c1c44", "#0c1c44"],
        labels: loadsalebycountry.dataList
          .filter((fData) => !!fData.country)
          .map((data) => data.country),
        xaxis: {
          type: "category",
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: true,
          },
        },
      };
      this.salesSeries = [
        {
          name: "Sales",
          data: loadsalebycountry.dataList
            .filter((fData) => !!fData.country)
            .map((data) => data.count),
        },
      ];
      console.log("salesSeriesOptions", this.salesSeriesOptions);
      console.log("salesSeries", this.salesSeries);
    });

    setTimeout(() => {
      const temp = [
        {
          name: "Subscribers",
          data: [55, 213, 55, 0, 213, 55, 33, 55],
        },
        {
          name: "",
        },
      ];
    }, 3000);

    /**
     * Recent Orders Data
     */
    this.urlApi.getListRecentOrders().subscribe((recentorders: any) => {
      // this.subject$.next(recentorders);
      try {
        console.log("dashboard_low_stock", recentorders);
        const result: RecentOrders[] = recentorders?.orderSummary || [];
        console.log("result", result);
        this.subject$.next(result);
      } catch (err) {
        console.log("errr", err);
      }
    });
    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<RecentOrders[]>(Boolean))
      .subscribe((recentorders) => {
        this.recentorders = recentorders;
        this.dataSource.data = recentorders;
      });
    /**
     * EOF Recent Orders Data
     */

    /**
     * Low Stock Product
     */
    this.urlApi.getListLowStock().subscribe((dashboard_low_stock: any) => {
      try {
        console.log("dashboard_low_stock", dashboard_low_stock);
        const result: DashboardLowStock[] = dashboard_low_stock?.lowStock || [];
        console.log("result", result);
        this.subject_low$.next(result);
        // dashboard_low_stock..map((item)=>{ return console.log(item.sku)})
        // this.toID = dashboard_low_stock['id'];
        // this.toSKU = dashboard_low_stock['sku'];
        // this.toTitle = dashboard_low_stock['title']
        // this.toQTY = dashboard_low_stock['qty'];
        // this.toOrder = dashboard_low_stock['minimumQty'];
      } catch (err) {
        console.log("errr", err);
      }
    });

    this.dataSourceLowStock = new MatTableDataSource();
    this.data_low$
      .pipe(filter<DashboardLowStock[]>(Boolean))
      .subscribe((dashboard_low_stock) => {
        console.log("temp", dashboard_low_stock);
        this.dashboard_low_stock = dashboard_low_stock;
        this.dataSourceLowStock.data = dashboard_low_stock;
      });
  }

  openInforevenue(origin: ElementRef | HTMLElement) {
    this.popoverService.open({
      content: RevenuinfoComponent,
      origin,
      position: [
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
        },
        {
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top",
        },
      ],
    });
  }

  checkIsLogin() {
    this.userLoginName = localStorage.getItem("userLoginName");
    if (this.userLoginName == "" || this.userLoginName == undefined) {
      this.router.navigateByUrl("/login");
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceLowStock.paginator = this.paginator_low;
    this.dataSourceLowStock.sort = this.sort_low;
  }

  createChart(chartData: any) {
    this.type = "PieChart";
    this.data = chartData;
    this.columnNames = ["Channel", "Percentage"];
    this.options = {
      colors: [
        "#0c1c44",
        "#00e676",
        "#f0702c",
        "#0288d1",
        "#3d5afe",
        "#e64a19",
        "#e64a39",
      ],
      is3D: true,
      legend: { position: "bottom" },
    };
    this.width = 450;
    this.height = 500;
  }

  // onFilterChange(value: string) {
  //   if (!this.dataSource) {
  //     return;
  //   }
  //   value = value.trim();
  //   // value = value.toLowerCase();
  //   this.dataSource.filter = value;
  // }

  getDataDashboard() {}
}
