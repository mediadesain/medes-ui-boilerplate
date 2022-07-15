import { Component, Input } from '@angular/core';

@Component({
  selector: 'mds-alert-soon',
  templateUrl: './alert-soon.component.html',
  styleUrls: ['./alert-soon.component.scss']
})
export class AlertSoonComponent {
  @Input() version: string;
  // constructor() { }


}
