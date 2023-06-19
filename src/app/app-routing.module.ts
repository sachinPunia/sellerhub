import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { SalesByProductsComponent } from './pages/apps/sales-by-products/sales-by-products.component';
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
import { SuppliersComponent } from './pages/apps/suppliers/suppliers.component';
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
import { MyAccountComponent } from './pages/apps/my-account/my-account.component';
import { UserManagementComponent } from './pages/apps/user-management/user-management.component';
import { SubscribtionComponent } from './pages/apps/subscribtion/subscribtion.component';
import { CreateorderComponent } from './pages/apps/createorder/createorder.component';
import { SubscriptionModalComponent } from './pages/apps/subscription-modal/subscription-modal.component';
import { MessageCenterComponent } from './pages/apps/message-center/message-center.component';
import { WhatsNewComponent } from './pages/apps/whats-new/whats-new.component';

import { ChannelordersDashboardComponent } from './pages/apps/channelorders-dashboard/channelorders-dashboard.component';
import { ChannelcustomerDashboardComponent } from './pages/apps/channelcustomer-dashboard/channelcustomer-dashboard.component';
import { ChannelschedularjobDashboardComponent } from './pages/apps/channelschedularjob-dashboard/channelschedularjob-dashboard.component';
import { PurhaseorderAddComponent } from './pages/apps/purhaseorder-add/purhaseorder-add.component';
import { AddproductComponent } from './pages/apps/addproduct/addproduct.component';
import { UpcomingfeaturesComponent } from './pages/apps/upcomingfeatures/upcomingfeatures.component';
import { EbayIntegrationComponent } from './pages/apps/ebay-integration/ebay-integration.component';

import { FormshippingrulesComponent } from './pages/apps/formshippingrules/formshippingrules.component';
import { FormwarehouseComponent } from './pages/apps/formwarehouse/formwarehouse.component';
import { FormproductattributeComponent } from './pages/apps/formproductattribute/formproductattribute.component';
// import { PrintdefaultModelComponent } from './pages/apps/printdefault-model/printdefault-model.component';
// import { PaidModelComponent } from './pages/apps/paid-model/paid-model.component';
import { CreateorderpageComponent } from './pages/apps/createorderpage/createorderpage.component';
import { DpdlabelsetupComponent } from './pages/apps/dpdlabelsetup/dpdlabelsetup.component';
import { RoyalmaillabelsetupComponent } from './pages/apps/royalmaillabelsetup/royalmaillabelsetup.component';
import { YodellabelsetupComponent } from './pages/apps/yodellabelsetup/yodellabelsetup.component';
import { HermeslabelsetupComponent } from './pages/apps/hermeslabelsetup/hermeslabelsetup.component';
import { HermessettingsComponent } from './pages/apps/hermessettings/hermessettings.component';
import { ShipstationlabelsetupComponent } from './pages/apps/shipstationlabelsetup/shipstationlabelsetup.component';
import { RegistrationsuccessComponent } from './pages/apps/registrationsuccess/registrationsuccess.component'

const routes: VexRoutes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'dashboards/analytics',
        redirectTo: '/'
      },
      
      {
        path: '',
        loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
      },
      {
        path: 'acceptebaytoken',
        component: EbayIntegrationComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'registrationsuccess',
        component: RegistrationsuccessComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'apps',
        children: [
          {
            path: 'sales-by-product',
            component: SalesByProductsComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          {
            path: 'low-stock',
            component: LowStockComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'stock-value-report',
            component: StockValueReportComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'order-history-report',
            component: ReportOrderHistoryComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * Order Menu
           */

           {
            path: 'order-summary',
            component: OrderSummaryComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'sales-orders',
            component: SalesOrderComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'mcf-orders',
            component: McfOrdersComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'shipped-orders',
            component: ShippedOrdersComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'returned-orders',
            component: ReturnedOrdersComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'canceled-order',
            component: CanceledOrdersComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'manage-returns',
            component: ManageReturnsComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * EOF Order Menu
           */
          

          /**
           * Inventory Menu
           */

          {
            path: 'inventory-products',
            component: InvetoryProductsComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'inventory-channel-products',
            component: InvetoryChannelproductsComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'inventory-stock-view',
            component: InvetoryStockviewComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'inventory-purchase-orders',
            component: InvetoryPurchaseorderComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * 
           * EOF Inventory Menu
           */

          /**
           * Listing Menu
           */

          {
            path: 'channel-listing-waiting-tolist',
            component: ListingWaitingTolistComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-listing-error',
            component: ListingErrorComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-listing-listed-products',
            component: ListingListedProductComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-listing-closed-products',
            component: ListingClosedProductComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-schedule-listing',
            component: ListingChannelScheduleComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-create-product-fba',
            component: ListingCreateProducttofbaComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-send-product-to-fba',
            component: ListingSendProducttofbaComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'channel-product-in-fba',
            component: ListingProductInFbaComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          /**
           * EOF Listing Menu
           */


          /**
           * Supplier Menu
           */

           {
            path: 'supplier',
            component: SuppliersComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * EOF Supplier Menu
           */

          /**
           * WareHouse Menu
           */
           {
            path: 'warehouses',
            component: WarehousesWarehouseComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },


          {
            path: 'stock-summary',
            component: WarehousesStockSummaryComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'warehouse-transfer',
            component: WarehousesTransferComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * EOF Warehouse Menu
           */
          
          /**
           * Customer Menu
           */
           {
            path: 'customer',
            component: CustomerComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          /**
           * EOF Customer
           */

          /**
           * Setting Menu
           */
          {
            path: 'general-setting',
            component: SettingGeneralSettingComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'product-attribute',
            component: SettingProductsAttributesComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'bulk-action',
            component: SettingBulkActionsComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'barcode-management',
            component: SettingBarcodeManagementComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'inventory-syncronize',
            component: SettingInventorySyncronizeComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'setting-invoice',
            component: SettingInvoiceComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'setting-email',
            component: SettingEmailComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'setting-notification',
            component: SettingNotificationComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          /**
           * EOF Setting
           */

          /**
           * Integration Menu
           */
          {
            path: 'integration-channel-integration',
            component: IntegrationChannelIntegrationComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'integration-shipping-courier',
            component: IntegrationShippingCourierComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          /**
           * EOF Integration Menu
           */

          /**
           * Template Designer Menu
           */
          {
            path: 'template-designer-invoice',
            component: TemplateDesignerInvoiceComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'template-designer-invoice-template',
            component: TemplateDesignerInvoiceTemplateComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'template-designer-shipping-label',
            component: TemplateDesignerShippingLabelComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'template-designer-pickup-list',
            component: TemplateDesignerPickupListComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'template-designer-pack-list',
            component: TemplateDesignerPackListComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          /**
           * EOF Template Designer
           */

          /**
           * Account Menu
           */
           {
            path: 'my-account',
            component: MyAccountComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'user-managements',
            component: UserManagementComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'subscription',
            component: SubscribtionComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },

          /**
           * Extra Pages
           */
           {
            path: 'create-orders',
            component: CreateorderComponent,
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
           path: 'purchaseorder-add',
           component: PurhaseorderAddComponent,
           data: {
             toolbarShadowEnabled: true
           }
         },
          {
           path: 'channelorders-dashboard',
           component: ChannelordersDashboardComponent,
           data: {
             toolbarShadowEnabled: true
           }
         },
         {
          path: 'channelcustomer-dashboard',
          component: ChannelcustomerDashboardComponent,
          data: {
            toolbarShadowEnabled: true
          }
        },
        {
         path: 'add-product',
         component: AddproductComponent,
         data: {
           toolbarShadowEnabled: true
         }
       },
      //   {
      //    path: 'recentorders-dashboard',
      //    component: RecentordersDashboardComponent,
      //    data: {
      //      toolbarShadowEnabled: true
      //    }
      //  },
      //  {
      //   path: 'orderhistory-dashboard',
      //   component: OrderhistoryDashboardComponent,
      //   data: {
      //     toolbarShadowEnabled: true
      //   }
      // },
        {
        path: 'channelschedularjob-dashboard',
        component: ChannelschedularjobDashboardComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'upcomingfeatures',
        component: UpcomingfeaturesComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'add-formproduct',
        component: FormproductattributeComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'edit-formproduct',
        component: FormproductattributeComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },

      {
        path: 'add-formwarehouse',
        component: FormwarehouseComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'add-formshipping',
        component: FormshippingrulesComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'add-createorderpage',
        component: CreateorderpageComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'ebay-channel-integration',
        component: EbayIntegrationComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'dpdlabelsetup',
        component: DpdlabelsetupComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'royalmaillabelsetup',
        component: RoyalmaillabelsetupComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'yodellabelsetup',
        component: YodellabelsetupComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'hermessettings',
        component: HermessettingsComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'shipstationlabelsetup',
        component: ShipstationlabelsetupComponent,
        data: {
          toolbarShadowEnabled: true
        }
      },
      


        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'pricing',
            loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
          },
          {
            path: 'faq',
            loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
          },
          {
            path: 'guides',
            loadChildren: () => import('./pages/pages/guides/guides.module').then(m => m.GuidesModule)
          },
          {
            path: 'invoice',
            loadChildren: () => import('./pages/pages/invoice/invoice.module').then(m => m.InvoiceModule)
          },
          {
            path: 'error-404',
            loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
          },
          {
            path: 'error-500',
            loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
          }
        ]
      },
      {
        path: 'ui',
        children: [
          {
            path: 'components',
            loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
          },
          {
            path: 'forms/form-elements',
            loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'forms/form-wizard',
            loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'icons',
            loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
          },
          {
            path: 'page-layouts',
            loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
          },
        ]
      },
      {
        path: 'subscription-plan',
        component: SubscriptionModalComponent,
      },
      {
        path: 'apps/message-center',
        component: MessageCenterComponent,
      },
      {
        path: 'apps/whatsappnew',
        component: WhatsNewComponent,
      },
      {
        path: 'documentation',
        loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
      },
      {
        path: '**',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}