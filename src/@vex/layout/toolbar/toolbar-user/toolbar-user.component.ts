import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';
import { UrlAPIService } from "src/app/services/url-api.service";

@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  icPerson = icPerson;
  userLoginName: string;
  userLoginLastname: string;


  constructor(private popover: PopoverService,
              private cd: ChangeDetectorRef,
              private urlApi: UrlAPIService,) { 
                this.getUser();
              }

  async ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.urlApi.getAccountSettings().subscribe((userData:any) => {
      const result = userData?.kartzhubUser || [];
      // console.log('userdata',result);

      this.userLoginName = result['firstName'];
      this.userLoginLastname = result['lastName'];
      // console.log('name',this.userLoginName);

      localStorage.setItem("userLoginFirstName", this.userLoginName);
      localStorage.setItem("userLoginLastName", this.userLoginLastname);

    });
    this.userLoginName = localStorage.getItem('userLoginFirstName');
    this.userLoginLastname = localStorage.getItem('userLoginLastName');
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
