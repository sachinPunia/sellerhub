import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import icLayers from "@iconify/icons-ic/twotone-layers";
import icAssigment from "@iconify/icons-ic/twotone-assignment";
import { Icon } from "@visurel/iconify-angular";
import icContactSupport from "@iconify/icons-ic/twotone-contact-support";
import icContacts from "@iconify/icons-ic/twotone-contacts";
import icAssessment from "@iconify/icons-ic/twotone-assessment";
import icBook from "@iconify/icons-ic/twotone-book";
import icBeenhere from "@iconify/icons-ic/twotone-beenhere";
import icStars from "@iconify/icons-ic/twotone-star";
import icBusinessCenter from "@iconify/icons-ic/twotone-business-center";
import { UrlAPIService } from "src/app/services/url-api.service";
import { SubscribtionDetails } from "src/app/services/subscribtions-details";
import { InvoicesData } from "src/app/services/invoices-data";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { Observable, ReplaySubject } from "rxjs";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { filter } from "rxjs/operators";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { PopoverService } from "src/@vex/components/popover/popover.service";
import { MegaMenuComponent } from "../../../../../src/@vex/components/mega-menu/mega-menu.component";
import { MatDialog } from "@angular/material/dialog";
import { SubscriptionModalComponent } from "../subscription-modal/subscription-modal.component";
import { Router } from "@angular/router";
import faTimes from "@iconify/icons-fa-solid/times";
import faCreditCard from "@iconify/icons-fa-solid/credit-card";
import faRight from "@iconify/icons-fa-solid/angle-right";
// import { MatDialog } from "@angular/material/dialog";
import { DelaccountModelComponent } from 'src/app/pages/apps/delaccount-model/delaccount-model.component';
import { SubscriptionscancelModelComponent } from 'src/app/pages/apps/subscriptionscancel-model/subscriptionscancel-model.component'; 

@Component({
  selector: "vex-subscribtion",
  templateUrl: "./subscribtion.component.html",
  styleUrls: ["./subscribtion.component.scss"],
  animations: [stagger60ms, fadeInUp400ms],
})
export class SubscribtionComponent implements OnInit {
  icBeenhere = icBeenhere;
  icStars = icStars;
  icBusinessCenter = icBusinessCenter;
  isActive;
  faTimes = faTimes;
  faCreditCard = faCreditCard;
  faRight = faRight;
  isMember;
  isName;

  subject$: ReplaySubject<SubscribtionDetails[]> = new ReplaySubject<
    SubscribtionDetails[]
  >(1);
  data$: Observable<SubscribtionDetails[]> = this.subject$.asObservable();
  subscription: SubscribtionDetails[];

  @Input()
  columns: TableColumn<SubscribtionDetails>[] = [
    {
      label: "Date",
      property: "startDate",
      type: "button",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Plan", property: "plan", type: "button", visible: true },
    { label: "Status", property: "status", type: "button", visible: true },
    {
      label: "Payment Method",
      property: "paymentProcessor",
      type: "text",
      visible: true,
    },
    {
      label: "Expired On",
      property: "endDate",
      type: "button",
      visible: true,
    },
    { label: "Action", property: "action", type: "button", visible: true },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<SubscribtionDetails> | null;
  selection = new SelectionModel<SubscribtionDetails>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   *
   * Invoices Data
   */

  subject_invoice$: ReplaySubject<InvoicesData[]> = new ReplaySubject<
    InvoicesData[]
  >(1);
  data_invoice$: Observable<InvoicesData[]> =
    this.subject_invoice$.asObservable();
  subscription_invoice: InvoicesData[];

  @Input()
  columns_invoice: TableColumn<InvoicesData>[] = [
    {
      label: "Name",
      property: "name",
      type: "button",
      visible: true,
      cssClasses: ["font-medium"],
    },
    { label: "Number", property: "number", type: "button", visible: true },
    {
      label: "Description",
      property: "description",
      type: "text",
      visible: true,
    },
    { label: "Date", property: "createdDate", type: "text", visible: true },
    {
      label: "Amount",
      property: "amountReceived",
      type: "button",
      visible: true,
    },
    { label: "Due", property: "amountDue", type: "button", visible: true },
    { label: "View", property: "view", type: "button", visible: true },
  ];

  pageSize_invoice = 10;
  pageSizeOptions_invoice: number[] = [5, 10, 20, 50];

  dataSource_invoice: MatTableDataSource<InvoicesData> | null;
  selection_invoice = new SelectionModel<InvoicesData>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator_invoice: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort_invoice: MatSort;

  /**
   *
   * EOF Invoices Data
   */

  constructor(
    private router: Router,
    private urlApi: UrlAPIService,
    private popoverService: PopoverService,
    private dialog: MatDialog
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsInvoices() {
    return this.columns_invoice
      .filter((column_invoice) => column_invoice.visible)
      .map((column_invoice) => column_invoice.property);
  }

  ngOnInit(): void {
    this.getDataSubscribtion();
    this.getInvoiceData();
  }

  /**
   * Invoice Data
   */

  getInvoiceData() {
    this.urlApi.getSubscriptionData().subscribe((subscription_invoice: any) => {
      let result: InvoicesData[] = subscription_invoice?.invoices || [];
      result = result.map((r: any) => {
        r.name = r.amountDue === 0 ? "Invoice Paid" : "Invoice Due";
        return r;
      });
      this.subject_invoice$.next(result);
    });

    this.dataSource_invoice = new MatTableDataSource();

    this.data_invoice$
      .pipe(filter<InvoicesData[]>(Boolean))
      .subscribe((subscription_invoice) => {
        this.subscription_invoice = subscription_invoice;
        this.dataSource_invoice.data = subscription_invoice;
      });
  }

  getDataSubscribtion() {
    this.urlApi.getSubscriptionData().subscribe((subscription: any) => {
      // this.subject$.next(subscription);
      try {
        console.log("subscription", subscription);
        const result_new: any = subscription?.kartzhubUser || [];
        const result: any = subscription?.subscriptions || [];
        console.log("result", result);
        this.subject$.next(result);
        this.isActive = result[0].status;
        this.isMember = result_new['createdDate'];
        // debugger;
      } catch (err) {
        console.log("errr", err);
      }
    });

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter<SubscribtionDetails[]>(Boolean))
      .subscribe((subscription) => {
        this.subscription = subscription;
        this.dataSource.data = subscription;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource_invoice.paginator = this.paginator_invoice;
    this.dataSource_invoice.sort = this.sort_invoice;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  openMegaMenu(origin: ElementRef | HTMLElement) {
    this.popoverService.open({
      content: MegaMenuComponent,
      origin,
      position: [
        {
          originX: "end",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
        },
        {
          originX: "start",
          originY: "top",
          overlayX: "end",
          overlayY: "top",
        },
      ],
    });
  }

  openSubscribption() {
    this.router.navigate(["/subscription-plan"]);
  }

  openSubscriptionCancelModal() {
    this.dialog.open(SubscriptionscancelModelComponent, {
      width: "100%",
      maxWidth: 600,
    });
  }
}
