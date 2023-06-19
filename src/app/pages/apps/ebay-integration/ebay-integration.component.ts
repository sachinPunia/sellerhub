import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ShiporderModelComponent } from "src/app/pages/apps/shiporder-model/shiporder-model.component";
import { CreateorderModalComponent } from "../createorder-modal/createorder-modal.component";
import { EbaygeneratetokenModelComponent } from "src/app/pages/apps/ebaygeneratetoken-model/ebaygeneratetoken-model.component";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { EbaytestconnectionModelComponent } from 'src/app/pages/apps/ebaytestconnection-model/ebaytestconnection-model.component';
import { EbayallproductsModelComponent } from 'src/app/pages/apps/ebayallproducts-model/ebayallproducts-model.component';
import { EbayrecentproductsModelComponent } from 'src/app/pages/apps/ebayrecentproducts-model/ebayrecentproducts-model.component';
import faExchange from '@iconify/icons-fa-solid/exchange-alt';
import faRefresh from '@iconify/icons-ic/refresh';
import faDownload from '@iconify/icons-fa-solid/download';
import faTimesCircle from '@iconify/icons-fa-solid/times-circle';
import faRightangle from '@iconify/icons-fa-solid/angle-right';
import faTimes from '@iconify/icons-fa-solid/times'



@Component({
  selector: "vex-ebay-integration",
  templateUrl: "./ebay-integration.component.html",
  styleUrls: ["./ebay-integration.component.scss"],
})
export class EbayIntegrationComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  faExchange = faExchange;
  faRefresh = faRefresh;
  faDownload = faDownload;
  faTimes = faTimes;
  faTimesCircle = faTimesCircle;
  faRightangle = faRightangle;


  username: string;
  tknexp: string;

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params["username"];
      this.tknexp = params["tknexp"];
    });
    // this.username = this.route.queryParams.getValue().username;
    // this.tknexp = this.route.snapshot.params.param2;
    debugger;
  }

  openGenerateTokenModal() {
    this.dialog.open(EbaygeneratetokenModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }

  openTestConnectionModal() {
    this.dialog.open(EbaytestconnectionModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }

  openAllproductsModal() {
    this.dialog.open(EbayallproductsModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }

  openRecentproductsModal() {
    this.dialog.open(EbayrecentproductsModelComponent, {
      width: "100%",
      maxWidth: 850,
    });
  }
}
