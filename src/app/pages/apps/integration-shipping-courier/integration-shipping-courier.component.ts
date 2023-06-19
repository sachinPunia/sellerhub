import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShippingCourier } from 'src/app/services/shipping-courier';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-integration-shipping-courier',
  templateUrl: './integration-shipping-courier.component.html',
  styleUrls: ['./integration-shipping-courier.component.scss']
})
export class IntegrationShippingCourierComponent implements OnInit {

  shippinglLists: ShippingCourier[];

  constructor(private urlApi: UrlAPIService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  toId;

  getData() {
    this.urlApi.getShippingCourier()
        .subscribe((response) => {
          console.log(response);
          this.shippinglLists = response;
          // debugger;
          this.toId = response['id'];
          // debugger;
        })
  }
}
