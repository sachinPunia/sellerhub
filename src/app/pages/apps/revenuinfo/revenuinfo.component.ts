import { Component, OnInit } from '@angular/core';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-revenuinfo',
  templateUrl: './revenuinfo.component.html',
  styleUrls: ['./revenuinfo.component.scss']
})
export class RevenuinfoComponent implements OnInit {
  listRevenue;
  curMoney;
  constructor(private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    this.urlApi.getDashboard().subscribe((dashboard) => {
      this.listRevenue = dashboard['allCurrencyRevenue'];
    });

    this.urlApi.getDashboard().subscribe((curMon) => {
      this.curMoney = curMon['currency'];
    });
  }

}
