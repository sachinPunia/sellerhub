import { Component, OnInit } from '@angular/core';
import { TemplateDesigner } from 'src/app/services/template-designer';
import { UrlAPIService } from 'src/app/services/url-api.service';

@Component({
  selector: 'vex-template-designer-invoice',
  templateUrl: './template-designer-invoice.component.html',
  styleUrls: ['./template-designer-invoice.component.scss']
})
export class TemplateDesignerInvoiceComponent implements OnInit {

  listTemplate: TemplateDesigner[];
  constructor(private urlApi: UrlAPIService) { }

  ngOnInit(): void {
    this.getRegistrationChannel();
  }

  getRegistrationChannel() {
    this.urlApi.getTemplateDesigner("template-designer.json")
        .subscribe((response) => {
          console.log(response);
          this.listTemplate = response;
        })
  }
}
