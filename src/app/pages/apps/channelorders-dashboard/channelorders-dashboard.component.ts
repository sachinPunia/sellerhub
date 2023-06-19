import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/pages/apps/global-constants';

@Component({
  selector: 'vex-channelorders-dashboard',
  templateUrl: './channelorders-dashboard.component.html',
  styleUrls: ['./channelorders-dashboard.component.scss']
})
export class ChannelordersDashboardComponent implements OnInit {

  globalconstants: GlobalConstants = new GlobalConstants();
  constructor() { }

  ngOnInit(): void {
  }

}
