import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'medes-alert-soon',
  templateUrl: './alert-soon.component.html',
  styleUrls: ['./alert-soon.component.scss']
})
export class AlertSoonComponent implements OnInit {
  @Input() version: string;
  // constructor() { }


}
