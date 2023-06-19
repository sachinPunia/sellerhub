import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icCheck from '@iconify/icons-ic/twotone-check-circle';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icPictureAsPdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icImage from '@iconify/icons-ic/twotone-image';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-modaluserpermission',
  templateUrl: './modaluserpermission.component.html',
  styleUrls: ['./modaluserpermission.component.scss']
})
export class ModaluserpermissionComponent implements OnInit {
  icClose = icClose;
  icCheck = icCheck;
  icSend = icSend;
  icAttachFile = icAttachFile;
  icPictureAsPdf = icPictureAsPdf;
  icImage = icImage;
  icDelete = icDelete;
  icCancel = icCancel;

  roles= [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.roles[0] = JSON.parse(this.data.roles);
  }

}
