import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { SalesByProductsComponent } from './pages/apps/sales-by-products/sales-by-products.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { PageLayoutModule } from '../@vex/components/page-layout/page-layout.module';
import { LowStockComponent } from './pages/apps/low-stock/low-stock.component';
import { StockValueReportComponent } from './pages/apps/stock-value-report/stock-value-report.component';
import { ReportOrderHistoryComponent } from './pages/apps/report-order-history/report-order-history.component';
import { OrderSummaryComponent } from './pages/apps/order-summary/order-summary.component';
import { SalesOrderComponent } from './pages/apps/sales-order/sales-order.component';
import { McfOrdersComponent } from './pages/apps/mcf-orders/mcf-orders.component';
import { ShippedOrdersComponent } from './pages/apps/shipped-orders/shipped-orders.component';
import { ReturnedOrdersComponent } from './pages/apps/returned-orders/returned-orders.component';
import { CanceledOrdersComponent } from './pages/apps/canceled-orders/canceled-orders.component';
import { ManageReturnsComponent } from './pages/apps/manage-returns/manage-returns.component';
import { InvetoryProductsComponent } from './pages/apps/invetory-products/invetory-products.component';
import { InvetoryChannelproductsComponent } from './pages/apps/invetory-channelproducts/invetory-channelproducts.component';
import { InvetoryStockviewComponent } from './pages/apps/invetory-stockview/invetory-stockview.component';
import { InvetoryPurchaseorderComponent } from './pages/apps/invetory-purchaseorder/invetory-purchaseorder.component';
import { ListingWaitingTolistComponent } from './pages/apps/listing-waiting-tolist/listing-waiting-tolist.component';
import { ListingErrorComponent } from './pages/apps/listing-error/listing-error.component';
import { ListingListedProductComponent } from './pages/apps/listing-listed-product/listing-listed-product.component';
import { ListingClosedProductComponent } from './pages/apps/listing-closed-product/listing-closed-product.component';
import { ListingChannelScheduleComponent } from './pages/apps/listing-channel-schedule/listing-channel-schedule.component';
import { ListingCreateProducttofbaComponent } from './pages/apps/listing-create-producttofba/listing-create-producttofba.component';
import { ListingSendProducttofbaComponent } from './pages/apps/listing-send-producttofba/listing-send-producttofba.component';
import { ListingProductInFbaComponent } from './pages/apps/listing-product-in-fba/listing-product-in-fba.component';
import { WarehousesWarehouseComponent } from './pages/apps/warehouses-warehouse/warehouses-warehouse.component';
import { WarehousesStockSummaryComponent } from './pages/apps/warehouses-stock-summary/warehouses-stock-summary.component';
import { WarehousesTransferComponent } from './pages/apps/warehouses-transfer/warehouses-transfer.component';
import { CustomerComponent } from './pages/apps/customer/customer.component';
import { SettingGeneralSettingComponent } from './pages/apps/setting-general-setting/setting-general-setting.component';
import { SettingProductsAttributesComponent } from './pages/apps/setting-products-attributes/setting-products-attributes.component';
import { SettingBulkActionsComponent } from './pages/apps/setting-bulk-actions/setting-bulk-actions.component';
import { SettingBarcodeManagementComponent } from './pages/apps/setting-barcode-management/setting-barcode-management.component';
import { SettingInventorySyncronizeComponent } from './pages/apps/setting-inventory-syncronize/setting-inventory-syncronize.component';
import { SettingInvoiceComponent } from './pages/apps/setting-invoice/setting-invoice.component';
import { SettingEmailComponent } from './pages/apps/setting-email/setting-email.component';
import { SettingNotificationComponent } from './pages/apps/setting-notification/setting-notification.component';
import { IntegrationChannelIntegrationComponent } from './pages/apps/integration-channel-integration/integration-channel-integration.component';
import { IntegrationShippingCourierComponent } from './pages/apps/integration-shipping-courier/integration-shipping-courier.component';
import { TemplateDesignerInvoiceComponent } from './pages/apps/template-designer-invoice/template-designer-invoice.component';
import { TemplateDesignerInvoiceTemplateComponent } from './pages/apps/template-designer-invoice-template/template-designer-invoice-template.component';
import { TemplateDesignerShippingLabelComponent } from './pages/apps/template-designer-shipping-label/template-designer-shipping-label.component';
import { TemplateDesignerPickupListComponent } from './pages/apps/template-designer-pickup-list/template-designer-pickup-list.component';
import { TemplateDesignerPackListComponent } from './pages/apps/template-designer-pack-list/template-designer-pack-list.component';
import { MessageCenterComponent } from './pages/apps/message-center/message-center.component';
import { WhatsNewComponent } from './pages/apps/whats-new/whats-new.component';
import { CreateTicketComponent } from './pages/apps/create-ticket/create-ticket.component';
import { MyAccountComponent } from './pages/apps/my-account/my-account.component';
import { UserManagementComponent } from './pages/apps/user-management/user-management.component';
import { SuppliersComponent } from './pages/apps/suppliers/suppliers.component';
import { SubscribtionComponent } from './pages/apps/subscribtion/subscribtion.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog'
import { AddproductComponent } from './pages/apps/addproduct/addproduct.component';
import { CreateorderComponent } from './pages/apps/createorder/createorder.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { UserAddModalComponent } from './pages/apps/user-add-modal/user-add-modal.component';
import { SubscriptionModalComponent } from './pages/apps/subscription-modal/subscription-modal.component';
import { TicketModalComponent } from './pages/apps/ticket-modal/ticket-modal.component';
import { PhonesupportModalComponent } from './pages/apps/phonesupport-modal/phonesupport-modal.component';
import { RedeemcuponModalComponent } from './pages/apps/redeemcupon-modal/redeemcupon-modal.component';
import { ViewmessageModalComponent } from './pages/apps/viewmessage-modal/viewmessage-modal.component';
import { ReplymessageModalComponent } from './pages/apps/replymessage-modal/replymessage-modal.component';

import { MarkdownModule } from '../app/pages/documentation/markdown.module';
import { DispatchconsoleModelComponent } from './pages/apps/dispatchconsole-model/dispatchconsole-model.component';
import { CreateorderModalComponent } from './pages/apps/createorder-modal/createorder-modal.component';
import { ChannelproductsModelComponent } from './pages/apps/channelproducts-model/channelproducts-model.component';
import { OrdercommentsshowModelComponent } from './pages/apps/ordercommentsshow-model/ordercommentsshow-model.component';
import { OrdercommentscreateModelComponent } from './pages/apps/ordercommentscreate-model/ordercommentscreate-model.component';
import { PicklistModelComponent } from './pages/apps/picklist-model/picklist-model.component';
import { PacklistModelComponent } from './pages/apps/packlist-model/packlist-model.component';
import { ExportcsvModelComponent } from './pages/apps/exportcsv-model/exportcsv-model.component';
import { EmaildialogueModelComponent } from './pages/apps/emaildialogue-model/emaildialogue-model.component';
import { SendmailModelComponent } from './pages/apps/sendmail-model/sendmail-model.component';
import { DownloadorderModelComponent } from './pages/apps/downloadorder-model/downloadorder-model.component';
import { DispatchconsolenewModelComponent } from './pages/apps/dispatchconsolenew-model/dispatchconsolenew-model.component';
import { SyncprogressModelComponent } from './pages/apps/syncprogress-model/syncprogress-model.component';

import { ModaluserpermissionComponent } from '../app/pages/apps/modaluserpermission/modaluserpermission.component';
import { ModalusereditComponent } from './pages/apps/modaluseredit/modaluseredit.component';
import { RevenuinfoComponent } from './pages/apps/revenuinfo/revenuinfo.component';

import { AddtochannelModelComponent } from './pages/apps/addtochannel-model/addtochannel-model.component';
import { CreatelinkedproductsModelComponent } from './pages/apps/createlinkedproducts-model/createlinkedproducts-model.component';
import { UpdateqtyproductsModelComponent } from './pages/apps/updateqtyproducts-model/updateqtyproducts-model.component';
import { AddproductModelComponent } from './pages/apps/addproduct-model/addproduct-model.component';
import { ManageproductModelComponent } from './pages/apps/manageproduct-model/manageproduct-model.component';
import { ChannelordersDashboardComponent } from './pages/apps/channelorders-dashboard/channelorders-dashboard.component';
import { ChannelcustomerDashboardComponent } from './pages/apps/channelcustomer-dashboard/channelcustomer-dashboard.component';
import { ChannelschedularjobDashboardComponent } from './pages/apps/channelschedularjob-dashboard/channelschedularjob-dashboard.component';
import { CurrencyconverterModelComponent } from './pages/apps/currencyconverter-model/currencyconverter-model.component';
import { SchedulelistingModelComponent } from './pages/apps/schedulelisting-model/schedulelisting-model.component';
import { ListnowModelComponent } from './pages/apps/listnow-model/listnow-model.component';
import { ViewModelComponent } from './pages/apps/view-model/view-model.component';
import { PurhaseorderAddComponent } from './pages/apps/purhaseorder-add/purhaseorder-add.component';
import { UploadtochannelModelComponent } from './pages/apps/uploadtochannel-model/uploadtochannel-model.component';
import { BulkupdateModelComponent } from './pages/apps/bulkupdate-model/bulkupdate-model.component';
import { MatStepperModule } from '@angular/material/stepper';
import { UpcomingfeaturesComponent } from './pages/apps/upcomingfeatures/upcomingfeatures.component';
import { SettingEditattributeComponent } from './pages/apps/setting-editattribute/setting-editattribute.component';
// import { EditorComponent } from './pages/apps/editor/editor.component';
// import { EditorRoutingModule } from './pages/apps/editor/editor-routing.module';
// import { BreadcrumbComponent } from 'src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component';
// import { SecondaryToolbarComponent } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.component';
// import { QuillModule } from 'ngx-quill';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormsModule } from '@angular/forms';
import { NotificationsettingModelComponent } from './pages/apps/notificationsetting-model/notificationsetting-model.component';
import { Notificationsetting0ModelComponent } from './pages/apps/notificationsetting0-model/notificationsetting0-model.component';
import { Notificationsetting1ModelComponent } from './pages/apps/notificationsetting1-model/notificationsetting1-model.component';
import { EditattributeComponent } from './pages/apps/editattribute/editattribute.component';
import { FormshippingrulesComponent } from './pages/apps/formshippingrules/formshippingrules.component';
import { FormproductattributeComponent } from './pages/apps/formproductattribute/formproductattribute.component';
import { FormwarehouseComponent } from './pages/apps/formwarehouse/formwarehouse.component';
import { ShippingcountryeditModelComponent } from './pages/apps/shippingcountryedit-model/shippingcountryedit-model.component';
import { ShippingeditModelComponent } from './pages/apps/shippingedit-model/shippingedit-model.component';
import { CreateorderpageComponent } from './pages/apps/createorderpage/createorderpage.component';
import { BulkemailModelComponent } from './pages/apps/bulkemail-model/bulkemail-model.component';
import { ShiporderModelComponent } from './pages/apps/shiporder-model/shiporder-model.component';
import { PrmModelComponent } from './pages/apps/prm-model/prm-model.component';
import { FullfilmentmodelComponent } from './pages/apps/fullfilment-model/fullfilment-model.component';
import { PrintdefaultModelComponent } from './pages/apps/printdefault-model/printdefault-model.component';
import { PaidModelComponent } from './pages/apps/paid-model/paid-model.component';
import { EbayIntegrationComponent } from './pages/apps/ebay-integration/ebay-integration.component';
import { EbaygeneratetokenModelComponent } from './pages/apps/ebaygeneratetoken-model/ebaygeneratetoken-model.component';
import { DpdlabelsetupComponent } from './pages/apps/dpdlabelsetup/dpdlabelsetup.component';
import { RoyalmaillabelsetupComponent } from './pages/apps/royalmaillabelsetup/royalmaillabelsetup.component';
import { YodellabelsetupComponent } from './pages/apps/yodellabelsetup/yodellabelsetup.component';
import { HermeslabelsetupComponent } from './pages/apps/hermeslabelsetup/hermeslabelsetup.component';
import { HermessettingsComponent } from './pages/apps/hermessettings/hermessettings.component';
import { EbaytestconnectionModelComponent } from './pages/apps/ebaytestconnection-model/ebaytestconnection-model.component';
import { EbayrecentproductsModelComponent } from './pages/apps/ebayrecentproducts-model/ebayrecentproducts-model.component';
import { EbayallproductsModelComponent } from './pages/apps/ebayallproducts-model/ebayallproducts-model.component';
import { ShipstationlabelsetupComponent } from './pages/apps/shipstationlabelsetup/shipstationlabelsetup.component';
import { EditsupplierComponent } from './pages/apps/editsupplier/editsupplier.component';
import { DelaccountModelComponent } from './pages/apps/delaccount-model/delaccount-model.component';
import Editor from '@toast-ui/editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TaxrateModelComponent } from './pages/apps/taxrate-model/taxrate-model.component';
import { CancelorderModelComponent } from './pages/apps/cancelorder-model/cancelorder-model.component';
import { LinkedproductsModelComponent } from './pages/apps/linkedproducts-model/linkedproducts-model.component';
import { PldxModelComponent } from './pages/apps/pldx-model/pldx-model.component';
import { PlukmailModelComponent } from './pages/apps/plukmail-model/plukmail-model.component';
import { PlyodelModelComponent } from './pages/apps/plyodel-model/plyodel-model.component';
import { PlclickdropModelComponent } from './pages/apps/plclickdrop-model/plclickdrop-model.component';
import { OtherModelComponent } from './pages/apps/other-model/other-model.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegistrationsuccessComponent } from './pages/apps/registrationsuccess/registrationsuccess.component';
// import { ComponentsTooltipRoutingModule } from './pages/ui/components/components-tooltip/components-tooltip-routing.module';
// import { ComponentsTooltipComponent } from './pages/ui/components/components-tooltip/components-tooltip.component';
import { ComponentsOverviewTooltipModule } from './pages/ui/components/components-overview/components/components-overview-tooltip/components-overview-tooltip.module';
import { MsgorderdetailsModelComponent } from './pages/apps/msgorderdetails-model/msgorderdetails-model.component';
import { SubscriptionscancelModelComponent } from './pages/apps/subscriptionscancel-model/subscriptionscancel-model.component';
import { ChangeadminemailModelComponent } from './pages/apps/changeadminemail-model/changeadminemail-model.component'; 
// import { Create }


const MY_FORMATS = {
  parse: {
      dateInput: 'LL'
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};

@NgModule({
  declarations: [AppComponent, SalesByProductsComponent, LowStockComponent, StockValueReportComponent, ReportOrderHistoryComponent, OrderSummaryComponent, SalesOrderComponent, McfOrdersComponent, ShippedOrdersComponent, ReturnedOrdersComponent, CanceledOrdersComponent, ManageReturnsComponent, InvetoryProductsComponent, InvetoryChannelproductsComponent, InvetoryStockviewComponent, InvetoryPurchaseorderComponent, ListingWaitingTolistComponent, ListingErrorComponent, ListingListedProductComponent, ListingClosedProductComponent, ListingChannelScheduleComponent, ListingCreateProducttofbaComponent, ListingSendProducttofbaComponent, ListingProductInFbaComponent, WarehousesWarehouseComponent, WarehousesStockSummaryComponent, WarehousesTransferComponent, CustomerComponent, SettingGeneralSettingComponent, SettingProductsAttributesComponent, SettingBulkActionsComponent, SettingBarcodeManagementComponent, SettingInventorySyncronizeComponent, SettingInvoiceComponent, SettingEmailComponent, SettingNotificationComponent, IntegrationChannelIntegrationComponent, IntegrationShippingCourierComponent, TemplateDesignerInvoiceComponent, TemplateDesignerInvoiceTemplateComponent, TemplateDesignerShippingLabelComponent, TemplateDesignerPickupListComponent, TemplateDesignerPackListComponent, MessageCenterComponent, WhatsNewComponent, CreateTicketComponent, MyAccountComponent, UserManagementComponent, SuppliersComponent, SubscribtionComponent, AddproductComponent, CreateorderComponent, UserAddModalComponent, SubscriptionModalComponent, TicketModalComponent, PhonesupportModalComponent, RedeemcuponModalComponent, ViewmessageModalComponent, ReplymessageModalComponent, DispatchconsoleModelComponent, CreateorderModalComponent, ChannelproductsModelComponent, OrdercommentsshowModelComponent, OrdercommentscreateModelComponent, PicklistModelComponent, PacklistModelComponent, ExportcsvModelComponent, EmaildialogueModelComponent, SendmailModelComponent, DownloadorderModelComponent, DispatchconsolenewModelComponent, SyncprogressModelComponent, ModaluserpermissionComponent, ModalusereditComponent, RevenuinfoComponent, AddtochannelModelComponent, CreatelinkedproductsModelComponent, UpdateqtyproductsModelComponent, AddproductModelComponent, ManageproductModelComponent, ChannelordersDashboardComponent, ChannelcustomerDashboardComponent, ChannelschedularjobDashboardComponent, CurrencyconverterModelComponent, SchedulelistingModelComponent, ListnowModelComponent, ViewModelComponent, PurhaseorderAddComponent, UploadtochannelModelComponent, BulkupdateModelComponent, UpcomingfeaturesComponent, SettingEditattributeComponent, NotificationsettingModelComponent, Notificationsetting0ModelComponent, Notificationsetting1ModelComponent, EditattributeComponent, FormshippingrulesComponent, FormproductattributeComponent, FormwarehouseComponent, ShippingcountryeditModelComponent, ShippingeditModelComponent,CreateorderpageComponent, BulkemailModelComponent, ShiporderModelComponent, PrmModelComponent, FullfilmentmodelComponent, PrintdefaultModelComponent, PaidModelComponent, EbayIntegrationComponent, EbaygeneratetokenModelComponent, DpdlabelsetupComponent, RoyalmaillabelsetupComponent, YodellabelsetupComponent, HermeslabelsetupComponent, HermessettingsComponent, EbaytestconnectionModelComponent, EbayrecentproductsModelComponent, EbayallproductsModelComponent, ShipstationlabelsetupComponent, EditsupplierComponent, DelaccountModelComponent, TaxrateModelComponent, CancelorderModelComponent, LinkedproductsModelComponent, PldxModelComponent, PlukmailModelComponent, PlyodelModelComponent, PlclickdropModelComponent, OtherModelComponent, RegistrationsuccessComponent, MsgorderdetailsModelComponent, SubscriptionscancelModelComponent, ChangeadminemailModelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    /**
     * Import Component Material
     */
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    PageLayoutModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MarkdownModule,
    MatStepperModule,
    FormsModule,
    AngularEditorModule,
    MatProgressSpinnerModule,
    // ComponentsTooltipRoutingModule,
    // ComponentsOverviewTooltipModule,
    // EditorRoutingModule,
    // BreadcrumbComponent,
    // SecondaryToolbarComponent,
    // QuillModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
