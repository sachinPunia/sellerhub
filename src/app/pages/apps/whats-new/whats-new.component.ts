import { Component, OnInit } from '@angular/core';
import icbullhorn from '@iconify/icons-fa-solid/bullhorn'

@Component({
  selector: 'vex-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss']
})
export class WhatsNewComponent implements OnInit {
  icbullhorn = icbullhorn;
  constructor() { }

  ngOnInit(): void {
  }

}
