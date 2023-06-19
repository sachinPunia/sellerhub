import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelEcommerce } from 'src/app/services/channel-ecommerce';
import { ChannelRegistration } from 'src/app/services/channel-registration';
import { ChannelMarketPlace } from 'src/app/services/channel-masrketplace';
import { UrlAPIService } from 'src/app/services/url-api.service';
import icEdit from '@iconify/icons-fa-solid/pencil-alt';
import icRemove from '@iconify/icons-fa-solid/trash';
import { ChannelAccounting } from 'src/app/services/channel-accounting';
import { ChannelCrm } from 'src/app/services/channel-crm';
import { ChannelEpos } from 'src/app/services/channel-epos';
import { ChannelAppstore } from 'src/app/services/channel-appstore';
import { ChannelOther } from 'src/app/services/channel-other';

@Component({
  selector: 'vex-integration-channel-integration',
  templateUrl: './integration-channel-integration.component.html',
  styleUrls: ['./integration-channel-integration.component.scss']
})
export class IntegrationChannelIntegrationComponent implements OnInit {

  channelLists: ChannelMarketPlace[];
  channelRegistration: ChannelRegistration[];
  channelEcommerce: ChannelEcommerce[];
  channelAccounting: ChannelAccounting[];
  channelCrm: ChannelCrm[];
  channelEpos: ChannelEpos[];
  channelAppstore: ChannelAppstore[];
  channelOther: ChannelOther[];

  icEdit = icEdit;
  icRemove = icRemove;
  
  constructor(private urlApi: UrlAPIService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
    this.getRegistrationChannel();
    this.getEcommerceChannel();
    this.getAccounting();
    this.getCrm();
    this.getEpos();
    this.getAppstore();
    this.getOther();
  }

  getData() {
    this.urlApi.getChannelMarketPlace("channel-integration-marketplaces.json")
        .subscribe((response) => {
          console.log(response);
          this.channelLists = response;
        })
  }

  getEcommerceChannel() {
    this.urlApi.getChannelEcommerce("channel-integration-ecommerce.json")
        .subscribe((response) => {
          console.log(response);
          this.channelEcommerce = response;
        })
  }

  getRegistrationChannel() {
    this.urlApi.getChannelRegistration('')
        .subscribe((response) => {
          console.log(response);
          this.channelRegistration = response;
        })
  }

  getAccounting() {
    this.urlApi.getChannelAccounting("channel-accounting.json")
        .subscribe((response) => {
          console.log(response);
          this.channelAccounting = response;
        })
  }

  getCrm() {
    this.urlApi.getChannelCrm("channel-crm.json")
        .subscribe((response) => {
          console.log(response);
          this.channelCrm = response;
        })
  }

  getEpos() {
    this.urlApi.getChannelEpos("channel-epos.json")
        .subscribe((response) => {
          console.log(response);
          this.channelEpos = response;
        })
  }

  getAppstore() {
    this.urlApi.getChannelAppstore("channel-appstore.json")
        .subscribe((response) => {
          console.log(response);
          this.channelAppstore = response;
        })
  }

  getOther() {
    this.urlApi.getChannelOther("channel-other.json")
        .subscribe((response) => {
          console.log(response);
          this.channelOther = response;
        })
  }

  gotoChannel(url, logo, title){
    console.log(url + ' ' + logo + ' ' + title);
    this.router.navigate([url], {
      state: { logo, title }
    })
  }
}
