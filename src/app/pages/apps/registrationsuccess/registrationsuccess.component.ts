import { Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'vex-registrationsuccess',
  templateUrl: './registrationsuccess.component.html',
  styleUrls: ['./registrationsuccess.component.scss']
})
export class RegistrationsuccessComponent implements OnInit {

  icClose = icClose;
  constructor() { }

  ngOnInit(): void {
  }

}
