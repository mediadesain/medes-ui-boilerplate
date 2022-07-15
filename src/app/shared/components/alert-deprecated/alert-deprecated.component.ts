import { Component, Input } from '@angular/core';

@Component({
  selector: 'mds-alert-deprecated',
  templateUrl: './alert-deprecated.component.html',
  styleUrls: ['./alert-deprecated.component.scss']
})
export class AlertDeprecatedComponent {
@Input() version: string;
@Input() alternative: string;
  // constructor() { }
}
