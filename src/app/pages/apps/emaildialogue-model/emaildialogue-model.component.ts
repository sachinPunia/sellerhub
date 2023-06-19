import { Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icSearch from '@iconify/icons-ic/search'

@Component({
  selector: 'vex-emaildialogue-model',
  templateUrl: './emaildialogue-model.component.html',
  styleUrls: ['./emaildialogue-model.component.scss']
})
export class EmaildialogueModelComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;
  icSearch = icSearch;
  urlApi: any;

  constructor() { }

  ngOnInit(): void {
  }

  

}
