import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/pages/apps/global-constants';

@Component({
  selector: 'vex-channelschedularjob-dashboard',
  templateUrl: './channelschedularjob-dashboard.component.html',
  styleUrls: ['./channelschedularjob-dashboard.component.scss']
})
export class ChannelschedularjobDashboardComponent implements OnInit {

  globalconstants: GlobalConstants = new GlobalConstants();
  
  constructor() { }

  ngOnInit(): void {
  }

}
