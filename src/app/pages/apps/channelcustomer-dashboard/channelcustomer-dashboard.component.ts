import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/pages/apps/global-constants';

@Component({
  selector: 'vex-channelcustomer-dashboard',
  templateUrl: './channelcustomer-dashboard.component.html',
  styleUrls: ['./channelcustomer-dashboard.component.scss']
})
export class ChannelcustomerDashboardComponent implements OnInit {

  globalconstants: GlobalConstants = new GlobalConstants();
  constructor() { }

  ngOnInit(): void {
  }

}
