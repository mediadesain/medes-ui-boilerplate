import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'medes-alert-deprecated',
  templateUrl: './alert-deprecated.component.html',
  styleUrls: ['./alert-deprecated.component.scss']
})
export class AlertDeprecatedComponent implements OnInit {
@Input() version: string;
  constructor() { }

  ngOnInit(): void {
  }

}
