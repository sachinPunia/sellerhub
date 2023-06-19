import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneDE from '@iconify/icons-emojione/flag-for-flag-germany';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { ConfigService } from '../../services/config.service';
import { map } from 'rxjs/operators';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icDescription from '@iconify/icons-ic/twotone-description';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { NavigationService } from '../../services/navigation.service';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import icArrowLeft from '@iconify/icons-ic/round-arrow-right-alt';
import icMail from '@iconify/icons-ic/mail-outline';
import icSupport from '@iconify/icons-ic/outline-support-agent';
import icInfo from '@iconify/icons-ic/info-outline';
import icTicket from '@iconify/icons-fa-solid/ticket-alt';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { MatDialog } from '@angular/material/dialog';
import { TicketModalComponent } from 'src/app/pages/apps/ticket-modal/ticket-modal.component';
import { PhonesupportModalComponent } from 'src/app/pages/apps/phonesupport-modal/phonesupport-modal.component';
import { Router } from '@angular/router';
import { UrlAPIService } from "src/app/services/url-api.service";


@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() mobileQuery: boolean;

  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;

  navigationItems = this.navigationService.items;

  isHorizontalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));

  icMail = icMail;
  icSupport = icSupport;
  icInfo = icInfo;
  icSearch = icSearch;
  icBookmarks = icBookmarks;
  emojioneUS = emojioneUS;
  emojioneDE = emojioneDE;
  icMenu = icMenu;
  icPersonAdd = icPersonAdd;
  icAssignmentTurnedIn = icAssignmentTurnedIn;
  icBallot = icBallot;
  icDescription = icDescription;
  icAssignment = icAssignment;
  icReceipt = icReceipt;
  icDoneAll = icDoneAll;
  icArrowLeft = icArrowLeft;
  icArrowDropDown = icArrowDropDown;
  icTicket = icTicket;
  icPhone = icPhone;
  userLoginName: string;
  isSub;
  isMsg;

  constructor(private layoutService: LayoutService,
              private configService: ConfigService,
              private navigationService: NavigationService,
              private popoverService: PopoverService,
              private dialog: MatDialog,
              private urlApi: UrlAPIService,
              private router: Router) { }

  ngOnInit() {
   this.getSubscription();
  }

  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }

  openSidenav() {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement) {
    this.popoverService.open({
      content: MegaMenuComponent,
      origin,
      position: [
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });
  }

  openSearch() {
    this.layoutService.openSearch();
  }

  gotoKnowledge() {
    window.open('https://www.sellershub.io/knowledgebase', '_blank');
  }

  openModalTicket() {
    this.dialog.open(TicketModalComponent, {
      width: '100%',
      maxWidth: 850
    })
  }

  gotoMessageCenter(){
    this.router.navigate(['apps/message-center']);
  }
  
  openModalSupport() {
    this.dialog.open(PhonesupportModalComponent, {
      width: '100%',
      maxWidth: 850
    });
  }

  gotoWhatsapp() {
    this.router.navigate(['apps/whatsappnew'])
  }

  getSubscription(){
    this.urlApi.getSubscriptionData().subscribe((subscription: any) => {
      // this.subject$.next(subscription);
      try {
        console.log("subscription", subscription);
        const result: any = subscription?.subscriptions || [];
        // console.log("result", result);
        this.isSub = subscription.accountStatus;
        this.isMsg = subscription;
        // this.isSub = '';
        // console.log("isSub",this.isSub);
        // this.subject$.next(result);
        // debugger;
      } catch (err) {
        console.log("errr", err);
      }
    });
}
}
