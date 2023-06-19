import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import icMail from '@iconify/icons-ic/twotone-mail';
import icOrder from '@iconify/icons-ic/twotone-shopping-cart';
import faDownload from '@iconify/icons-fa-solid/download';
import { RegistrationsuccessComponent } from './pages/apps/registrationsuccess/registrationsuccess.component'

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl')),
      map(queryParamMap => coerceBooleanProperty(queryParamMap.get('rtl'))),
    ).subscribe(isRtl => {
      this.configService.updateConfig({
        rtl: isRtl
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    /**
     * Add your own routes here
     */
    this.navigationService.items = [
      {
        type: 'link',
        label: 'Dashboard',
        route: '/',
        icon: icLayers,
        routerLinkActiveOptions: { exact: true }
      },
      // {
      //   type: 'dropdown',
      //   label: 'AI Dashboard (BETA)',
      //   icon: icLayers,
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'Business Dashboard',
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Channel Orders',
      //           route: 'apps/channelorders-dashboard',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Channel Products',
      //           route: 'apps/channelschedularjob-dashboard/',
      //         }
      //       ]
      //       // type: 'link',
      //       // label: 'Channel Orders',
      //       // route: '/apps/sales-by-product'
      //     },
      //     // {
      //     //   type: 'dropdown',
      //     //   label: 'Customer Dashboard',
      //     //   children: [
      //     //     {
      //     //       type: 'link',
      //     //       label: 'Recent Orders',
      //     //       route: 'apps/recentorders-dashboard',
      //     //       routerLinkActiveOptions: { exact: true }
      //     //     },
      //     //     {
      //     //       type: 'link',
      //     //       label: 'Order History',
      //     //       route: '/apps/orderhistory-dashboard',
      //     //     }
      //     //   ]
      //     // },
      //     // {
      //     //   type: 'dropdown',
      //     //   label: 'Operations Dashboard',
      //     //   children: [
      //     //     {
      //     //       type: 'link',
      //     //       label: 'Channel Schedular Jobs',
      //     //       route: 'apps/channelcustomer-dashboard',
      //     //       routerLinkActiveOptions: { exact: true }
      //     //     }
      //     //     // {
      //     //     //   type: 'link',
      //     //     //   label: 'Channel Customers',
      //     //     //   route: '/apps/channel-listing-error',
      //     //     // }
      //     //   ]
      //     // }
      //   ]
      // },
      {
        type: 'dropdown',
        label: 'Reports',
        icon: icBook,
        children: [
          {
            type: 'link',
            label: 'Sales By Products',
            route: '/apps/sales-by-product'
          },
          {
            type: 'link',
            label: 'Low Stock',
            route: '/apps/low-stock'
          },
          {
            type: 'link',
            label: 'Stock Value Report',
            route: '/apps/stock-value-report'
          },
          {
            type: 'link',
            label: 'Order History',
            route: '/apps/order-history-report'
          }
        ]
      },
      // Orders Menu
      {
        type: 'dropdown',
        label: 'Orders',
        icon: icOrder,
        children: [
          {
            type: 'link',
            label: 'Orders Summary',
            route: '/apps/order-summary'
          },
          {
            type: 'link',
            label: 'Sales Orders',
            route: '/apps/sales-orders'
          },
          {
            type: 'link',
            label: 'MCF Orders',
            route: '/apps/mcf-orders'
          },
          {
            type: 'link',
            label: 'Shipped Orders',
            route: '/apps/shipped-orders'
          },
          {
            type: 'link',
            label: 'Returned Orders',
            route: '/apps/returned-orders'
          },
          {
            type: 'link',
            label: 'Canceled Orders',
            route: '/apps/canceled-order'
          },
          {
            type: 'link',
            label: 'Manage Return',
            route: '/apps/manage-returns'
          }
        ]
      },

      // Inventory menu
      {
        type: 'dropdown',
        label: 'Inventory',
        icon: icOrder,
        children: [
          {
            type: 'link',
            label: 'Products',
            route: '/apps/inventory-products'
          },
          {
            type: 'link',
            label: 'Channel Products',
            route: '/apps/inventory-channel-products'
          },
          {
            type: 'link',
            label: 'Stock View',
            route: '/apps/inventory-stock-view'
          },
          {
            type: 'link',
            label: 'Purchase Order',
            route: '/apps/inventory-purchase-orders'
          }
        ]
      },

      // Listing
      {
        type: 'dropdown',
        label: 'Listing',
        icon: icViewCompact,
        children: [
          {
            type: 'dropdown',
            label: 'Channel Listing',
            children: [
              {
                type: 'link',
                label: 'Waiting To List',
                route: 'apps/channel-listing-waiting-tolist',
                routerLinkActiveOptions: { exact: true }
              },
              {
                type: 'link',
                label: 'Listing Errors',
                route: '/apps/channel-listing-error',
              },
              {
                type: 'link',
                label: 'Listed Products',
                route: '/apps/channel-listing-listed-products',
                routerLinkActiveOptions: { exact: true }
              },
              {
                type: 'link',
                label: 'Closed Products',
                route: '/apps/channel-listing-closed-products'
              }
            ]
          },
          {
            type: 'link',
            label: 'Channel Schedule Listings',
            icon: icPictureInPicture,
            route: '/apps/channel-schedule-listing'
          },
          {
            type: 'dropdown',
            label: 'Manage FBA',
            children: [
              {
                type: 'link',
                label: 'Create Products To FBA',
                route: '/apps/channel-create-product-fba',
                routerLinkActiveOptions: { exact: true }
              },
              {
                type: 'link',
                label: 'Send Products To FBA',
                route: '/apps/channel-send-product-to-fba',
              },
              {
                type: 'link',
                label: 'Products In FBA',
                route: '/apps/channel-product-in-fba',
                routerLinkActiveOptions: { exact: true }
              }
            ]
          }
          
        ]
      },

      // Suppliers
      {
        type: 'link',
        label: 'Suppliers',
        route: '/apps/supplier',
        icon: icMail,
      },

      // Warehouse Management
      {
        type: 'dropdown',
        label: 'Warehouse Management',
        icon: icBook,
        children: [
          {
            type: 'link',
            label: 'Warehouses',
            route: '/apps/warehouses'
          },
          {
            type: 'link',
            label: 'Stock Summary',
            route: '/apps/stock-summary'
          },
          {
            type: 'link',
            label: 'Transfer',
            route: '/apps/warehouse-transfer'
          }
        ]
      },

      // Customer
      {
        type: 'link',
        label: 'Customers',
        route: '/apps/customer',
        icon: icMail,
      },

      // Settings
      {
        type: 'dropdown',
        label: 'Setting',
        icon: icSettings,
        children: [
          {
            type: 'link',
            label: 'General Settings',
            route: '/apps/general-setting'
          },
          {
            type: 'link',
            label: 'Products Attributes',
            route: '/apps/product-attribute'
          },
          {
            type: 'link',
            label: 'Bulk Actions',
            route: '/apps/bulk-action'
          },
          {
            type: 'link',
            label: 'Barcode Management',
            route: '/apps/barcode-management'
          },
          {
            type: 'link',
            label: 'Inventory Syncronize',
            route: '/apps/inventory-syncronize'
          },
          {
            type: 'link',
            label: 'Shipping Rules',
            route: '/apps/setting-invoice'
          },
          {
            type: 'link',
            label: 'Email Settings',
            route: '/apps/setting-email'
          },
          {
            type: 'link',
            label: 'Notification',
            route: '/apps/setting-notification'
          }
        ]
      },

      // Integrations
      {
        type: 'dropdown',
        label: 'Integrations',
        icon: icOrder,
        children: [
          {
            type: 'link',
            label: 'Channel Integration',
            route: '/apps/integration-channel-integration'
          },
          {
            type: 'link',
            label: 'Shipping Courier Setup',
            route: '/apps/integration-shipping-courier'
          }
        ]
      },

      // Template Designer
      {
        type: 'dropdown',
        label: 'Template Designer',
        icon: icOrder,
        children: [
          {
            type: 'link',
            label: 'Invoice & Shipping Labels',
            route: '/apps/template-designer-invoice'
          },
          {
            type: 'link',
            label: 'Invoice Template',
            route: '/apps/template-designer-invoice-template'
          },
          {
            type: 'link',
            label: 'Shipping Label',
            route: '/apps/template-designer-shipping-label'
          },
          {
            type: 'link',
            label: 'Pickup List',
            route: '/apps/template-designer-pickup-list'
          },
          {
            type: 'link',
            label: 'Pack List',
            route: '/apps/template-designer-pack-list'
          }
        ]
      },

      // Beta Test
      {
        type: 'dropdown',
        label: 'Beta Test',
        icon: faDownload,
        children: [
          {
            type: 'link',
            label: 'Upcoming Features',
            route: '/apps/upcomingfeatures'
          }
        ]
      },

      /**
      {
        type: 'link',
        label: 'Configuration',
        route: () => this.layoutService.openConfigpanel(),
        icon: icSettings
      }
       */
    ];
  }
}
