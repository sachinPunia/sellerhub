import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../../utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMoveToInbox from '@iconify/icons-ic/twotone-move-to-inbox';
import icListAlt from '@iconify/icons-ic/twotone-list-alt';
import icTableChart from '@iconify/icons-ic/twotone-table-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icRedeem from '@iconify/icons-ic/redeem';
import { MatDialog } from '@angular/material/dialog';
import { RedeemcuponModalComponent } from 'src/app/pages/apps/redeemcupon-modal/redeemcupon-modal.component';
export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {
  icTableChart = icTableChart;
  icRedeem = icRedeem;
  items: MenuItem[] = [
    {
      id: '1',
      icon: icAccountCircle,
      label: 'My Account',
      description: 'Personal Information',
      colorClass: 'text-teal',
      route: 'apps/my-account'
    },
    {
      id: '2',
      icon: icMoveToInbox,
      label: 'User Management',
      description: 'Manage Users',
      colorClass: 'text-primary',
      route: '/apps/user-managements'
    },
    {
      id: '3',
      icon: icListAlt,
      label: 'Subscription',
      description: 'Subscription Details',
      colorClass: 'text-amber',
      route: '/apps/subscription'
    }
    /**,
    {
      id: '4',
      icon: icTableChart,
      label: 'Redeem Coupon',
      description: '',
      colorClass: 'text-purple',
      route: '#'
    }
    **/
    /**,
    {
      id: '5',
      icon: icTableChart,
      label: 'User Guides',
      description: '',
      colorClass: 'text-purple',
      route: '#'
    }
     */
  ];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;
  userLoginName: string;
  userLoginLastName: string;


  constructor(private cd: ChangeDetectorRef,
              private router: Router,
              private snackbar: MatSnackBar,
              private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
              private dialog: MatDialog) { 
                this.getUser();
              }

  ngOnInit() {
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  close() {
    this.popoverRef.close();
    //localStorage.clear();
    //this.router.navigate(['/login']);
  }

  openUserGuide(){
    this.popoverRef.close();
    window.open("https://www.sellershub.io/knowledgebase/", "_blank");
  }
  logout() {
    this.popoverRef.close();
    localStorage.clear();
    this.snackbar.open('Successfull logout', 'Ok', {
      duration: 10000
    });
    this.router.navigate(['/login']);
  }

  getUser(){
    this.userLoginName = localStorage.getItem('userLoginFirstName');
    this.userLoginLastName = localStorage.getItem('userLoginLastName');
  }

  openCouponModal(){
    this.popoverRef.close();
    this.dialog.open(RedeemcuponModalComponent, {
      width: '100%',
      maxWidth: 450
    })
  }
}
